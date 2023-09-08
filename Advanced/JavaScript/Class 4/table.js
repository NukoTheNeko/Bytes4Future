class WoodObject
{
    _wood;
    constructor(wood)
    {
        this._wood = wood;
    }
}
class Table 
{
    _legs = new Array();
    _lid;
    constructor(lid)
    {
        this._lid = lid;
    }
    assembleLeg(leg)
    {
        if (leg instanceof Leg && !this._legs.includes(leg))
        {
            this._legs.push(leg);
        }
        return this;
    }
    isAssembled()
    {
        return(this._legs.length >= 4)
    }
}
class Lid extends WoodObject
{
    _color = "";
    constructor(color, wood)
    {
        super(wood);
        this._color = color;
    }
}
class Leg extends WoodObject
{
    static LastLeg;
    _shape = "";
    constructor(shape,wood)
    {
        super(wood);
        this._shape = shape;
        Leg.LastLeg = this;
    }
}
console.log(Leg.LastLeg);
let table1 = new Table(new Lid("Brown", "Mahogany"));
console.log(table1);
console.log(table1.assembleLeg(new Leg("Rectangle", "Oak")));
console.log(Leg.LastLeg);
console.log(table1.assembleLeg(new Leg("Rectangle", "Oak")));
console.log(table1.isAssembled());
console.log(table1.assembleLeg(new Lid("Brown", "Mahogany")));
console.log(table1.assembleLeg(new Leg("Rectangle", "Oak")));
console.log(table1.assembleLeg(new Leg("Cilinder", "Oak")));
console.log(Leg.LastLeg);
console.log(table1.assembleLeg(table1._legs[0]));
console.log(table1.isAssembled());
