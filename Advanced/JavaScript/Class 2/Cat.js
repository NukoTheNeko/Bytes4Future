class Cat
{
    constructor(name, weight, maxJumpHeight, verticalPosition)
    {
        this._name = name;
        this._weight = weight;
        this._maxJumpHeight = maxJumpHeight;
        this._verticalPosition = verticalPosition;
    }
    Jump(intensity)
    {
        if (intensity < 0 || intensity > 1)
        {
            console.log("Please use a jump intensity between 0 and 1.");
            return;
        }
        this._verticalPosition += this._maxJumpHeight * intensity;
    }
}

let cat1 = new Cat("Pantufa", 5, 10, 0);
let cat2 = new Cat("Bigodes", 3, 6, 0);
console.log(cat1._name);
console.log(cat2._name);
console.log(cat1._verticalPosition);
console.log(cat2._verticalPosition);
cat1.Jump(0.3);
console.log(cat1._verticalPosition);
console.log(cat2._verticalPosition);
cat2.Jump(0.2);
console.log(cat1._verticalPosition);
console.log(cat2._verticalPosition);
