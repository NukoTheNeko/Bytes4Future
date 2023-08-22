function Palindrome(string)
{
	string = string.toLowerCase();
	let reversedString = string.split("").reverse().join("");
	return string === reversedString ? true : false;
}

console.log(Palindrome("Osso")) //True
console.log(Palindrome("Cão")) 