export default function PiskelHistoryCell ({color, boardState, setBoardState})
{
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
		let newBoardState = JSON.parse(JSON.stringify(boardState))
		newBoardState[isRMB ? "secondaryColor" : "mainColor"] = color;
		setBoardState(newBoardState);
	}

	return (
		<div onMouseDown={clickHook} className="piskelHistoryCell" style={{'backgroundColor' : color}}></div>
	)
}