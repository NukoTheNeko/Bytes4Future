const { search, get_channel, get_song, get_song_related } = require("libmuse");
const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000

const databank = require("./ytHistory.json");

let history

const fs = require('fs');

async function GetHistory()
{
	if(fs.existsSync("./processedHistory.json"))
	{
		history = new Map(Object.entries(require("./processedHistory.json")));
	}
	else
	{
		let videos = new Map();
		let songIDS = new Map();
		for (let data of databank)
		{
			if (!('title' in data) || !('titleUrl' in data))
			{
				continue;
			}
			let song = data.title;
			let songID = data.titleUrl.slice(32);

			videos.set(song,(videos.get(song)??0)+1)
			songIDS.set(song, songID)
		}

		let multiWatched = new Map(
			[...videos]
			.filter(([k, v]) => v > 1 )
		);

		let i = 0;

		for(let [key, value] of multiWatched)
		{
			let length = 0;

			try
			{
				let querydata = await get_song(songIDS.get(key))
				length = querydata.formats[0].duration_ms
			}
			catch(err)
			{
				length = 0;
			}
			
			let minutes = Math.floor(value * length / 1000 / 60)
			let seconds = Math.floor(Math.floor(value * length / 1000) % 60)

			i++;
			console.log(i + "/" + multiWatched.size + ": " + key + " for " + (minutes + seconds/100) + " minutes")
			
			multiWatched.set(key, (minutes + seconds/100))
		}

		history = new Map(
			[...multiWatched]
			.filter(([k, v]) => v > 0 )
			.sort((a, b) => b[1] - a[1])
		);
		fs.writeFile("processedHistory.json", JSON.stringify(Object.fromEntries(history)), function(err) {
			if (err) {
				console.log(err);
			}
		});
	}


}

app.get('/topSongs/:number', (req, res) => {
	let number = req.params.number
	GetHistory();
	let topSongs = new Map([...history.entries()].slice(0,number));
	res.json({top : Object.fromEntries(topSongs)})
})




app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})