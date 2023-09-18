import { useState } from "react"
import Generator from './Generator.jsx'
import RandomDisplay from './RandomDisplay.jsx'

export default function GeneratorMain(props)
{
    const [randomValue, setRandomValue] = useState()
    const randomGeneration = (value) => setRandomValue(value)
    return (
        <>
            <h1>Number Generator</h1>
            <Generator randomSetter = {randomGeneration}/>
            <RandomDisplay value = {randomValue}/>
        </>
    )
}