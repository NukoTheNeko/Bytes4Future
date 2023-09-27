import {useState} from 'react'
import PiskelBoard from './PiskelBoard'
import './piskel.css'
import PiskelColorPicker from './PiskelColorPicker'
import PiskelColorPipette from './PiskelColorPipette'
import PiskelHistory from './PiskelHistory'

const SIZE = 16
const CLEAN_BOARD = new Array(SIZE).fill(new Array(SIZE).fill("transparent"))
const CLEAN_HISTORY = [];
export default function PiskelMain(props)
{
	document.addEventListener('contextmenu', event => event.preventDefault());
	const [boardState, setBoardState] = useState({board: CLEAN_BOARD, mainColor:"#ffffff", secondaryColor:"#000000", history:CLEAN_HISTORY})
	const [inputState, setInputState] = useState(undefined)
	const changeState = (value) => setBoardState(value)
	const handleInput = (value) => setInputState(value)
	return (
		<div className="piskelApp">
			<h1 className='piskelTitle'>Piskel</h1>
			<PiskelBoard gameState={boardState} changeColorFunc = {changeState} inputState={inputState} handleInput={handleInput}/>
			<div className='colorPickers'>
				<PiskelColorPicker boardState={boardState} changeColorFunc = {changeState} color = {"mainColor"}/>
				<PiskelColorPipette handleInput={handleInput}/>
				<PiskelColorPicker boardState={boardState} changeColorFunc = {changeState} color = {"secondaryColor"}/>
			</div>
			<PiskelHistory boardState={boardState} setBoardState={changeState}/>
		</div>
	)
}