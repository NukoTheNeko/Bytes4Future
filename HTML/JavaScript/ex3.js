//Ex 1

console.log("Ex 1");
let a = "Hello";
let b = "World";
let c = a + " " + b;
console.log(c);

//Ex 2

console.log("Ex 2");
let num = 100;
let str = '100';
let sum = num + Number(str);
console.log(sum);

//Ex 3

console.log("Ex 3");
function CountEven(a,b)
{
    let count = 0;
    if (a==b)
    {
        return "Error";
    }
    if (a > b)
    {
        [a, b] = [b, a];
    }
    for (let i = a; i <= b; i++) 
    {
        if (i % 2 == 0)
        {
            count++;
        }
    }
    return count;
}
console.log(CountEven(7,3));

//Ex 4

console.log("Ex 4");
function GetTriMonths(num)
{
    switch (num) 
    {
        case 1:
            return "January, February, March";
        case 2:
            return "April, May, June";
        case 3:
            return "July, August, September";
        case 4:
            return "October, November, December";
        default:
            return "Invalid";
    }
}
for (let i = 0; i <= 5; i++) 
{
    console.log(GetTriMonths(i));
}

//Ex 5

console.log("Ex 5");
function CreateArray(num)
{
    if (num <= 0 || isNaN(num))
    {
        return "Invalid";
    }
    let array = new Array;
    for (let i = 0; i <= num; i++) 
    {
        array.push(i);
    }
    return array;
}
console.log(CreateArray(7));

//Ex 6

console.log("Ex 6");
function FizzBuzz(num)
{
    if (num <= 0 || isNaN(num))
    {
        return "Invalid";
    }
    let array = new Array;
    for (let i = 1; i <= num; i++) 
    {
        let word = "";
        if (i % 3 ==  0)
        {
            word += "Fizz";
        }
        if (i % 5 == 0)
        {
            word += "Buzz";
        }
        array.push(word);
    }
    return array;
}
console.log(FizzBuzz(15));

//Ex 7

console.log("Ex 7");
function ValidateSubArray(array, sub)
{
    return sub.every((el) => {return array.includes(el)})
}
console.log(ValidateSubArray([1,2,3,4],[1,5]));

//Ex 8

console.log("Ex 8");
let maxArray = [1, 4, 66, 2];
let max = Math.max(...maxArray);
console.log(max);

//Ex 9

console.log("Ex 9");
let minArray = [1, 4, 66, 2];
let min = Math.min(...minArray);
console.log(min);

//Ex 10

console.log("Ex 10");
let indexArray = [77, 4, 66, 77];
let maxNum = Math.max(...indexArray);
let maxIndex = indexArray.indexOf(maxNum);
console.log(maxIndex);