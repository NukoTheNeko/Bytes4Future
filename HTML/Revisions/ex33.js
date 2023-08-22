function CheckTriangle(side1, side2, side3)
{
	if(side1 === side2 && side1 === side3)
	{
		return "Equilateral";
	}
	if(side1 === side2 || side1 === side3 || side2 === side3)
	{
		return "Isosceles";
	}
	return "Scalene";
}

console.log(CheckTriangle(2,2,2)) //Triângulo equilátero.
console.log(CheckTriangle(1,2,3)) //Triângulo escaleno.
console.log(CheckTriangle(3,2,3)) //Triângulo isósceles.