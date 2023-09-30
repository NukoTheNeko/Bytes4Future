import { useState } from "react"

export default function TwoLists()
{
	const [firstNameList, setFirstNameList] = useState([])
	const [lastNameList, setLastNameList] = useState([])
	const [randomName, setRandomName] = useState("")

	const addToArray = (prev) => {
		const name = document.getElementById('input').value
		document.getElementById('input').value = "";
		return [...prev, name]
	}

	const handleButton = (list) => {
		switch (list)
		{
			case 0:
				setFirstNameList(prev => addToArray(prev))
				break;
			case 1:
				setLastNameList(prev => addToArray(prev))
				break;
		}
	}

	const generateName = () => {
		const firstName = firstNameList[Math.floor(Math.random() * firstNameList.length)]
		const lastName = lastNameList[Math.floor(Math.random() * lastNameList.length)]
		const name = `${firstName} ${lastName}`
		setRandomName(name)
	}

	return (
		<>
			<div>
				<div role="list" id="nome">
					{firstNameList.map((ele,index) => <span role="listitem" key={index}>{ele}</span>)}
				</div>
				<div role="list" id="apelido">
					{lastNameList.map((ele,index) => <span role="listitem" key={index}>{ele}</span>)}
				</div>
			</div>
			<div>
				<input type="text" id="input" />
				<button onClick={() => handleButton(0)}>Adicionar nome</button>
				<button onClick={() => handleButton(1)}>Adicionar apelido</button>
			</div>
			{randomName.length > 0 && <p role="name">{randomName}</p>}
			<button onClick={generateName}>Gerar Nome</button>
		</>
	)
}