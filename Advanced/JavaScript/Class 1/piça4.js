function encontraPrimo(array){
    return array.find((x) => auxiliar(x))
}

function auxiliar(number)
{
    for (let i = 2; i <= Math.sqrt(number); i++)
    {
        if (number % i === 0)
        {
            return false;
        }
    }
    return number > 1;
}

console.log(auxiliar(7))