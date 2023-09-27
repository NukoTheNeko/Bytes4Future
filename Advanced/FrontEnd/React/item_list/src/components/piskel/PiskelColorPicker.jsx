export default function PiskelColorPicker({boardState, changeColorFunc, color})
{
	const colorPickerHook = (value) => {
		let newBoardState = JSON.parse(JSON.stringify(boardState))
		newBoardState[color] = value.target.value;	
		changeColorFunc(newBoardState);
	}
	return (
		<input className="colorPicker" type="color" onChange={colorPickerHook} value={boardState[color]}></input>
	)
}