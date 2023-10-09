const express = require('express')
const app = express()
const port = process.env.PORT ?? 3030

const assets = require('./assets.json')

app.get('/auto', (req,res) => {
	const options = req.query.search_options ? assets.some(ele => Object.keys(ele).includes(req.query.search_options)) ? req.query.search_options : "title" : "title"
	const results = assets.filter(ele => ele[options].includes(req.query.value))
	res.status(200).send({results : results})
})




app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})