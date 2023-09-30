import { useState } from "react"

export default function Comments({user, comments})
{
	const [commentList, setCommentList] = useState(comments)
	const [comment, setComment] = useState("")

	const handleInput = (e) => {
		setComment(e.target.value)
	}

	const handleButton = () => {
		setCommentList(prev => addComment(prev));
	}

	const addComment = (prev) => {
		let obj = {
			postedBy : user.username,
			text : comment,
			date : new Date()
		}
		document.getElementById('input').value = "";
		return [...prev,obj]
	}

	return (
		<>
			{commentList.map((ele, index) => 
				<div key={index}>
					<p>Por: {ele.postedBy}</p>
					<p>Em: {ele.date.toString().slice(0, 15)}</p>
					<p>{ele.text}</p>
				</div>
				)
			}
			<form role="form">
				<input type="text" id="input" onChange={handleInput}/>
				<button onClick={handleButton} type="submit"></button>
			</form>
		</>
	)
}