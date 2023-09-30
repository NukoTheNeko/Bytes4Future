import { useState } from "react"

export default function PasswordInput()
{
	const [password, setPassword] = useState("")
	const handleInput = (e) => {
		setPassword(e.target.value)
	}
	return (
		<>
			<input type="password" role="input" onChange={handleInput} />
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
		</>
	)
}