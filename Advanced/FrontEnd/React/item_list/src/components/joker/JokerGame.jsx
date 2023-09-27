import DisplayText from "./DisplayText";

export default function JokerGame({answerFunc, question, points, jokers, jokerFunc})
{
	return(
		<div>
			<div>Points: {points}</div>
			<DisplayText question={question.question} />
			{question.options.map((ele,index) =><button key={index} disabled={jokers.excluded.includes(index)} onClick={()=>answerFunc(index)}>{ele}</button>)}
			{new Array(jokers.jokers.maxJokers).fill("").map((ele,index) => <button disabled={index >= jokers.jokers.avaliableJokers} key={index} onClick={() => jokerFunc()}>Joker!</button>)}
		</div>
	)
}