import { useEffect } from "react"
import { useState } from "react"

export default function Timer(props)
{
    const [state, setState] = useState(new Date())
    useEffect(()=>
    {
        const timerId = setInterval(() => {setState(new Date)},1)
        return clearInterval(timerId)
    })
    return (
        <p>It's currentely {state.toLocaleTimeString()}</p>
    )
}