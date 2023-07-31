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