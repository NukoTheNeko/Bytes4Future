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