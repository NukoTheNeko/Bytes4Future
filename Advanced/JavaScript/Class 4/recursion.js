function factorial(n)
{
    if (n === 1)
    {
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(5))

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