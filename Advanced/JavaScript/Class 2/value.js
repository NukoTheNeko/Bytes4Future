class Inteiro {
    #valor = 0
    constructor(newValue)
    {   
        this.valor = newValue
    }
    get valor()
    {
        return this.#valor;        
    }
    set valor(newValue)
    {      
        if(!isNaN(newValue))
        {
            this.#valor = Math.floor(newValue);
        }
    }
}

let int = new Inteiro("1");
int.valor = "a";
console.log(int.valor)