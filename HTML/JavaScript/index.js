// console.log("a \n bc")
// let cat = 3
// {
//     var dog = 3
// }
// console.log(cat)
// console.log(dog)

console.log("Fibonacci");

function Fibonacci(iter) 
{
	if (iter <= 1) 
	{
		return iter;
	}
	return Fibonacci(iter - 1) + Fibonacci(iter - 2);
}
	process.stdout.write(Fibonacci(15) + "");

for (let i = 1; i <= 10; i++) 
{
	process.stdout.write(Fibonacci(i) + " ");
}

console.log("\nxor");

function xor(a, b)
{
	return((a || b) && !(a && b));
}
console.log(xor(true, false));
console.log(xor(true, true));
console.log(xor(false, false));
console.log(xor(false, true));

console.log("txor");

function txor(a, b, c)
{
	return(xor(a,b) && xor(a,c) && xor(b,c));
}
console.log(txor(true,true,false));
console.log(txor(true,true,true));
console.log(txor(true,false,false));

console.log("neitherTrue");

function neitherTrue(a, b)
{
	return (!a || !b);
}
console.log(neitherTrue(true, true));
console.log(neitherTrue(true, false));
console.log(neitherTrue(false, false));
console.log(neitherTrue(false, true));

console.log("perimeter");

function perimeter(side)
{
	return side * 4;
}
console.log(perimeter(10));

console.log("area")

function area(side)
{
	return side ** 2;
}
console.log(area(3));

console.log("volume")

function volume(side)
{
	return side ** 3;
}
console.log(volume(3));

console.log("bigInt");

function bigInt()
{
	return 10n**3000n;
}
console.log(bigInt());

console.log("bigIntN");

function bigIntN(x,n)
{
	return BigInt(x)**BigInt(n);
}
console.log(bigIntN(10,2000));

console.log("line between");

function lineBetween(word1,word2)
{
	return word1 + "\n" + word2;
}
console.log(lineBetween("oi","potato"));

console.log("another line between");

function lineBetween2(word1,word2)
{
	return `My name is ${word1} and I'm ${word2} years old`;
}
console.log(lineBetween2("Henrique","25"));

console.log("compare")

function compare(var1,var2)
{
	return Number(var1) > Number(var2) ? var1: var2;
}
console.log(compare(3,6));
console.log(compare(11,7));

console.log("compareString");

function compareString(var1,var2)
{
	return String(var1) > String(var2) ? var1: var2;
}
console.log(compareString(3,6));
console.log(compareString(11,7));

console.log("oddEvenSeven");

function seven(num)
{
	if (isNaN(num))
	{
		return "erro";
	}
	else if(num === 7)
	{
		return "7";
	}
	else if(num % 2 === 0)
	{
		return "even";
	}
	else if(num % 2 !== 0)
	{
		return "odd";
	}
}
console.log(seven(12));
console.log(seven(0));
console.log(seven(11));
console.log(seven("a"));
console.log(seven(7));

console.log("weekdays")

function weekDays(day)
{
	switch (day)
	{
		case 1:
			console.log("monday");
			break;
		case 2:
			console.log("tuesday");
			break;
		case 3:
			console.log("wednesday");
			break;
		case 4:
			console.log("thursday");
			break;
		case 5:
			console.log("friday");
			break;
		case 6:
			console.log("saturday");
			break;
		case 7:
			console.log("sunday");
			break;
		default:
			console.log("invalid day of the week");
	}
}
for (let i = 0; i <= 8; i++) 
{
	weekDays(i);
}

console.log("Recursive");

function recursive(number)
{
	console.log(number);
	if (number == 0 || isNaN(number))
	{
		return;
	}
	recursive(number - 1);
	console.log(number);
}
recursive(10);

console.log("i++");

let i = 0;
while(i < 5)
{
	console.log(i++);
}

console.log("++i");

i = 0;
while(i < 5)
{
	console.log(++i);
}

