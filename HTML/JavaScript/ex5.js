//Ex 1

console.log("Ex 1");
function checkLetterInWord(string,subString)
{
	return string.includes(subString);
}
console.log(
	checkLetterInWord('hello', 'h'), //true
	checkLetterInWord('magnolia', 'lemon'), //false
	checkLetterInWord('rupert', 'pert'), //true
	checkLetterInWord('tower', 'wero') //false
);

//Ex 2

console.log("Ex 2");
function greetPerson(name)
{
	return `Hello ${name}!\n`;
}
console.log(
	greetPerson('Liriam'),
	// "Hello Liriam!"
	greetPerson('saifsafsaf')
	// "Hello saifsafsaf!"
)

//Ex 3

console.log("Ex 3");
function checkWhichIsBigger(string1, string2)
{
	if (string1.length === string2.length)
	{
		return "Both strings have the same length.\n";
	}
	if (string1.length < string2.length)
	{
		[string1, string2] = [string2, string1];
	}
	return `The string: ${string1} is longer than the string: ${string2}.\n`;
}
console.log(
	checkWhichIsBigger('one', 'twelve'),
	// "A string: quatro é maior que a string: tres"
	checkWhichIsBigger('dog', 'rat')
	// "As strings têm o mesmo comprimento."
);

//Ex 4

console.log("Ex 4");
function isMultipleOf4(string)
{
	return string.length % 4 === 0;
}
console.log(
	isMultipleOf4('treat'), //false
	isMultipleOf4('gato'), //true
	isMultipleOf4('abcdefgh') //true
  )