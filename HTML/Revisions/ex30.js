function PairFilter (array)
{
	return array.reduce(pair, [])
}
function pair(array,number)
{
	if (number % 2 === 0)
	{
		array.push(number)
	}
	return array;
}

console.log(PairFilter([1,2,3,4,5,6])) //[2,4,6]
console.log(PairFilter([2,5,4,3,2,2,7])) //[2,4,2,2]