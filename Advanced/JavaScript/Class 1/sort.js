function map(array)
{
    let map = new Map();
    let highest = 0;
    let result = 0;
    for(let item of array)
    {
        if (!map.has(item))
        {
            map.set(item, 0);
        }
        map.set(item, map.get(item) + 1);
        if (map.get(item) > highest)
        {
            highest = map.get(item);
            result = item;
        }
    }
    if (isNaN(result))
    {
        console.log("no");
    }
    return result;
}
console.log(map([2,2,2,2,2,2,2,2,2,2,4,4,4,4,1,1,1,4,1,1,4]));

function month(n)
{
    let m = "";
    switch (n)
    {
        case 1:
            m = "jan";
            break;
        case 2:
            m = "fev";
            break;
        case 3:
            m = "mar";
            break;
    }
    return m;
}
console.log(month(1));

function factorial(n)
{
    if (n === 1)
    {
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(7));
