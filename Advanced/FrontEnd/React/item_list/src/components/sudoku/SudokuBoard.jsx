import { useState } from 'react'
import './sudoku.css';

class BoardCell
{
	value = 0;
	guesses = new Array();
	constructor (value)
	{
		this.value = value;
		this.guesses = [1,2,3,4,5,6,7,8,9]
	}
}

const START_BOARD = [[new BoardCell(0),new BoardCell(8),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(3),new BoardCell(0)],
					 [new BoardCell(2),new BoardCell(0),new BoardCell(0),new BoardCell(6),new BoardCell(0),new BoardCell(7),new BoardCell(0),new BoardCell(0),new BoardCell(1)],
					 [new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0)],
					 [new BoardCell(0),new BoardCell(6),new BoardCell(0),new BoardCell(2),new BoardCell(0),new BoardCell(1),new BoardCell(0),new BoardCell(7),new BoardCell(0)],
					 [new BoardCell(5),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(3)],
					 [new BoardCell(9),new BoardCell(0),new BoardCell(0),new BoardCell(7),new BoardCell(0),new BoardCell(5),new BoardCell(0),new BoardCell(0),new BoardCell(8)],
					 [new BoardCell(4),new BoardCell(0),new BoardCell(1),new BoardCell(3),new BoardCell(0),new BoardCell(9),new BoardCell(7),new BoardCell(0),new BoardCell(6)],
					 [new BoardCell(0),new BoardCell(2),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(0),new BoardCell(1),new BoardCell(0)],
					 [new BoardCell(8),new BoardCell(0),new BoardCell(3),new BoardCell(1),new BoardCell(0),new BoardCell(6),new BoardCell(5),new BoardCell(0),new BoardCell(9)]]
export default function SudokuBoard()
{
	const [boardState, setBoardState] = useState(START_BOARD)

	return(
		<div className='board'>
			{boardState.map(
				(row,rowIndex) => <div key = {rowIndex} className='boardRow'>{
				row.map(
					(cell,cellIndex) => <div key={cellIndex} className='boardCell'>{
						cell.value !== 0 ? 
							<div className='cell'>{cell.value}</div>: 
							cell.guesses.length > 0 ? 
								cell.guesses.map((guess, guessIndex) => <div key={guessIndex} className='guessCell'>{guess}</div>) : 
								<div className='cell'>{cell.value}</div>}
					</div>
				)}
				</div>
			)}
		</div>
	)
}