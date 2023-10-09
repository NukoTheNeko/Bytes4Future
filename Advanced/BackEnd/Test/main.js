import { get_song, search } from "libmuse";
const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000

async function GetSmth()
{
	search("drake")
  .then((data) => {
    console.log("search results", data);
  });
}

app.get('/', (req, res) => {
	GetSmth();
})




app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})