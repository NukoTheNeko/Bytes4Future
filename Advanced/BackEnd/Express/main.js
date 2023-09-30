const express = require('express')
const app = express()
const port = process.env.PORT ?? 3000

app.use( express.json())
app.post(validate)
app.post ('/sum', (req,res) => {
	res.send(req.body.a + req.body.b)
})
app.post ('/divide', (req,res) => {
	res.send(req.body.a / req.body.b)
})


function validate(req, res, next)
{
	if (typeof req.body.a !== "number" || typeof req.body.b !== "number") res.sendStatus("404")
	else next()
}


app.patch('/body', (req, res) => {
	const {one,two} = req.body
	res.send(one + " " + two)
})

app.get('/', (req, res) => {
	const queryName = req.query.name
	const queryAge = req.query.age
	if (queryAge)
	{
		res.send(`Hello ${queryAge} year old ${queryName}.`)
	}
	else if (queryName)
	{
		res.send(`Hello ${queryName}.`)
	}
	res.send("Hello World!")
})

app.get('/test', (req, res) => {
	res.send("We Testing!")
})

app.get('/:name', (req, res) => {
	res.send(`Hello ${req.params.name}.`)
})

app.get('/:name1/:name2', (req, res) => {
	res.send(`${req.params.name1} defeated ${req.params.name2}.`)
})

app.patch('/form', (req, res) => {
	res.send('Tu Madre')
})








app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})