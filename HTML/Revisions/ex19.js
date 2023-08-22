function calculator(num1, num2, operator)
{
	switch (operator)
	{
		case "+":
			return num1 + num2;
		case "-":
			return num1 - num2;
		case "/":
			return num1 / num2;
		case "*":
			return num1 * num2;
	}
}

console.log(calculator(2, 4,"*")) //8
console.log(calculator(5, 10, "-")) 