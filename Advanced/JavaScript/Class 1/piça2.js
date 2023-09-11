function calculaDiaDoAno(dia, mes){
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
    let arr = [31,28,31,30,31,30,31,31,30,31,30]
    let sum = dia;
    for (let i = 0; i < mes - 1; i++)
    {
        sum+=arr[i];
    }
    return sum
}