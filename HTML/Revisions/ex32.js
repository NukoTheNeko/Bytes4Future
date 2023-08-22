function CheckPrime(number)
{
	let s = Math.sqrt(number)
	for(let i = 2; i < s; i++)
	{
		if(number % i === 0)
		{
			return false;
		}
	}
	return number > 1;
}

console.log(CheckPrime(11)) //O número 11 é primo.
console.log(CheckPrime(28)) 