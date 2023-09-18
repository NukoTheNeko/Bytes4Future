import NameGenerator from "./NameGenerator"
import NameDisplay from "./NameDisplay"
import { useState } from "react"

export default function NameGeneratorMain(props)
{
	const [name, setName] = useState("");
	const nameSetter = (value) => setName(value);
	return (
		<>
			<h1>Name Generator</h1>
			<NameGenerator setter = {nameSetter}/>
			<NameDisplay name = {name}/>
		</>
	)
}