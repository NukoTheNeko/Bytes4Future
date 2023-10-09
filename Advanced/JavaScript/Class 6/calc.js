class Calculadora {
    operations = {
        "soma": (a,b) => a + b,
        "subtração": (a,b) => a - b,
        "multiplicação": (a,b) => a * b,
        "divisão": (a,b) => a / b
    }
    constructor()
    {
        this.historico = []
    }

    operate (op, a, b)
    {
        let result = this.operations[op](a,b)
        this.historico.push({
            operacao: op,
            a: a,
            b: b,
            resultado: result
        })
        return result
    }

    somar(a,b){return operate("soma", a, b)}
    subtrair(a,b){return operate("subtração", a, b)}
    multiplicar(a,b){return operate("multiplicação", a, b)}
    dividir(a,b){return operate("divisão", a, b)}

    lerHistorico(op)
    {
        return op ? this.historico.filter(ele => ele.operacao === op) : this.historico
    }
}

let calculadora = new Calculadora()

console.log(calculadora.operate("soma",3,4))