function arrayDeNAZero(n){
    if (n <= 0)
    {
        return "Por favor insira um número superior a 0."
    }
    if (n === 1)
    {
        return [0, 1];
    }
    let arr = arrayDeNAZero(n - 1)
    arr.push(n)
    return arr
}
console.log(arrayDeNAZero(4))

function calculaModa(array){
    let solution
    let map = new Map()
    array.map((x) => map.set(x, (map.get(x) ?? 0) + 1))
    for (let entry of map.entries())
    {
        if (solution === undefined || entry[1] > solution[1])
        {
            solution = entry;
        }
    }
    return solution[0]
}
console.log(calculaModa([2,2,1,2,3]))

function diaEmPalavras(dia, mes, ano){
    if (dia < 1 || dia > 31)
    {
        return "Por favor introduza um dia entre 1 e 31."
    }
    if (mes < 1 || mes > 12)
    {
        return "Por favor introduza um mês entre 1 e 12."
    }
    if (ano < 2000 || ano > 2030)
    {
        return "Por favor introduza um ano entre 2000 e 2030."
    }
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30)
    {
        return "Por favor introduza um dia entre 1 e 30."
    }
    if ((year % 4 === 0 && year % 100 != 0 || year % 400 === 0) && mes == 2 && dia > 29)
    {
        return "Por favor introduza um dia entre 1 e 29."
    }
    if (mes == 2 && dia > 28)
    {
        return "Por favor introduza um dia entre 1 e 28."
    }
    let diaMap = new Map(
        [
            [1,"um"],
            [2,"dois"],
            [3,"três"],
            [4,"quatro"],
            [5,"cinco"],
            [6,"seis"],
            [7,"sete"],
            [8,"oito"],
            [9,"nove"],
            [10,"dez"],
            [11,"onze"],
            [12,"doze"],
            [13,"treze"],
            [14,"quatorze"],
            [15,"quinze"],
            [16,"dezasseis"],
            [17,"dezassete"],
            [18,"dezoito"],
            [19,"dezanove"],
            [20,"vinte"],
            [21,"vinte e um"],
            [22,"vinte e dois"],
            [23,"vinte e três"],
            [24,"vinte e quatro"],
            [25,"vinte e cinco"],
            [26,"vinte e seis"],
            [27,"vinte e sete"],
            [28,"vinte e oito"],
            [29,"vinte e nove"],
            [30,"trinta"],
            [31,"trinta e um"]
        ]
    )
    let mesMap = new Map(
        [
            [1,"janeiro"],
            [2,"fevereiro"],
            [3,"março"],
            [4,"abril"],
            [5,"maio"],
            [6,"junho"],
            [7,"julho"],
            [8,"agosto"],
            [9,"setembro"],
            [10,"outubro"],
            [11,"novembro"],
            [12,"dezembro"],
        ]
    )
    let anoMap = new Map(
        [
            [2000,"dois mil"],
            [2001,"dois mil e um"],
            [2002,"dois mil e dois"],
            [2003,"dois mil e três"],
            [2004,"dois mil e quatro"],
            [2005,"dois mil e cinco"],
            [2006,"dois mil e seis"],
            [2007,"dois mil e sete"],
            [2008,"dois mil e oito"],
            [2009,"dois mil e nove"],
            [2010,"dois mil e dez"],
            [2011,"dois mil e onze"],
            [2012,"dois mil e doze"],
            [2013,"dois mil e treze"],
            [2014,"dois mil e quatorze"],
            [2015,"dois mil e quinze"],
            [2016,"dois mil e dezasseis"],
            [2017,"dois mil e dezassete"],
            [2018,"dois mil e dezoito"],
            [2019,"dois mil e dezanove"],
            [2020,"dois mil e vinte"],
            [2021,"dois mil e vinte e um"],
            [2022,"dois mil e vinte e dois"],
            [2023,"dois mil e vinte e três"],
            [2024,"dois mil e vinte e quatro"],
            [2025,"dois mil e vinte e cinco"],
            [2026,"dois mil e vinte e seis"],
            [2027,"dois mil e vinte e sete"],
            [2028,"dois mil e vinte e oito"],
            [2029,"dois mil e vinte e nove"],
            [2030,"dois mil e trinta"]
        ]
    )
    return `${diaMap.get(dia)} de ${mesMap.get(mes)} de ${anoMap.get(ano)}`
}
console.log(diaEmPalavras(2,2,2020))