const express = require('express')
const app = express()
const port = process.env.PORT ?? 3030

let collection = []

app.use( express.json())
app.get('/api/colecao/:id', (req,res) => {
	const id = Number(req.params.id);
	const object = collection.find(ele => ele.id === id);
	if (object)
	{
		res.status(200).send(object)
	}
	else
	{
		res.sendStatus(404)
	}
})
app.patch('/api/colecao/:id', (req,res) => {
	const id = Number(req.params.id);
	const index = collection.findIndex(ele => ele.id === id);
	if (index >= 0)
	{
		collection[index] = req.body
		res.sendStatus(200)
	}
	else
	{
		res.sendStatus(404)
	}
})

app.post('/api/colecao', (req,res) => {
	const id = req.body.id;
	const index = collection.findIndex(ele => ele.id === id);
	if (index == -1)
	{
		collection.push(req.body)
		res.sendStatus(200);
	}
	else
	{
		res.sendStatus(409);
	}
})
	





app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})