//Ex 1

console.log("Ex 1");
function checkIfEqual(array, pos1, pos2)
{
	return array[pos1] === array[pos2];
}
console.log(
	checkIfEqual(['a', 'b', 'a'], 0, 2), //true
	// As letras nas posições 0 e 2 são iguais
	checkIfEqual(['r', 'a', 'r'], 0, 1) //false
	// As letras nas posições 0 e 1 são diferentes
)

//Ex 2

console.log("Ex 2");
function mapToDouble(array)
{
	let newArray = new Array();
	for(let number of array)
	{
		newArray.push(number * 2);
	}
	return newArray;
}
console.log(
	mapToDouble([24, 4, 9]), // [48, 8, 18]
	mapToDouble([1, 1, 2]), //[2, 2, 4]
	mapToDouble([]) //[]
)