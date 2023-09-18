import logo from './logo.svg';
import './App.css';
import './jogo.css';
import { useState } from 'react';
import { casaVazia, verificarVencedor, adicionarJogada, verificarFimDoJogo, obterJogadasPossiveis} from './logica.js';


const jogoLimpo = {tabuleiro:[[casaVazia,casaVazia,casaVazia],[casaVazia,casaVazia,casaVazia],[casaVazia,casaVazia,casaVazia]], jogadorAtual: "X"}
function App() {
  return (
    <div className="App">
     <Tabuleiro />
    </div>
  );
}

export default App;


function Tabuleiro() {

  const [estadoDoJogo,atualizaEstado] = useState(jogoLimpo);

  return (<div>
    <h1>Jogo do Galo</h1>
    <div>
    <Botao posicao={{linha:0,coluna:0}} jogo={estadoDoJogo} funcao={atualizaEstado}/>
    <Botao posicao={{linha:0,coluna:1}} jogo={estadoDoJogo} funcao={atualizaEstado}/>
    <Botao posicao={{linha:0,coluna:2}} jogo={estadoDoJogo} funcao={atualizaEstado}/> <br />
    <Botao posicao={{linha:1,coluna:0}} jogo={estadoDoJogo} funcao={atualizaEstado}/>
    <Botao posicao={{linha:1,coluna:1}} jogo={estadoDoJogo} funcao={atualizaEstado}/>
    <Botao posicao={{linha:1,coluna:2}} jogo={estadoDoJogo} funcao={atualizaEstado}/><br />
    <Botao posicao={{linha:2,coluna:0}} jogo={estadoDoJogo} funcao={atualizaEstado}/>
    <Botao posicao={{linha:2,coluna:1}} jogo={estadoDoJogo} funcao={atualizaEstado}/>
    <Botao posicao={{linha:2,coluna:2}} jogo={estadoDoJogo} funcao={atualizaEstado}/>
    </div>
    <Reset funcao={atualizaEstado}/>
    <FimDeJogo jogo={estadoDoJogo}/>
  </div>)
}

function Botao(props) {
  const fazerJogada= () =>{
    if (verificarFimDoJogo(props.jogo)||!obterJogadasPossiveis(props.jogo).some(e => e.linha === props.posicao.linha && e.coluna === props.posicao.coluna)) {
      return
    }
    props.funcao(adicionarJogada(props.jogo,props.jogo.jogadorAtual,props.posicao.linha,props.posicao.coluna)) 
  }
  return <button className='botao' onClick={fazerJogada}>{`${props.jogo.tabuleiro[props.posicao.linha][props.posicao.coluna]}`}</button>
}

function FimDeJogo(props) {
  let vencedor = verificarVencedor(props.jogo)
  let jogoAcabado = verificarFimDoJogo(props.jogo)
  return jogoAcabado ? vencedor ? <p>O jogador {vencedor} ganhou!</p> : <p>Empate!</p> :<p>A jogar: {props.jogo.jogadorAtual}</p>
}

function Reset(props) {
  const limpar= () => {props.funcao(jogoLimpo)}
  return <button className='reset'onClick={limpar}>Reiniciar</button>
}
