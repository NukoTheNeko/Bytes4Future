function cubosDoArray(array){
    let arr = func(0, array)
    return arr
}

function func(n, array)
{
    if (n >= array.length)
    {
        return new Array()
    }
    let arr = func(n + 1, array)
    arr.unshift(array[n] ** 2);
    return arr;
}

console.log(cubosDoArray([1,2,3,4]));