class Calculadora
{
    historico = new Array()
    ultimoResultado = BigInt(0);
    operations = new Map(
        [
            ["+", (a,b) => a + b],
            ["-", (a,b) => a - b],
            ["*", (a,b) => a * b],
            ["/", (a,b) => a / b],
        ]
    )


    constructor() {}

    applyOperation(a,b,op)
    {
        if (!b)
        {
            b = a;
            a = this.ultimoResultado;
        }
        a=BigInt(a)
        b=BigInt(b)
        this.ultimoResultado = this.operations.get(op)(a,b);
        this.historico.push(`${a} ${op} ${b} = ${this.ultimoResultado}`);
        return this;
    }

    somar(a,b)
    {
        this.applyOperation(a,b,"+");
    }
    
    subtrair(a,b)
    {
        this.applyOperation(a,b,"-");
    }
    
    multiplicar(a,b)
    {
        this.applyOperation(a,b,"*");
    }
    
    dividir(a,b)
    {
        this.applyOperation(a,b,"/");
    }

    limparHistorico()
    {
        this.historico = new Array();
        this.ultimoResultado = BigInt(0);
        return this;
    }



    obterResultado()
    {
        return this.ultimoResultado
    }



    toJSON()
    {
        return {
            "historico": this.historico,
            "ultimoResultado": this.ultimoResultado.toString()
        }
    }



    toString()
    {
        if (this.historico.length == 0)
        {
            return "Calculadora Limpa";
        }
        return`=== Histórico da Calculadora ===
${this.historico.reduce((str,ele,index) => str + `${index + 1}. ${ele}\r\n`,"")}=== Fim do Histórico ===
Foram realizadas ${this.historico.length} operações
Último Resultado: ${this.ultimoResultado}`
    }
}

let calc = new Calculadora();

calc.somar(2,2);
calc.somar(3);
calc.subtrair(4,8);
calc.subtrair(7);
calc.multiplicar(4,8);
calc.multiplicar(7);
calc.dividir(6,3);
calc.dividir(2);
console.log((calc.toString()));
calc.limparHistorico();
console.log(calc.toString());

let a= 3;
let b= 2;
let c= 4;
if(b)
{
    if((a=b) && (b=c))
    {
        console.log(c) 
    }
}
console.log((a=b)&&(b=c))




class Calculadora2 {
    #ops = new Map([
        ["soma",(a,b) => a + b],
        ["subtração",(a,b) => a - b],
        ["multiplicação",(a,b) => a * b],
        ["divisão",(a,b) => a / b]
    ])
    constructor()
    {
        this.historico = []
    }

    applyOp(op, a, b)
    {
        let resultado = this.#ops.get(op)(a,b);
        this.historico.push({
            operacao:op,
            a:a,
            b:b,
            resultado:resultado
        })
        return resultado
    }

    somar (a,b){return this.applyOp("soma", a, b)}
    subtrair (a,b){return this.applyOp("subtração", a, b)}
    multiplicar (a,b){return this.applyOp("multiplicação", a, b)}
    dividir (a,b){return this.applyOp("divisão", a, b)}

    lerHistorico(operacao)
    {
        if(operacao)
        {
            return this.historico.filter(ele => ele.operacao === operacao)
        }
        return this.historico
    }
}