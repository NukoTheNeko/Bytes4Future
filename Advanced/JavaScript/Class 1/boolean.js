console.log("XOR");
function XOR(arr)
{   
    return arr.reduce((a,b)=> a+b) === 1;
}

console.log(XOR([true, false]));
console.log(XOR([false, true, true]));
console.log(XOR([true, false, false]));
console.log(XOR([false,false, false, true]));
console.log(XOR([false,false, false, true, true]));

console.log("NAND");
function NAND(arr)
{
    return arr.reduce((a,b)=> a+b) !== arr.length;
}

console.log(NAND([true, false]));
console.log(NAND([true, true, true]));
console.log(NAND([true, false, false]));
console.log(NAND([false, false, false, true]));
console.log(NAND([false, false, false, true, true]));