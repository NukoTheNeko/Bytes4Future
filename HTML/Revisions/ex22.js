function ConvertTemperature(tempC)
{
	return Math.round(tempC * (9/5) + 32)
}

console.log(ConvertTemperature(20)) //39
console.log(ConvertTemperature(-13))