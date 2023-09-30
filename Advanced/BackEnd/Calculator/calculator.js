const express = require('express')
const app = express()
const port = process.env.PORT ?? 5010
const { Calculator } = require("./logic");


const calculator = new Calculator();

let lastOperator = "";

app.use(express.json())
function validate(req, res, next) {
	if (isNaN(req.body.a) || (req.body.b && isNaN(req.body.b))) {
		res.status(400).json({ erro: "Argumentos Inválidos" })
	}
	else {
		next()
	}
}
app.post('/op/:op', validate)
app.post('/op/:op', (req, res) => {
	let { a, b } = req.body;
	let obj = {}
	switch (req.params.op) {
		case "somar":
			obj = calculator.operate("+", a, b);
			lastOperator = "+";
			break;
		case "subtrair":
			obj = calculator.operate("-", a, b);
			lastOperator = "-";
			break;
		case "multiplicar":
			obj = calculator.operate("*", a, b);
			lastOperator = "*";
			break;
		case "dividir":
			obj = calculator.operate("/", a, b);
			lastOperator = "/";
			break;
		case "potencia":
			obj = calculator.operate("**", a, b);
			lastOperator = "**";
			break;
		default:
			res.status(404).json({ erro: "Operação Inválida" });
			return;
	}
	res.status(200).json({ calculadora: obj })
})


function validateSingle(req, res, next) {
	if (isNaN(req.body.num)) {
		res.status(400).json({ erro: "Argumentos Inválidos" })
	}
	else if (lastOperator === "") {
		res.status(404).json({ erro: "Não existe operação para repetir" })
	}
	else {
		next()
	}
}
app.post('/repetir', validateSingle)
app.post('/repetir', (req, res) => {
	res.status(200).json({ calculadora: calculator.operate(lastOperator, req.body.num) })
})



app.delete('/', (req, res) => {
	lastOperator="";
	res.status(200).json({ calculadora: calculator.limparHistorico() })
})




app.get('/ultimo-resultado', (req, res) => {
	res.status(200).json({ "ultimo-resultado": String(calculator.obterResultado() ?? 0) })
})

app.get('/', (req, res) => {
	res.status(200).json({ calculadora: calculator.toJSON() })
})








app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})