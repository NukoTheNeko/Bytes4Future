//Ex 1 
console.log("Ex 1");
function minMax(array, num)
{
	array = array.sort();
	arr = [0,0];
	for(i = 0; i < num; i++)
	{
		arr[0] += array[i];
		arr[1] += array[array.length - 1 - i];
	}
	return arr;
}

console.log(minMax([1, 2, 3, 4, 5], 4))// [10, 14]
console.log(minMax([1, 2, 3, 4, 5], 2)) // [3, 9]

//Ex 2
console.log("Ex 2");
function DiagonalDiff(matrix)
{
	let diagonal1 = 0;
	let diagonal2 = 0;
	for(let i = 0; i< matrix.length; i++)
	{
		diagonal1 += matrix[i][i];
		diagonal2 += matrix[i][matrix.length-1-i];
	}
	return Math.abs(diagonal2-diagonal1);
}

console.log(DiagonalDiff([
	[3, 3, 3],
	[4, 8, 9],
	[1, 8, 9]
  ])) // [3, 9]

//Ex 3
console.log("Ex 3");
function findWord(grid, word)
{
	let length = word.length;
	for (let row = 0; row < grid.length; row++)
	{
		for (let letter = 0; letter < grid[row].length; letter++)
		{
			if (grid[row][letter] === word[0])
			{
				for(let i = -1; i <= 1; i++)
				{
					for(let j = -1; j <= 1; j++)
					{
						let compare = new Array()
						for(k = 0; k < length; k++)
						{
							if(row + (i * k) < 0 || row + (i * k) >= length || letter + (j * k) < 0 || letter + (j * k) >= length)
							{
								break;
							}
							compare.push(grid[row + (i * k)][letter + (j * k)])
						}
						if (compare.join("") === word)
						{
							return true;
						}
					}	
				}
			}
		}
	}
	return false;
}
console.log(findWord([
	"AOO",
	"OLO",
	"OYO"
  ], "OLA"))