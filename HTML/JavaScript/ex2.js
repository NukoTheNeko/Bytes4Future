function minMax(arr, n)
{
	let arrLength = arr.length;
	let sortedArr = arr.slice(0, arrLength).sort();
	let answer = [0,0];
	for (i = 0; i < n; i++)
	{
		answer[0] += sortedArr[i];
		answer[1] += sortedArr[arrLength - i - 1];
	}
	return answer;
}
console.log(minMax([7, 1, 1, 3, 2, 6], 3));
