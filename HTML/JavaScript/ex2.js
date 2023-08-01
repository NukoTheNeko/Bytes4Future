function minMax(arr, n)
{
	let arrLength = arr.length;
	let sortedArr = arr.slice(0, arrLength).sort();
	let maxSum = 0;
	let minSum = 0;
	for (i = 0; i < n; i++)
	{
		minSum += sortedArr[i];
		maxSum += sortedArr[arrLength - i - 1];
	}
	let answer = [minSum, maxSum];
	return answer;
}
console.log(minMax([7, 1, 1, 3, 2, 6], 3));
