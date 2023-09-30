import { useState } from "react";

export default function Checkbox({initialState})
{
	const [toggled, setToggled] = useState(initialState)
	const clickHandle = () => {
		setToggled(!toggled)
	}
	return (
		<button onClick={clickHandle}>
			{toggled ? "Ativo": "Inativo"}
		</button>
	)
}