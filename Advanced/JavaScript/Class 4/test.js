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

function formataData(data){
    // escreve aqui a função
    return `${(data.getMonth()+1).toString().padStart(2,"0")}-${data.getDate().toString().padStart(2,"0")}-${data.getFullYear()}`
} 

console.log(formataData(new Date(2000,2,2)))

function higherThanN(array, n)
{
    if (array.length == 0)
    {
        return 0;
    }
    let number = array[0]
    return higherThanN(array.slice(1),n) + (number > n ? 1 : 0)
}
console.log(higherThanN([1,2,3,4],2));

function produtoExclusivo(array)
{
    let result = [];
    for (let i = 0; i < array.length; i++)
    {
        let sum = 1;
        for (let j = 0; j < array.length; j++)
        {
            if(i == j)
            {
                continue;
            }
            sum *= array[j];
        }   
        result.push(sum)
    }
    return result;
}
console.log(produtoExclusivo([3,4,5]));
console.log(produtoExclusivo([1,3,5]));

function cube(array)
{
    if(array.length == 1)
    {
        return array[0]**2
    }
    return [array[0]**2].concat(cube(array.slice(1)))
}
console.log(cube([3,4,5]));

function dataPorExtenso(data){
    let opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return data.toLocaleDateString('ar-EG', opcoes);
}
console.log(dataPorExtenso(new Date()))
