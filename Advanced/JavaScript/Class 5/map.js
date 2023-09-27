class Mapa {
    #map = []
    set(chaveValor)
    {
        for (let pair of this.#map)
        {
            if (pair.chave === chaveValor.chave)
            {
                pair.valor = chaveValor.valor;
                return;
            }
        }
        this.#map.push(chaveValor)
    }
    has(chave)
    {
        return this.#map.some(ele => ele.chave === chave)
    }
    get(chave)
    {
        return this.has(chave) ? this.#map.find(ele => ele.chave === chave).valor : undefined
    }
    clear()
    {
        this.#map = []
    }
    delete(chave)
    {
        this.#map = this.#map.reduce((acc,ele) => ele.chave !== chave ? acc.concat([ele]) : acc, [])
    }
}

class ChaveValor {
    #chave
    #valor

    constructor(chave, valor)
    {
        this.#chave = chave
        this.#valor = valor
    }
    get chave()
    {
        return this.#chave
    }
    get valor()
    {
        return this.#valor
    }
    set valor(valor)
    {
        this.#valor = valor
    }
}


let chaveValor1 = new ChaveValor(1,1)
let chaveValor2 = new ChaveValor(2,2)
let chaveValor3 = new ChaveValor(3,3)
let chaveValor4 = new ChaveValor(1,4)

let map = new Mapa()

map.set(chaveValor1);
map.set(chaveValor2);
console.log(map.has(3))
console.log(map.get(3))
map.set(chaveValor3);
console.log(map.has(3))
console.log(map.get(3))
console.log(map.get(1))
map.set(chaveValor4);
console.log(map.get(1))
map.delete(5);
console.log(map.get(3))