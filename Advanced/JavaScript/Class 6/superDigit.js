function superDigit(x)
{
    if(x.length < 2) return BigInt(x);
    return superDigit(x.split("").reduce((acc,x) => acc+BigInt(x),0n).toString())
}
function superSuperDigit(x,n)
{
    return Number(superDigit((superDigit(x) * BigInt(n)).toString()))
}
console.log(superSuperDigit("9875",4))
console.log(superSuperDigit("9875",123123123123123123))
console.log(superSuperDigit("9875",123123123123123123123123123))
console.log(superSuperDigit("12",5))