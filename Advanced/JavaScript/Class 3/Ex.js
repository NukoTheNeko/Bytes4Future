//Ex 1
console.log("Ex 1")
const matriz = [
    ['a', 'x', 'e', 'p', 'o'],
    ['b', 'q', 'z', 'b', 's'],
    ['r', 't', 'h', 'r', 't'],
    ['i', 'k', 'j', 'k', 'c'],
    ['n', 'l', 'v', 'l', 'v']
]

function Capitalize1(matrix)
{
    let array = JSON.parse(JSON.stringify(matrix))
    for (let line in array)
    {
        for (let letter in array[line])
        {
            if ("aeiou".indexOf(array[line][letter]) != -1)
            {
                array[line][letter] = array[line][letter].toUpperCase();
            }
        }
    }
    return array
}
function Capitalize2(matrix)
{
    return matrix.map((row, i) => row.join("").replace(/[aeiou]/gi, (f) => f.toUpperCase()).split(""));
}
console.log(Capitalize2(matriz))

//Ex 2
console.log("Ex 2")
function CountInstances(array)
{
    let map = new Map()
    for (let element of array)
    {
        if (!map.has(element))
        {
            map.set(element, 0)
        }
        map.set(element, map.get(element) + 1)
    }
    return map
}
console.log(CountInstances([1, 3, 1, 4, 5]))

//Ex 3
console.log("Ex 3")
function ContainsSubMatrix(matrix, submatrix)
{
	let subLength =  submatrix.length;
	let subDepth =  submatrix[0].length;
	for(let i = 0; i <= matrix.length - subLength; i++)
	{
		for(let j = 0; j <= matrix[i].length - subDepth; j++)
		{
			if(matrix[i][j] == submatrix[0][0])
			{
				let confirmationArray = new Array(subLength);
				for(let k = 0; k < subLength; k++)
				{
					confirmationArray[k] = matrix[i + k].slice(j, j + subDepth)
				}
				if(JSON.stringify(submatrix) == JSON.stringify(confirmationArray))
				{
					return true;
				}
			}
		}
	}
	return false
}

console.log(ContainsSubMatrix([
    [1, 0, 0, 1, 0],
    [2, 3, 1, 4, 5],
    [1, 1, 2, 4, 5],
    [1, 2, 3, 4, 5]
  ], [
    [4, 5],
    [4, 5]
  ]))

//Ex 4
console.log("Ex 4")
class TestFactory
{
    tests = []
    constructor(array)
    {
        for (let object of array)
        {
            this.tests.push(object);
        }
    }

    Test(testFunction)
    {
        let fails = 0
        let failedTest = "";
        for (let test of this.tests)
        {
            if (testFunction(...test.argumentos) !== test.resultadoEsperado)
            {
                if (fails == 0)
                {
                    failedTest = test.nome;
                }
                fails++;
            }
        }
        if (fails == 0)
        {
            console.log("All tests passed.");
        }
        else
        {
            console.log(`Failed ${fails} tests out of ${this.tests.length} tests. First failed test was: ${failedTest}`)
        }
    }
}

