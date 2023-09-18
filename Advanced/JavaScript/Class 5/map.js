class Mapa {
    collection = []
    set(key, value)
    {
        let keyValue = new ChaveValor(key,value)
        for (let i = 0; i < this.collection.length; i++)
        {
            if (this.collection[i].chave === keyValue.chave)
            {
                this.collection[i].valor  = keyValue.valor;
                return;
            }
        }
        this.collection.push(keyValue);
    }
    get(key)
    {
        let temp = this.collection.find(x => x.chave === key);
        return temp ? temp.valor : undefined;
    }
    has(key)
    {
        let temp = this.collection.find(x => x.chave === key);
        return temp ? true : false;
    }
    clear()
    {
        this.collection = []
    }
    delete(key)
    {
        for (let i = 0; i < this.collection.length; i++)
        {
            if (this.collection[i].chave === key)
            {
                this.collection.splice(i,1);
            }
        }
    }
}

class ChaveValor {
    #chave
    #valor
    constructor(key, value)
    {
        this.#chave = key
        this.#valor = value
    }
    get valor()
    {
        return this.#valor;
    }
    set valor(value)
    {
        this.#valor = value;
    }
    get chave()
    {
        return this.#chave;
    }
}

let map = new Mapa()

map.set(1,2)
console.log(map.get(1));
map.set(1,3)
console.log(map.get(1));
map.set(2,2)
console.log(map.get(2));