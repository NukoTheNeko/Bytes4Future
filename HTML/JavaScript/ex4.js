//Ex 1

console.log("Ex 1");
function ConvertToMinutes(hours)
{
    return hours * 60;
}
console.log(ConvertToMinutes(3));

//Ex 2

console.log("Ex 2");
function CalculatePoints(wins, draws, losses)
{
    return wins * 3 + draws * 1;
}
console.log(CalculatePoints(3, 2, 3));

//Ex 3

console.log("Ex 3");
function IsSquare(num, square)
{
    return (num ** 2 == square);
}
console.log(IsSquare(3,9));

//Ex 4

console.log("Ex 4");
function CountLeterI(string)
{
    sentence = string.toLowerCase();
    let count = 0;
    for (let char of sentence)
    {
        if (char == "i")
        {
            count++;
        }
    }
    return count;
}
console.log(CountLeterI("Habibi Is Car"));

//Ex 5

console.log("Ex 5");
function Space(string)
{
    let sentence = "";
    for (let char of string)
    {
        sentence += char + " ";
    }
    return sentence;
}
console.log(Space("Habibi"));

//Ex 6

console.log("Ex 6");
function MeasurePH(ph)
{
    if (ph < 0 || ph > 14)
    {
        return "Invalid pH";
    }
    if (ph < 3)
    {
        return "Veru Acid";
    }
    if (ph < 7)
    {
        return "Acid";
    }
    if (ph === 7)
    {
        return "Neutral";
    }
    if (ph <= 10)
    {
        return "Basic";
    }
    else
    {
        return "Very Basic";
    }
}
for (let i = -1; i <= 15; i++) 
{
    console.log(MeasurePH(i));
}