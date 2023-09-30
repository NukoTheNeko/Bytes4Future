import { useState } from "react"

export default function PasswordInput()
{
	const [password, setPassword] = useState("")
	const handleInput = (e) => {
		setPassword(e.target.value)
	}

	const handleButtonDown = () => {
		document.getElementById('input').type = "text";
	}
	const handleButtonUp = () => {
		document.getElementById('input').type = "password";
	}

	return (
		<>
			<input type="password" role="input" id="input" onChange={handleInput} />
			{
				password.length > 0 
				&& 
				<p role="feedback">
					{password.length > 10
					? 
						"Password Forte" 
						: 
						password.length > 6 
						? 
							"Password Média" 
							:
							"Password Fraca" }
				</p>
			}
			<button onMouseDown={handleButtonDown} onMouseUp={handleButtonUp}>Mostrar</button>
		</>
	)
}