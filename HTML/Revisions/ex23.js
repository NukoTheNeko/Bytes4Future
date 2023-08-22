function Palindrome(string)
{
	string = string.toLowerCase();
	reversedString = string.split("").reverse().join("");
	return string === reversedString ? true : false;
}

console.log(Palindrome("Osso")) //True
console.log(Palindrome("Cão")) 