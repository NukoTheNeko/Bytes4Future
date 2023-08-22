function Sign(number)
{
	if (number === 0)
	{
		return "Zero";
	}
	if (number > 0)
	{
		return "Positive";
	}
	return "Negative";
}

console.log(Sign(10)) //Positivo
console.log(Sign(-4)) //Negativo
console.log(Sign(0))