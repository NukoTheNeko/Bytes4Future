import PiskelCell from "./PiskelCell"

export default function PiskelBoard({gameState, changeColorFunc, inputState, handleInput})
{
	return (
		<div className="piskelBoard">
			{gameState.board.map((row, rowIndex) => 
				<div key = {rowIndex} className="row">{
					row.map((cell, cellIndex) =>
						<PiskelCell 
							key={cellIndex} 
							cellIndex={cellIndex} 
							rowIndex={rowIndex} 
							boardState={gameState} 
							changeColorFunc={changeColorFunc} 
							inputState={inputState} 
							handleInput={handleInput}/>
					)}
				</div>
			)}
		</div>
	)
}