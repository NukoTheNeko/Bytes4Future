const operacoes_test = [
    { slug: "+", callback: (a, b) => a + b },
    { slug: "-", callback: (a, b) => a - b },
    { slug: "*", callback: (a, b) => a * b },
    { slug: "/", callback: (a, b) => a / b },
    { slug: "**", callback: (a, b) => a ** b },
]
class Calculator {
    #historico
    #ultimoResultado

    constructor() {
        this.#historico = []
        this.#ultimoResultado = 0n;
    }

    #corrigirArgumentos(a, b) {
        const valor1 = b == Number(b) || b === BigInt(b ?? 0) ? a : this.#ultimoResultado
        const valor2 = b == Number(b) || b === BigInt(b ?? 0) ? b : a

        return [BigInt(valor1), BigInt(valor2)]
    }

    #aplicaOperacao(a, b, op) {
        const operacao = operacoes_test.find(operacao => operacao.slug === op)
        const result = operacao.callback(a, b)

        this.#ultimoResultado = result
        this.#historico.push({ a, b, op, result })
    }

    operate(op, a, b) {
        const valores = this.#corrigirArgumentos(a, b)
        this.#aplicaOperacao(valores[0], valores[1], op)
        return this
    }

    obterResultado() {
        return BigInt(this.#ultimoResultado)
    }

    toJSON() {
        return {
            historico: this.#historico.map(({ a, b, op, result }) => `${a} ${op} ${b} = ${result}`),
            ultimoResultado: String(this.#ultimoResultado)
        }
    }

    limparHistorico() {
        this.#historico = [];
        this.#ultimoResultado = 0n;

        return this;
    }
}

module.exports = {
    Calculator
}
