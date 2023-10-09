import {useEffect, useState} from 'react';
import ColorIndividual from './ColorIndividual';
import styles from '../css/ColorsMain.module.css'

export default function ColorsMain()
{
	const [colorsState, setColorsState] = useState([])
	const [displayState, setDisplayState] = useState("hex")

	const myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	
	const lock = (index) => {
		sendRequest("PATCH", `/block/${index}`)
	}

	async function sendRequest(fetchMethod, link) {
		try 
		{
			const response = await fetch("/api/palette" + link, {method: fetchMethod, headers: myHeaders});
			const jsonColors = await response.json();
			setColorsState(jsonColors.colors)
		}
		catch (err)
		{
			console.log(err)
		}
	}

	useEffect(()=> {
		sendRequest("GET", "")
		const useSpace = (e) => {
			e.preventDefault()
			if(e.keyCode === 32)
			{
				sendRequest("GET", `/generate`)
			}
		}
		document.addEventListener('keydown',useSpace, true)
		return () => {
			document.removeEventListener("keydown", useSpace, false);
		};
	},[])
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				{colorsState.map((ele,index) => <ColorIndividual key={index} color={ele} index={index} lockFunc={lock} display={displayState}/>)}
			</div>
			<div className={styles.buttons}>
				<button onClick={()=>setDisplayState("hex")}>HEX</button>
				<button onClick={()=>setDisplayState("rgb")}>RGB</button>
				<button onClick={()=>setDisplayState("hsl")}>HSL</button>
			</div>
		</div>
	)
}