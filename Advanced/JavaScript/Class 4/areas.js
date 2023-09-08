class Rectangle
{
    #height;
    #width;
    constructor (height, width)
    {
        this.height = height; 
        this.width = width; 
    }
    calcArea ()
    {
        return this.height * this.width
    }
    get height()
    {
        return this.#height
    }
    set height(height)
    {
        this.#height = height
    }
    get width()
    {
        return this.#width
    }
    set width(width)
    {
        this.#width = width
    }
}
class Square extends Rectangle
{
    constructor (side)
    {
        super(side, side)
    }
}

let rectangle = new Rectangle(2,3);
console.log(rectangle.calcArea());
let square = new Square(2);
console.log(square.calcArea());