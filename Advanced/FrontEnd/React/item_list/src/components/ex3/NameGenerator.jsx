import { generateNumber } from "../ex2/Generator"

export default function NameGenerator(props)
{
	const firstNames = ["Marco", "Gonçalo", "Daniel", "Ricardo", "Rato"]
	const lastNames = ["Paulo", "Silva", "Daniel", "Pereira", "Esquilo"]
	const randomFromArray = (array) => array[generateNumber(0, array.length)] 
	const createName = () => `${randomFromArray(firstNames)} ${randomFromArray(lastNames)}`
	const generateHook = () => props.setter(createName)
	return <button onClick={generateHook}>Generate</button>
}
