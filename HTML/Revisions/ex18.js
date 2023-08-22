let counter = 0;
function Increment()
{
	counter ++;
}
function GetCount()
{
	return counter;
}

Increment();
Increment();
Increment();
Increment();
Increment();
console.log(GetCount());