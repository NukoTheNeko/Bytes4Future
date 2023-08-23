function SudokuSolver(array)
{
	for (const line of array) 
	{
		if(line.length !== new Set(line).size)
		{
			return false;
		}
	}
	for(let i = 0; i < 9; i++)
	{
		let arr = new Array();
		for(let j = 0; j < 9; j++)
		{
			arr.push(array[j][i]);
		}
		if(arr.length !== new Set(arr).size)
		{
			return false;
		}
	}
	for(let i = 0; i < 9; i++)
	{
		let squareX = Math.floor(i/3) * 3;
		let squareY = (i % 3) * 3;
		let squareArr = new Array();
		for(let j = 0; j < 3; j++)
		{
			for(let k = 0; k < 3; k++)
			{
				squareArr.push(array[squareX + j][squareY + k]);
			}
		}
		if(squareArr.length !== new Set(squareArr).size)
		{
			return false;
		}
	}
	return true;
}
console.log(SudokuSolver([[4,3,5,2,6,9,7,8,1],
						  [6,8,2,5,7,1,4,9,3],
						  [1,9,7,8,3,4,5,6,2],
						  [8,2,6,1,9,5,3,4,7],
						  [3,7,4,6,8,2,9,1,5],
						  [9,5,1,7,4,3,6,2,8],
						  [5,1,9,3,2,6,8,7,4],
						  [2,4,8,9,5,7,1,3,6],
						  [7,6,3,4,1,8,2,5,9]]));