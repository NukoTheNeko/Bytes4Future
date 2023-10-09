function tempoEmPalavras(horas, minutos){
    // escreve aqui a função
    let minutes = new Map(
        [
            [0, "em ponto"],
            [1, "um"],
            [2, "dois"],
            [3, "três"],
            [4, "quatro"],
            [5, "cinco"],
            [6, "seis"],
            [7, "sete"],
            [8, "oito"],
            [9, "nove"],
            [10, "dez"],
            [11, "onze"],
            [12, "doze"],
            [13, "treze"],
            [14, "quatorze"],
            [15, "um quarto"],
            [16, "dezasseis"],
            [17, "dezassete"],
            [18, "dezoito"],
            [19, "dezanove"],
            [20, "vinte"],
            [21, "vinte e um"],
            [22, "vinte e dois"],
            [23, "vinte e três"],
            [24, "vinte e quatro"],
            [25, "vinte e cinco"],
            [26, "vinte e seis"],
            [27, "vinte e sete"],
            [28, "vinte e oito"],
            [29, "vinte e nove"],
            [30, "meia"]
        ]
    )
    let hours = new Map(
        [
            [0, "meita noite"],
            [1, "uma"],
            [2, "duas"],
            [3, "três"],
            [4, "quatro"],
            [5, "cinco"],
            [6, "seis"],
            [7, "sete"],
            [8, "oito"],
            [9, "nove"],
            [10, "dez"],
            [11, "onze"],
            [12, "meio dia"]
        ]
    )
    if (hours > 12)
    {
        hours -= 12;
    }
    if (minutos == 0)
    {
        return `${hours.get(horas)} ${minutes.get(minutos)}`
    }
    if (minutos <= 30)
    {
        return `${hours.get(horas)} e ${minutes.get(minutos)}`
    }
}
console.log(tempoEmPalavras(12,0))

function horaPorExtenso(data){
    let horas = data.getUTCHours()
    let minutos = data.getMinutes()
    let minutes = new Map(
        [
            [0, "em ponto"],
            [1, "um"],
            [2, "dois"],
            [3, "três"],
            [4, "quatro"],
            [5, "cinco"],
            [6, "seis"],
            [7, "sete"],
            [8, "oito"],
            [9, "nove"],
            [10, "dez"],
            [11, "onze"],
            [12, "doze"],
            [13, "treze"],
            [14, "quatorze"],
            [15, "um quarto"],
            [16, "dezasseis"],
            [17, "dezassete"],
            [18, "dezoito"],
            [19, "dezanove"],
            [20, "vinte"],
            [21, "vinte e um"],
            [22, "vinte e dois"],
            [23, "vinte e três"],
            [24, "vinte e quatro"],
            [25, "vinte e cinco"],
            [26, "vinte e seis"],
            [27, "vinte e sete"],
            [28, "vinte e oito"],
            [29, "vinte e nove"],
            [30, "meia"],
            [31, "trinta e um"],
            [32, "trinta e dois"],
            [33, "trinta e três"],
            [34, "trinta e quatro"],
            [35, "trinta e cinco"],
            [36, "trinta e seis"],
            [37, "trinta e sete"],
            [38, "trinta e oito"],
            [39, "trinta e nove"],
            [40, "quarenta"],
            [41, "quarenta e um"],
            [42, "quarenta e dois"],
            [43, "quarenta e três"],
            [44, "quarenta e quatro"],
            [45, "quarenta e cinco"],
            [46, "quarenta e seis"],
            [47, "quarenta e sete"],
            [48, "quarenta e oito"],
            [49, "quarenta e nove"],
            [50, "cinquenta"],
            [51, "cinquenta e um"],
            [52, "cinquenta e dois"],
            [53, "cinquenta e três"],
            [54, "cinquenta e quatro"],
            [55, "cinquenta e cinco"],
            [56, "cinquenta e seis"],
            [57, "cinquenta e sete"],
            [58, "cinquenta e oito"],
            [59, "cinquenta e nove"]
        ]
    )
    let hours = new Map(
        [
            [0, "meita noite"],
            [1, "uma"],
            [2, "duas"],
            [3, "três"],
            [4, "quatro"],
            [5, "cinco"],
            [6, "seis"],
            [7, "sete"],
            [8, "oito"],
            [9, "nove"],
            [10, "dez"],
            [11, "onze"],
            [12, "meio dia"],
            [13, "treze"],
            [14, "quatorze"],
            [15, "quinze"],
            [16, "dezasseis"],
            [17, "dezassete"],
            [18, "dezoito"],
            [19, "dezanove"],
            [20, "vinte"],
            [21, "vinte e uma"],
            [22, "vinte e duas"],
            [23, "vinte e três"]
        ]
    )

    if (minutos == 0)
    {
        return `${hours.get(horas)} ${minutes.get(minutos)}`
    }
    return `${hours.get(horas)} e ${minutes.get(minutos)}`
} 