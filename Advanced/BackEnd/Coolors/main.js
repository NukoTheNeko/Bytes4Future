const express = require('express');
const app = express();
const port = process.env.PORT ?? 3010;


const colors = [{color:"", locked:false},
				{color:"", locked:false},
				{color:"", locked:false},
				{color:"", locked:false},
				{color:"", locked:false}];

const getRandomColor = () => {
	return ('#' + (Math.floor(Math.random() * 0xFFFFFF)).toString(16).padStart(6, 0));
}

const createPalette = () => {
	colors.map(x => {
		x.color = x.locked ? x.color : getRandomColor();
	})
}

app.get('/api/palette/generate', (req, res) => {
	createPalette();
	res.status(200).json({colors: colors});
})

app.get("/api/palette", (req, res) => {
	if (colors[0].color == "")
	{
		res.redirect('/api/palette/generate');
		return;
	}
	res.status(200).json({colors: colors});
}) 

function validateBlock(req, res, next) {
	if(req.params.index < 0 || req.params.index >= colors.length)
	{
		res.status(400).json({ erro: "Out of range exception." });
	}
	else
	{
		next();
	}
}
app.patch('/api/palette/block/:index', validateBlock, (req, res) => {
	let toLock = req.params.index;
	colors[toLock].locked = !colors[toLock].locked;
	res.status(200).json({colors: colors});
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
})