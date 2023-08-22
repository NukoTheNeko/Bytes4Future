function CompareWords(word1, word2)
{
	word1 = word1.toLowerCase();
	word2 = word2.toLowerCase();
	return word1 === word2 ? "The words are identical." : "The words are different.";
}

console.log(CompareWords("ByTEs", "bytes")) //As palavras são idênticas.
console.log(CompareWords("Olá", "Adeus")) //As palavras são diferentes.