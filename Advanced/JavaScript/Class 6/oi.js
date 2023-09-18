function mapaDeOcurrencias(array)
{
    return array.reduce((acc,x)=> acc.set(x, (acc.get(x)??0) + 1), new Map())
}
console.log(mapaDeOcurrencias([1,2,1,2,3,4,4]))

function arrayFromBigInt(number)
{
    if(number <= 10n)
    {
        return [Number(number)]
    }
    return arrayFromBigInt((number / 10n)).concat([Number(number%10n)])
}


console.log(arrayFromBigInt(12345n))