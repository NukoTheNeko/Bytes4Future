function Random(min, max)
{
	return Math.round(Math.random() * (max - min) + min);
}

console.log(Random(10,20));