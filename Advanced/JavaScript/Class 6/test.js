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

/*function verificaPangrama(string) {
    const todas = "abcdefghijlmnopqrstuvxz"
    const minusculas = string.toLowerCase()

    return todas.every(l => minusculas.includes(l))
}

console.log(verificaPangrama("AOECISTBVNWIXEABQEOWOQWERTYUIOPLKJHGFDSAZXCVBNM"))*/

function calculaAreaSuperficiePiramidePentagonal(ladodabase, altura) {
    if (ladodabase< 0 || altura < 0)
    {
        return "Por favor introduza valores positivos."
    }
    return Math.round((5/4) * Math.tan(54 * (Math.PI / 180))*ladodabase**2+5*(ladodabase/2)*Math.sqrt(altura ** 2 + (ladodabase*Math.tan(54 * (Math.PI / 180))/2)**2))
}
console.log(calculaAreaSuperficiePiramidePentagonal(324,10))

function calculaForcaDaPassword(string) {
    const TESTS = [
        (pass) => {return pass.length >= 8 ? 1 : 0},
        (pass) => {return /\d/.test(pass) ? 1 : 0},
        (pass) => {return /[A-Z]/.test(pass) ? 1 : 0}
    ]
    return string === "" ? "Por favor introduza uma password válida." : TESTS.reduce((acc,ele) => acc += ele(string),0)
}


const heapsort = arr => {
    const a = [...arr];
    let l = a.length;

    const heapify = (a,i)=>{
        const left = 2 * i +1;
        const right = 2 * i +2;
        let max = i;
        if(left< l && a[left] > a[max]) max = left;
        if(right< l && a[right] > a[max]) max = right;
        if(max !== i)
        {
            [a[max], a[i]] = [a[i], a[max]] ;
            heapify(a,max);
        }
    };

    for (let i = Math.floor(l/2); i >= 0; i-=1) heapify(a,i);
    for ( i = a.length-1; i > 0; i--)
    {
        [a[0], a[i]] = [a[i], a[0]] ;
        l--;
        heapify(a,0);
    }
    return a
}

console.log(heapsort([3,7,2,8]))
