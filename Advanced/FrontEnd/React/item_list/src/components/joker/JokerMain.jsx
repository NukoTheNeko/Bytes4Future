import {useEffect, useState} from 'react'
import JokerGame from './JokerGame';
import JokerStart from './JokerStart';
import JokerEnd from './JokerEnd';

const RIGHT_ANSWER_POINTS = 100;
const WRONG_ANSWER_POINTS = -150;
const MAX_JOKERS = 7;
export default function JokerMain()
{
	const [BLANK_ARRAY, setQuestions] = useState()
	const [gameState, setGameState] = useState({running: false, currentQuestion : {}, currentScore : 0, enabled : true})
	const [questionList, setQuestionList] = useState([""])
	const [jokers, setJokers] = useState({jokers:{maxJokers:MAX_JOKERS, avaliableJokers:MAX_JOKERS},excluded:[]})
	
	useEffect(()=>{
		async function fetchData()
		{
			let res = await fetch("https://opentdb.com/api.php?amount=10&category=15&type=multiple");
			let info = await res.json();
			let data = info.results;
			let worked = data.map(ele => {return {
				question : ele.question,
				options : [ele.correct_answer, ...ele.incorrect_answers],
				answer : ele.correct_answer
			}})
			setQuestions(worked)
		}
		fetchData();
	})

	const generateRandomQuestion = (array) => {
		let index = Math.floor(Math.random() * array.length)
		let question = array[index]
		setQuestionList(array.filter((e,i) => i !== index));
		return question;
	}
	const answerQuestion = (answer) => {
		if(!gameState.enabled)
		{
			return;
		}
		let correct = gameState.currentQuestion.options[answer] === gameState.currentQuestion.answer;
		setGameState(prevState => ({...prevState, currentScore : Math.max(0 ,prevState.currentScore + (correct ? RIGHT_ANSWER_POINTS : WRONG_ANSWER_POINTS)), enabled : false}))
		setTimeout(()=> {
			setGameState(prevState => ({...prevState, running: questionList.length > 0, currentQuestion : generateRandomQuestion(questionList), enabled : true}))
			setJokers(prevState => ({...prevState, excluded:[]}))
		}, 1000)
	}
	const startGame = () => {
		if(!gameState.enabled)
		{
			return;
		}
		setQuestionList(BLANK_ARRAY)
		setGameState({running:true, currentQuestion:generateRandomQuestion(BLANK_ARRAY),currentScore:0, enabled : true})
		setJokers({jokers:{maxJokers:MAX_JOKERS, avaliableJokers:MAX_JOKERS},excluded:[]})
	}
	const useJoker = () => {
		let cQuest = gameState.currentQuestion
		if (jokers.excluded.length >= cQuest.options.length - 1 || !gameState.enabled)
		{
			return;
		}
		let newJokers = jokers.jokers.avaliableJokers - 1;
		let newExcluded = jokers.excluded;
		let filtered = cQuest.options.map((ele,index) => index).filter((ele,index) => cQuest.options[ele] !== cQuest.answer && !jokers.excluded.includes(index))
		newExcluded.push(filtered[Math.floor(Math.random() * filtered.length)]);
		setJokers({jokers:{maxJokers:MAX_JOKERS, avaliableJokers:newJokers}, excluded:newExcluded})
	}
	if (BLANK_ARRAY === undefined)
	{
		return <div>Loading...</div>
	}
	return(
		gameState.running ?
			<JokerGame answerFunc={answerQuestion} question={gameState.currentQuestion} points={gameState.currentScore} jokers={jokers} jokerFunc={useJoker}/>: 
		questionList.length > 0 ? 
			<JokerStart startFunc={startGame}/>:
			<JokerEnd startFunc={startGame} points={gameState.currentScore} />
	)
}
