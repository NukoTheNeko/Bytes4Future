function sum(array)
{
	return array.reduce((a, b) => a + b)
}
console.log(sum([1,2,3])) //6
console.log(sum([2,3,5,8,1,2,3]))