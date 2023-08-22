function DoublePairs(array)
{
	return array.reduce(pair, [])
}
function pair(array,number)
{
	if (number % 2 === 0)
	{
		array.push(number * 2)
	}
	else
	{
		array.push(number);
	}
	return array;
}
console.log(DoublePairs([1,2,3,4,5,6])) //[1,4,3,8,5,12]
console.log(DoublePairs([2,5,4,3,2,2,7])) //[4,5,8,3,4,4,7]