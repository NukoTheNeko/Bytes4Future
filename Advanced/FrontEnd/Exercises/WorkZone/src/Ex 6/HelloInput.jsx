import { useState } from "react"

export default function HelloInput({})
{
	const [name, setName] = useState("")

	const handleInput = (e) => {
		setName(e.target.value)
	}

	return(
		<div>
			<input type="text" onChange={handleInput} />
			<p>Hello, {name}!</p>
		</div>
	)
}
