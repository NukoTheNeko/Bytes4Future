class Integer
{
    #value = 0
    constructor (newValue)
    {
        this.value = newValue;
    }
    get value()
    {
        return this.#value;
    }
    set value(newValue)
    {
        if (Number.isInteger(newValue))
        {
            this.#value = Math.trunc(newValue);
        }
    }
}

let int1 = new Integer(1);
let int2 = new Integer("a");
let int3 = new Integer(1.3);

console.log(int1.value);
console.log(int2.value);
console.log(int3.value);

int2.value = 3.1;
console.log(int2.value);

int3.value = 4;
console.log(int3.value);