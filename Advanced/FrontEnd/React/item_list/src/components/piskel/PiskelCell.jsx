export default function PiskelCell({cellIndex, rowIndex, boardState, changeColorFunc, inputState, handleInput})
{
	const paint = (inputState, boardState) => {
		if (!inputState || inputState === "colorPicker")
		{
			return(boardState);
		}
		let newBoardState = JSON.parse(JSON.stringify(boardState))
		newBoardState.board[rowIndex][cellIndex] = newBoardState[inputState];
		newBoardState.history = [newBoardState[inputState], ...newBoardState.history.filter( ele => ele !== newBoardState[inputState])]
		return(newBoardState);
	} 
	const clickHook = (e) => {
		var isRMB
		if ("which" in e)
		{
			isRMB = e.which === 3
		}
		else if ("button" in e)
		{
			isRMB = e.button === 2
		}
		let newInputState = inputState
		let newBoardState = JSON.parse(JSON.stringify(boardState))
		let button = isRMB ? "secondaryColor" : "mainColor";
		if (newInputState === "colorPicker")
		{
			newBoardState[button] = newBoardState.board[rowIndex][cellIndex];
			newInputState = undefined;
		}
		else
		{
			newInputState = button;
		}
		handleInput(newInputState);
		changeColorFunc(paint(newInputState,newBoardState));
	}
	const unclickHook = () => {
		handleInput(undefined);
	}
	const hoverHook = () => {
		changeColorFunc(paint(inputState,boardState));
	}
	return(
		<div key = {cellIndex} 
			 className="cell" 
			 style={{'backgroundColor' : boardState.board[rowIndex][cellIndex]}} 
			 onMouseDown={clickHook}
			 onMouseOver={hoverHook}
			 onMouseUp={unclickHook}
			 >
		</div>
	)
}