function calculaEstacaoDoAno(dia, mes){
    // escreve aqui a função
    // Primavera - 21 de Março a 20 de Junho
    // Verão - 21 de Junho a 20 de Setembro
    // Outono - 21 de Setembro a 20 de Dezembro
    // Inverno - 21 de Dezembro a 20 de Março

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
    if ((dia >= 21 && mes === 3) || (mes > 3 && mes < 6) || (dia <= 20 && mes === 6))
    {
        return "Primavera";
    }
    if ((dia >= 21 && mes === 6) || (mes > 6 && mes < 9) || (dia <= 20 && mes === 9))
    {
        return "Verão";
    }
    if ((dia >= 21 && mes === 9) || (mes > 9 && mes < 12) || (dia <= 20 && mes === 12))
    {
        return "Outono";
    }
    return "Inverno";
}
