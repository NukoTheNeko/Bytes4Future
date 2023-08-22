function WeekDay(weekDay)
{
	let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return daysOfTheWeek[weekDay - 1];
}

console.log(WeekDay(1)) //Domingo
console.log(WeekDay(5)) //Quinta-feira