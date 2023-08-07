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

//Ex 3

console.log("Ex 3");
function keepBeginningWithE (array)
{
	let newArray = new Array();
	for(let word of array)
	{
		if(word.toLowerCase().startsWith("e"))
		{
			newArray.push(word);
		}
	}
	return newArray;
}
console.log(
	keepBeginningWithE(['Esposende', 'Algarve', 'Sintra']),
	// ["Esposende"]
  
	keepBeginningWithE(['easfwe', 'asab', 'iasd', 'easn'])
	// ["easfwe", "easn"]
)

//Ex 4

console.log("Ex 4");
function keepBeginningWithLetter(array, letter)
{
	let newArray = new Array();
	for(let word of array)
	{
		if(word.toLowerCase().startsWith(letter))
		{
			newArray.push(word);
		}
	}
	return newArray;
}
console.log(
	keepBeginningWithLetter(['raposa', 'mesa'], 'm'),
	// ["mesa"]
	keepBeginningWithLetter(['dog', 'rat', "dossier"], "d")
	// ["dog", "dossier"]
)

//Ex 5

console.log("Ex 5");
function getLastN(array,n)
{
	return array.slice(array.length - n, array.length);
}
console.log(getLastN(["a", "b", "c", "a", "e", "b"],3));