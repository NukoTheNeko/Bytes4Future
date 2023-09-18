function rec(n)
{
    if(n === 0)
    {
        return [0]
    }
    return n%2 === 0 ? rec(n-1).concat(n) : rec(n-1)
}

console.log(rec(5))

class Inteiro {
    #valor = 0
    constructor(newValue)
    {
        if (!isNaN(newValue))
        {
            this.#valor = Math.trunc(newValue)
        }
    }
    get valor()
    {
        return this.#valor
    }
}
let int = new Inteiro(3)
console.log(int.valor)

function produtoExclusivo(array) {
    return array.map((x,index) => array.filter((y,i) => i != index).reduce((acc,x) => acc * x))
}

console.log(produtoExclusivo([1,2,3]))

function adicionaSemanas(data, semanas) {
    // escreve aqui a função
    return new Date(data.getTime() + (semanas * 7 * 24 * 60 * 60 * 1000))
}
console.log(adicionaSemanas(new Date(), 3))

function diaDaSemanaPorExtensoBilingue(data, lingua){
    switch (lingua)
    {
        case "pt":
            return data.toLocaleDateString("pt-PT", {weekday:"long"});
            case "en":
            return data.toLocaleDateString("en-US", {weekday:"long"});
    }
} 
console.log(diaDaSemanaPorExtensoBilingue(new Date(), "en"))

function fatorialN(n){
    let number = BigInt(n);
    let result = BigInt(1);
    while (number > BigInt(0))
    {
        result *= number
        number--;
    }
    return result
}

console.log(fatorialN(3n))