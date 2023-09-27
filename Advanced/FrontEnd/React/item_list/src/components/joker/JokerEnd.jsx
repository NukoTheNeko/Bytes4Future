export default function JokerEnd({startFunc, points})
{
	return(
		<div>
			<h1>Congratulations!</h1>
			<p>You got: {points} points!</p>
			<button onClick={startFunc}>Go Again!</button>
		</div>
	)
}