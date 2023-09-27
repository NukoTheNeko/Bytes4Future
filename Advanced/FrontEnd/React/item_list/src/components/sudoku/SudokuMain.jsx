import './sudoku.css';
import SudokuBoard from './SudokuBoard';

export default function SudokuMain (props)
{
	return (
		<div className='sudokuApp'>
			<h1>Play Sudoku</h1>
			<SudokuBoard />
		</div>
	)
}