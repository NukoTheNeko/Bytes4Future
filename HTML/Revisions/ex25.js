function Swap(a, b)
{
	[a,b] = [b,a];
	return `a = ${a}, b = ${b}`;
}

console.log(Swap(5, 10)) //a = 10, b = 5
console.log(Swap(8, 0))