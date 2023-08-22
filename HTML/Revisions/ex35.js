function CountOddEven(array)
{
	let count = array.reduce(pair, [0,0])
	return `Even: ${count[0]}, Odd: ${count[1]}`;
}
function pair(array,number)
{
	if (number % 2 === 0)
	{
		array[0]++; 
	}
	else
	{
		array[1]++;
	}
	return array;
}

console.log(CountOddEven([2,5,4,3,2,2,7])) //Pares: 4 e Ímpares: 3
console.log(CountOddEven([4,2,3,5,4,6,7,8,10,2,4])) //Pares: 8 e Ímpares: 3