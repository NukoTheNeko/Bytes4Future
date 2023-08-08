//Ex 1

console.log("Ex 1");
function sum3And5Multiples(num)
{
	let count = 0;
	for(let i = 1; i < num; i++)
	{
		if(i % 3 === 0 || i % 5 === 0)
		{
			count += i;
		}
	}
	return count;
}
console.log(sum3And5Multiples(10));
console.log(sum3And5Multiples(20));

//Ex 2

console.log("Ex 2");
function cutVowels(string)
{
	let newString=string.normalize("NFD").replace(/[aeiou]/gi,"");
	newString = newString.replace(/\p{Diacritic}/gu, "");
	return newString;
}
console.log(cutVowels("Este site é para falhados LOL!"));

//Ex 3

console.log("Ex 3");
function invertLongStrings(string)
{
	let array = string.split(" ");
	let sentence = "";
	for(let word of array)
	{
		if (word.length >= 5)
		{
			word = word.split("").reverse().join("");
		}
		sentence += word;
		sentence += " ";
	}
	sentence = sentence.slice(0,sentence.length - 1);
	return sentence;
}
console.log(invertLongStrings("Este site é para falhados LOL!"));

//Ex 4

console.log("Ex 4");
function findOddOcurrence(array)
{
	array.sort();
	let itemToCheck = "";
	let occurences = 0;
	for(let item of array)
	{
		if(item !== itemToCheck)
		{
			if (occurences % 2 !== 0 && occurences != 0)
			{
				return itemToCheck;
			}
			occurences = 0;
			itemToCheck = item
		}
		occurences++;
	}
	return itemToCheck;
}
console.log(findOddOcurrence([7]));
console.log(findOddOcurrence([2]));
console.log(findOddOcurrence([1,1,2]));
console.log(findOddOcurrence([0,1,0,1,0]));
console.log(findOddOcurrence([1,2,2,3,3,3,1,3,3,3,2,2,1]));

//Ex 5

console.log("Ex 5");
function CheckLikes(array)
{
	let sentence = "";
	if (array.length === 0)
	{
		sentence += "nobody likes";
	}
	else if (array.length === 1)
	{
		sentence += array[0]+ " likes";
	}
	else if (array.length === 2)
	{
		sentence += `${array[0]} and ${array[1]}`;
	}
	else if (array.length === 3)
	{
		sentence += `${array[0]}, ${array[1]} and ${array[2]}`;
	}
	else 
	{
		sentence += `${array[0]}, ${array[1]} and ${array.length-2} others`;
	}
	sentence += " this.";
	return sentence;
}
console.log(CheckLikes([]));
console.log(CheckLikes(["Peter"]));
console.log(CheckLikes(["Alex", "Jacob", "Mark","Hernandez"]));

//Ex 6

console.log("Ex 6");
function DigitalRoot(number)
{
	let sum = String(number).split("").reduce((sump, digit) => {return sump += Number(digit);}, 0);
	if(sum >=10)
	{
		return DigitalRoot(sum);
	}
	else
	{
		return sum;
	}
}
console.log(DigitalRoot(132189));

//Ex 7

console.log("Ex 7");
function ReturnMiddle(word)
{
	let letters = "";
	if(word.length % 2 !== 0)
	{
		letters += word[(word.length - 1)/2];
	}
	else 
	{
		letters += word[((word.length) / 2) - 1];	
		letters += word[(word.length)/2];	
	}
	return letters;
}
console.log(ReturnMiddle("testes"));
console.log(ReturnMiddle("teste"));
console.log(ReturnMiddle("t"));

//Ex 8

console.log("Ex 8");
function CountXO(string)
{
	string = string.toLowerCase();
	let xCount = 0;
	let oCount = 0;
	for(let letter of string)
	{
		if (letter === "x")
		{
			xCount++;
		}
		if (letter === "o")
		{
			oCount++;
		}
	}
	return xCount === oCount;
}
console.log(CountXO("eppepe"));
console.log(CountXO("xooxx"));
console.log(CountXO("ooxXm"));

//Ex 9

console.log("Ex 9");
function SmallestLength(sentence)
{
	let wordsArray = sentence.split(" ");
	let smallestLength = wordsArray[0].length;
	for(let item of wordsArray)
	{
		if(item.length < smallestLength)
		{
			smallestLength = item.length;
		}
	}
	return smallestLength;
}
console.log(SmallestLength("Este é um exemplo"));
console.log(SmallestLength("xooxx"));
console.log(SmallestLength("Olá Bytes4Future"));

//Ex 10

console.log("Ex 10");
function Repeat(n, string)
{
	return string.repeat(n);
}
console.log(Repeat(4,"Habibi"));

//Ex 11

console.log("Ex 11");
function TrimSpace(string)
{
	return string.replace(/[ ]/gi, "");
}
console.log(TrimSpace("Este é um exemplo"));
console.log(TrimSpace("xooxx"));
console.log(TrimSpace("Olá Bytes4Future"));

//Ex 12

console.log("Ex 12");
function orderString(sentence)
{
	let words = sentence.split(" ");
	let array = [];
	for(let word of words)
	{
		for(let letter of word)
		{
			if (!isNaN(Number(letter)))
			{
				array[Number(letter)-1] = word;
				break;
			}
		}
	}
	return array.join(" ");
}
console.log(orderString("é2 Ist1o t4estar pa3ra"));
console.log(orderString("Ol1á Bytes3 do2"));
console.log(orderString(""));

//Ex 13

console.log("Ex 13");
function countPrintMistakes(string)
{
	let valid = ["a","b","c","d","e","f"];
	let max = string.length;
	let fails = 0;
	for(let letter of string)
	{
		if (!valid.includes(letter))
		{
			fails++;
		}
	}
	return fails + "/" + max;
}
console.log(countPrintMistakes("abbyyhwawiwjjjwwm"));
console.log(countPrintMistakes("bfe"));
console.log(countPrintMistakes("jioipw"));

//Ex 14

console.log("Ex 14");
function nextPerfectRoot(number)
{
	let root = Math.sqrt(number);
	if (!Number.isInteger(root))
	{
		return -1;
	}
	return (root + 1) ** 2;
}
console.log(nextPerfectRoot(121));
console.log(nextPerfectRoot(625));
console.log(nextPerfectRoot(9));
console.log(nextPerfectRoot(114));

//Ex 15

console.log("Ex 15");
function littersPerHour(hours)
{
	return Math.floor(hours * 0.5);
}
console.log(littersPerHour(3));
console.log(littersPerHour(6.7));
console.log(littersPerHour(11.8));

//Ex 16

console.log("Ex 16");
function CountPassengers(matrix)
{
	let count = 0;
	for(let stop of matrix)
	{
		count += stop[0];
		count -= stop[1];
	}
	return count;
}
console.log(CountPassengers([[10,0],[3,5],[5,8]]));
console.log(CountPassengers([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(CountPassengers([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
console.log(CountPassengers([[0,0]]));

//Ex 17

console.log("Ex 17");
function FindNeedle(array)
{
	for(let i = 0; i < array.length; i++)
	{
		if(array[i] == "agulha")
		{
			return "found needle at " + i + "!";
		}
	}
}
console.log(FindNeedle(["feno", "feno", "feno", "feno", "feno", "agulha", "feno"]));
console.log(FindNeedle(["feno", "agulha", "feno", "feno"]));