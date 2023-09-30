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

function contaSuperioresAN(array, n)
  {
    if (array.length === 1)
    {
      return array[0] > n ? 1 : 0
    }
    return (array[0] > n ? 1 : 0) + contaSuperioresAN(array.slice(1), n)
  }
  console.log(contaSuperioresAN([1,2,3,4],2))
  
  
  function paresDeZeroAN(n){
    if(n <= 0)
    {
        return "Por favor insira um número superior a 0."
    }
    if(n === 1)
    {
        return [0]
    }
    return n % 2 === 0 ? [...paresDeZeroAN(n-1), n] : [...paresDeZeroAN(n-1)]
}
console.log(paresDeZeroAN(6))

function calculaDiasAteAoNatal(dia, mes){
    if (dia > 31 || dia < 1)
    {
        return "Por favor introduza um dia entre 1 e 31.";
    }
    if (mes > 12 || mes < 1)
    {
        return "Por favor introduza um mês entre 1 e 12.";
    }
    if (dia > 30 && (mes == 4 || mes == 6 || mes == 9 || mes == 11))
    {
        return "Por favor introduza um dia entre 1 e 30.";
    }
    if (dia > 28 && mes == 2)
    {
        return "Por favor introduza um dia entre 1 e 28.";
    }
    if (mes === 12)
    {
        if (dia ===  25)
        {
            return "Hoje é Natal!"
        }
        if (dia ===  24)
        {
            return "Falta 1 dia até ao Natal."
        }
        if (dia < 24)
        {
            return `Faltam ${25-dia} dias até ao Natal.`
        }
        return `Faltam ${365 + 25 - dia} dias até ao Natal.`
    }
    let month = [31,28,31,30,31,30,31,31,30,31,30]
    let days = 365 - dia - 6
    for (let i = 0; i < mes-1; i++)
    {
        days -= month[i];
    }
    return `Faltam ${days} dias até ao Natal.`
}

