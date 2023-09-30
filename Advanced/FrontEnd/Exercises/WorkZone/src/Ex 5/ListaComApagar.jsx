import { useState } from "react"

export default function ListaComApagar({itens})
{
	const[list, setList] = useState(itens)
	const removeFromList = (list, key) => {
		return list.filter(ele => ele.key != key)
	}
	const handleClick = (key) => {
		setList(prev => removeFromList(prev, key))
	}
	return(
		<div>
			{list.map(item =>
				<div key={item.key}>
					<h3>{item.name}</h3>
					<p>{item.price} €</p>
					<button onClick={() => handleClick(item.key)}></button>
				</div>
			)}
		</div>
	)
}