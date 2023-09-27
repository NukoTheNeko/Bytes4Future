import PiskelHistoryCell from "./PiskelHistoryCell";

export default function PiskelHistory({boardState, setBoardState})
{
	return (
		<div className="piskelHistory">
			{Array.from(boardState.history).map((color, index)=><PiskelHistoryCell key={index} color={color} boardState = {boardState} setBoardState={setBoardState}/> )}
		</div>
	)
}