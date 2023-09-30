import { useState } from "react"

export default function DataInput ()
{
	const [date, setDate] = useState({day: 7, month: 7, year: 1998})
	const [changeDisplay, setChangeDisplay] = useState(true)

	const createDate = (string) => {
		const stringArray = string.split("-")
		const obj = {
			day:stringArray[2],
			month:stringArray[1],
			year:stringArray[0]
		}
		return obj
	}

	const handleInput = (e) => {
		setDate(createDate(e.target.value))
	}

	const handleButton = () => {
		setChangeDisplay(prev => !prev);
	}

	return (
		<>
			<h3>Insere a tua data de nascimento.</h3>
			<div role="content">
				{
					changeDisplay ?
					<input type="date" onChange={handleInput}/> 
					:
					<p>
						Nasceste no dia {date.day} do {date.month} de {date.year}!
					</p>
				}
				<button onClick={handleButton}>{changeDisplay ? "Mostrar" : "Alterar"}</button>
			</div>

		</>
	)
}