console.log("StrLen 1")

function length(string, n)
{
	if(n < string.length)
	{
		console.log(string.slice(0,n));
	}
	else
	{
		console.log(string + " ".repeat(n-string.length))
	}
}
length("gato",6);

console.log("Age Range")

function ageRange(age)
{
	if (0 <= age && age <= 1)
	{
		return "Baby";
	}
	if (2 <= age && age <= 4)
	{
		return "Pre-School";
	}
	if (5 <= age && age <= 10)
	{
		return "School";
	}
	if (11 <= age && age <= 17)
	{
		return "Teen";
	}
	return "Invalid"
}
for (let i = 0; i <= 18; i++) 
{
	console.log(ageRange(i))
}

console.log("Months 1");

function months(month)
{
	switch (month) 
	{
		case 1:
			return "January";
		case 2:
			return "February";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			return "invalid";
	}
}
for (let i = 1; i <= 13; i++) 
{
	console.log(months(i))
}

console.log("Months 2");

function months2(month)
{
	month = month.toLowerCase();
	switch (true) 
	{
		case "january".startsWith(month):
			return "January";
		case "february".startsWith(month):
			return "February";
		case "march".startsWith(month):
			return "March";
		case "april".startsWith(month):
			return "April";
		case "may".startsWith(month):
			return "May";
		case "june".startsWith(month):
			return "June";
		case "july".startsWith(month):
			return "July";
		case "august".startsWith(month):
			return "August";
		case "september".startsWith(month):
			return "September";
		case "october".startsWith(month):
			return "October";
		case "november".startsWith(month):
			return "November";
		case "december".startsWith(month):
			return "December";
		default:
			return "invalid";
	}
}
console.log(months2("Dec"));

console.log("Mario 1");

function mario(height)
{
	for (let i = 1; i <= height; i++) 
	{
		let stair = "";
		for (let j = 0; j < i; j++) 
		{
			stair += "#";
		}
		console.log(stair);
	}
}
mario(5);

console.log("Mario 2");

function mario2(height)
{
	for (let i = 1; i <= height; i++) 
	{
		let stair = "";
		for (let j = 1; j <= height; j++) 
		{
			if(j > height - i)
			{
				stair += "#";
			}
			else
			{
				stair+= " ";
			}
		}
		console.log(stair);
	}
}
mario2(5);

console.log("Mario 3");

function mario3(height)
{
	for (let i = 1; i <= height; i++) 
	{
		let stair = "";
		for (let j = 1; j <= height; j++) 
		{
			if(j > height - i)
			{
				stair += "#";
			}
			else
			{
				stair+= " ";
			}
		}
		stair += "  ";
		for (let j = 0; j < i; j++) 
		{
			stair += "#";
		}
		console.log(stair);
	}
}
mario3(5);