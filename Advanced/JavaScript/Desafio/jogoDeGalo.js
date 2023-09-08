const game = {
    tabuleiro: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]
}
const gameFull = {
    tabuleiro: [
        [" ", " ", " "],
        [" ", " ", " "],
        ["X", "X", "X"]
    ]
}


function adicionarJogada(jogo, jogador, linha, coluna)
{
    const newGame = jogo
    if (jogo.tabuleiro[linha][coluna] != " ")
    {
        return newGame;
    }
    jogo.tabuleiro[linha][coluna] = jogador;
    return newGame;
}

function obterJogadasPossiveis(jogo)
{
    let freeSpaces = new Array();
 
    for(let rowIndex in jogo.tabuleiro)
    {
        for(let collumnIndex in jogo.tabuleiro[rowIndex])
        {
            if (jogo.tabuleiro[rowIndex][collumnIndex] == " ")
            {
                let space = {
                    linha: Number(rowIndex),
                    coluna: Number(collumnIndex)
                };
                freeSpaces.push(space);
            }
        }
    }
    return freeSpaces
}

function verificarVencedor(jogo)
{
    let x = "XXX";
    let o = "OOO";
    let mainDiag = "";
    let secondDiag = "";
    for (let i = 0; i < 3; i++)
    {
        mainDiag += jogo.tabuleiro[i][i];
        secondDiag += jogo.tabuleiro[i][2-i];
    }
    if(x == mainDiag || x == secondDiag)
    {
        return "X";
    }
    if(o == mainDiag || o == secondDiag)
    {
        return "O";
    }
    for (let i = 0; i < 3; i++)
    {
        let horizontal = "";
        let vertical = "";
        for (let j = 0; j < 3; j++)
        {
            horizontal += jogo.tabuleiro[i][j];
            vertical += jogo.tabuleiro[j][i];
        }
        if(x == horizontal || x == vertical)
        {
            return "X";
        }
        if(o == horizontal || o == vertical)
        {
            return "O";
        }
    }
    return undefined;
}

function verificarFimDoJogo(jogo)
{
    return (obterJogadasPossiveis(jogo).length == 0 || verificarVencedor(jogo) !== undefined)
}