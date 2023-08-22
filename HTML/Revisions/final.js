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
  
//Ex 4
console.log("Ex 4");
function ContainsSubMatrix(matrix, submatrix)
{
	let subLength =  submatrix.length;
	let subDepth =  submatrix[0].length;
	for(let i = 0; i <= matrix.length - subLength; i++)
	{
		for(let j = 0; j <= matrix[i].length - subDepth; j++)
		{
			if(matrix[i][j] == submatrix[0][0])
			{
				let confirmationArray = new Array(subLength);
				for(let k = 0; k < subLength; k++)
				{
					confirmationArray[k] = matrix[i + k].slice(j, j + subDepth)
				}
				if(CompareArrays(submatrix,confirmationArray))
				{
					return true;
				}
			}
		}
	}
	return false
}
function CompareArrays(array1, array2)
{
	for(let index1 = 0; index1 < array1.length; index1++)
	{
		for(let index2 = 0; index2 < array1[index1].length; index2++)
		{
			if(array1[index1][index2] !== array2[index1][index2])
			{
				return false;
			}
		}
	}
	return true;
}
console.log(ContainsSubMatrix([
	[1, 0, 0, 1, 0],
	[2, 3, 1, 4, 5],
	[1, 1, 2, 4, 3],
	[1, 2, 3, 4, 5]
  ], [
	[4, 5],
	[4, 5]
  ]))

//Ex Final
console.log("Ex Final");
function Mathify(string)
{
	let inputs = string.split(" ");
	let result;

	let i = inputs.length - 1;
	while(inputs.length > 1)
	{
		if(isNaN(Number(inputs[i])))
		{
			switch (inputs[i])
			{
				case "+":
					result = Number(inputs[i + 1]) + Number(inputs[i + 2]);
					break;
				case "-":
					result = Number(inputs[i + 1]) - Number(inputs[i + 2]);
					break;
				case "/":
					result = Number(inputs[i + 1]) / Number(inputs[i + 2]);
					break;
				case "*":
					result = Number(inputs[i + 1]) * Number(inputs[i + 2]);
					break;
			}
			inputs.splice(i, 3, result);
			i = inputs.length;
		}
		i--;
	}
	return inputs[0];
}
console.log(Mathify("0")); // 0
console.log(Mathify("+ 3 4")); // 7
console.log(Mathify("- 3 * 4 5")); // -17
console.log(Mathify("* + 3 4 5")); // 35
console.log(Mathify("/ - 3 4 + 5 2")); // 