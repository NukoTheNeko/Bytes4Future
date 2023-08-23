let grid = [[2,2,2],
			[2,2,2],
			[2,2,2]];
let gameOver = false;
let player = 0;
let turns = 0;

function pushButton(x, y)
{
	if(gameOver || grid[x][y] !== 2)
	{
		return;
	}
	grid[x][y] = player;
	let id=String(x)+String(y);
	let src = player == 0 ? "imgs/o.png" : "imgs/x.png";
	let image = document.createElement('img')
	image.src = src;
	document.getElementById(id).appendChild(image);
	if(verifyWin(x, y))
	{
		document.getElementById("winner").innerHTML = `Player ${player + 1} wins!`;
		gameOver = true;
	}
	else if(turns === 8)
	{
		document.getElementById("winner").innerHTML = `It's a Draw!`;
		gameOver = true;
	}
	turns++;
	player = (player + 1) % 2;
}
function verifyWin(x, y)
{
	for(let i = -1; i <= 1; i++)
	{
		for(let j = -1; j <= 1; j++)
		{
			if(i == 0 && j == 0)
			{
				continue;
			}
			let count = 1;
			for(let k = 1; k <= 2; k++)
			{
				let xPos = x + (i * k);
				let yPos = y + (j * k);
				if(xPos < 0 || xPos > 2 || yPos < 0 || yPos > 2 || grid[xPos][yPos] !== player)
				{
					break;
				}
				count++;
			}
			if (count === 3)
			{
				return true;
			}
		}
	}
	return false;
}