// console.log("a \n bc")
// let cat = 3
// {
//     var dog = 3
// }
// console.log(cat)
// console.log(dog)

function Fibonacci(iter)
{
    let number;
    if(iter <= 1)
    {
        return iter;
    }
    return Fibonacci(iter - 1) + Fibonacci(iter - 2);
}

for (let i = 1; i <= 10; i++) 
{
    process.stdout.write(Fibonacci(i) + " ");
}
console.log();