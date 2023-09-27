
function contaPares(array)
{
    if (array.length === 0)
    {
        return 0;
    }
    let one = array[0] % 2 === 0 ? 1 : 0;
    return one + contaPares(array.slice(1));
}
console.log(contaPares([1,2,3,4,5,6]))

function soma(array)
{
    if(array.length === 1)
    {
        return array[0];
    }
    return array[0] + soma(array.slice(1));
}
console.log(soma([1,2,3,4,5,6]))

function fatoriaisDoArray(array)
{
    if (array.length === 1)
    {
        return [factorial(array[0])]
    }
    return [factorial(array[0])].concat(fatoriaisDoArray(array.slice(1)))
}
function factorial(n)
{
    if (n === 1)
    {
        return 1n;
    }
    return BigInt(n) * factorial(n-1);
}


console.log(fatoriaisDoArray([10,21,29,10,5,10,9,19,5,20,22,18,29,7,28,27,29,10,30,9,24,8,4,20,8]))
