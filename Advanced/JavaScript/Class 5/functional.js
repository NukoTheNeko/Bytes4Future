function mapLength(arr)
{
    return arr.map((x) => x.length);
}
console.log(mapLength(["potato","toot"]));

function sumSquaredEven(arr)
{
    return arr.filter((x) => x % 2 === 0).map((x) => x ** 2).reduce((sum,element) => sum + element);
}
console.log(sumSquaredEven([1,2,3,4,5,6,7,8,9,10]));

/* function Recursion(arr)
{
    if(arr.length <= 1)
    {
        return arr
    }
    let array = Recursion(arr.slice(1,-1))
    return arr[arr.length - 1].concat(array).concat(arr[0])
} */

function Recursion(arr)
{
    if(arr.length <= 1)
    {
        return arr
    }
    return Recursion(arr.slice(1)) + arr[0]
}

function invertString(stringArr)
{
    return stringArr.map((x) => Recursion(x));
}
console.log(invertString(["potato","toait"]));

function allPair(arr)
{
    return arr.every((x) => x % 2 === 0);
}
console.log(allPair([2,4,6]));
console.log(allPair([2,4,6,1]));

function sumPair(arr)
{
    return arr.some((x) => x % 2 === 0);
}
console.log(sumPair([3,1,7]));
console.log(sumPair([2,1,1,1]));

function mapOc(arr)
{
    return arr.reduce((acc, ele) => acc.set(ele, (acc.get(ele) ?? 0) + 1),new Map())
}
console.log(mapOc([2,1,1,1]));

class Dog
{
    constructor(name)
    {
        this.name = name
    }
}
let dog = new Dog("Pierre")
console.log(dog)