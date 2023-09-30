import { useState } from "react";

export default function Contador()
{
	const [contador, setContador] = useState(0)

	const changeValue = (value) => {
		setContador(contador + value)
	}

	return (
		<div role="main">
			<p>
				{contador}
			</p>
			<button onClick={()=>changeValue(1)}>
				+
			</button>
			<button disabled={contador <= 0} onClick={()=>changeValue(-1)}>
				-
			</button>
		</div>
	)
}