const testesSoma = [
    {argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2"},
    {argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8"},
    {argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2"},
]
//Criar uma fábrica e dizer-lhe quais são os testes
const fabrica = new TestFactory(testesSoma)

function soma(a, b) {
    return a + b
}
function soma2(a, b) {
    return a * b
}
//Testar as funções soma e soma2, em que são chamadas para cada um dos testes.

fabrica.Test(soma);  // Todos os testes executados com sucesso.
fabrica.Test(soma2); // Falhou 2/3 testes, exemplo: "Soma 3 e 2"

//Ex 5
console.log("Ex 5")
class Node
{
    distance = 0;
    length = 0;
    previousNode;
    x=0;
    y=0;
    isWall = false;

    constructor(distance, length, previousNode,x,y,isWall)
    {
        this.distance = distance;
        this.length = length;
        this.previousNode = previousNode;
        this.x = x;
        this.y = y;
        this.isWall = isWall != '';
    }
    cost()
    {
        return this.distance + this.length;
    }
}
function AStar(map, start, end)
{
    let nodeGrid = Array.from(Array(map.length), () => new Array(map.length));
    for (let i = 0; i < map.length; i++)
    {
        for (let j = 0; j < map[i].length; j++)
        {
            let node = new Node(Math.abs(end.line - i) + Math.abs(end.column - j), 0, undefined, i, j, map[i][j]);
            nodeGrid[i][j] = node;
        }
    }
    let startNode = nodeGrid[start.line][start.column];
    let openNodes = [];
    AddToArray(openNodes,startNode)
    let closedNodes = [];
    
    while (openNodes.length != 0)
    {
        let currentNode = openNodes.shift();
        if(currentNode.x == end.line && currentNode.y == end.column)
        {
            let solutionArray = [];
            let tempNode = currentNode;
            while(tempNode != undefined)
            {
                let obj = {line: tempNode.x, column: tempNode.y}
                solutionArray.unshift(obj);
                tempNode = tempNode.previousNode;
            }
            
            return solutionArray
        }
        closedNodes.push(currentNode);
        AddArround(openNodes,currentNode, nodeGrid, closedNodes);
    }
    console.log(closedNodes)
    console.log(openNodes)
    return "A valid path does not exist";
}

function AddArround(openList, node, nodes, closedList)
{
    let array = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    for (let k = 0; k < array.length; k++)
    {
        let x = array[k][0];
        let y = array[k][1];
        if(node.x + x < 0 || node.x + x >= nodes.length || node.y + y < 0 || node.y + y >= nodes[0].length)
        {
            continue;
        }
        let tempNode = nodes[node.x + x][node.y + y];
        if (tempNode.isWall || closedList.includes(tempNode))
        {
            continue;
        }
        if(!openList.includes(tempNode) || tempNode.previousNode.cost() < node.cost())
        {   
            tempNode.previousNode = node;
            tempNode.length = node.length + 1;
            if(openList.includes(tempNode))
            {
                openList.splice(openList.indexOf(tempNode));
            }
            AddToArray(openList, tempNode);
        }
    }
}

function AddToArray(array, item)
{
    array.unshift(item)
    let swaps = false;
    do
    {
        swaps = false;
        for (let i = 0; i < array.length - 1; i++)
        {
            if(array[i].cost() > array[i+1].cost())
            {
                [array[i],array[i+1]] = [array[i+1],array[i]]
                swaps = true;
            }
        }
    }while(swaps)
}

const grid = [
    ['',  '',  '',  '',  ''],
    ['',  'p', 'p', 'p', 'p'],
    ['',  '',  '',  'p', ''],
    ['p', 'p', '',  'p', ''],
    ['',  '',  '',  '',  '']
]
const inicio = {
    line: 4,
    column: 0
}
const final = {
    line: 0,
    column: 4
}
console.log(AStar(grid, inicio, final));







//Ex 6
console.log("Ex 6")
function FindIslands(matrix)
{
    let checkedArray = Array.from(Array(matrix.length), () => Array(matrix.length).fill(0));
    let islandsCount = [0,0];
    let checkingElement = "";
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if(checkedArray[i][j] == 0)
            {

                checkingElement = matrix[i][j];
                islandsCount[checkingElement]++;
                Recursion(i,j,checkedArray,checkingElement, matrix)
            }
        }
    }
    return islandsCount;
}
function Recursion (x, y, checkedArray, element, matrix)
{
    if (x < 0 || x >= matrix.length || y < 0 || y > matrix.length)
    {
        return;
    }
    if (matrix[x][y] !== element || checkedArray[x][y] == 1)
    {
        return;
    }
    checkedArray[x][y] = 1;
    Recursion(x + 1,y,checkedArray,element,matrix);
    Recursion(x - 1,y,checkedArray,element,matrix);
    Recursion(x,y + 1,checkedArray,element,matrix);
    Recursion(x,y - 1,checkedArray,element,matrix);
}
console.log(FindIslands([
    [1, 0, 1, 1],
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
]))
console.log(FindIslands([
    [0, 0, 1, 1],
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0]
]))