function InvertArray(array)
{
	let swaps = 0;
	do
	{
		swaps = 0;
		for(let i = 0; i < array.length - 1; i++)
		{
			if(array[i].length > array[i + 1].length)
			{
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				swaps ++;
			}
		}
	}while(swaps !== 0)
	return array;
}

console.log(InvertArray(["Olá", "do", "Bytes", "4", "Future"])) //["4", "do", "Olá", "Bytes", "Future"]
console.log(InvertArray(["Uma", "frase", "aleatória", "!" ])) //["!", "Uma", "frase", "aleatória"]