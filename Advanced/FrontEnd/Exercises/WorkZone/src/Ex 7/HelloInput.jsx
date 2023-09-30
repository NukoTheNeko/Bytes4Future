import { useState } from "react"

export default function HelloInput()
{
	const [name, setName] = useState("")
	const [display, setDisplay] = useState(false)

	const handleInput = (e) => {
		setName(e.target.value)
	}

	const handleButton = () => {
		setDisplay(true)
	}

	return (
		<>
			<input type="text" onChange={handleInput}/>
			{display ? 
			<p>Hello, {name}!</p> :
			<button onClick={handleButton}>Apresentar</button>}
		</>
	)
}