import { useEffect, useState } from "react"

export default function RandomDisplay(props)
{
	const [current,setCurrent] = useState(0)
	const animateFunction = () => setCurrent(current < props.value ? current + 1 : current > props.value ? current - 1 : current)
	useEffect(() => {
		const displayID = setInterval(
			() => animateFunction(),
			10 
		);
		return () => clearInterval(displayID);
	})
	return (
		<p>
			{props.value ? current : "Click to Generate!"}
		</p>
	)
}