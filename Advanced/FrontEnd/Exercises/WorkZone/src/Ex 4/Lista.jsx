export default function Lista({itens, titulo})
{
	return(
		<>
			{titulo&&<h1>{titulo}</h1>}
			<ul>
				{itens.map((ele, index) => <li key={index}>{ele}</li>)}
			</ul>
		</>
	)
}