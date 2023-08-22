function Longest(wordArray)
{
	let longestIndex = 0;
	for (let wordIndex in wordArray)
	{
		wordArray[wordIndex].length > wordArray[longestIndex].length ? longestIndex = wordIndex : null; 
	}
	return wordArray[longestIndex];
}

console.log(Longest(['Olá', 'do', 'Bytes'])) //Bytes
console.log(Longest(['cão', 'pássaro', 'gato', 'rato']))