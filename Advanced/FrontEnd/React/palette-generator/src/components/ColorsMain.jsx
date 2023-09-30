import {useEffect, useState} from 'react';
import ColorIndividual from './ColorIndividual';
import styles from '../css/ColorsMain.module.css'


const COLOR_COUNT = 5;

export default function ColorsMain()
{
	const [colorsState, setColorsState] = useState([])
	const [displayState, setDisplayState] = useState("hex")
	
	const getRandomColor = () => {
		return ('#' + (Math.floor(Math.random() * 0xFFFFFF)).toString(16).padStart(6, 0));
	}

	const generateColors = (prev) => {
		let newColors = new Array(COLOR_COUNT).fill("").map(ele => ({color: getRandomColor(), locked: false}))
		if (prev)
		{
			newColors = prev.map(ele => ({color: (ele.locked ? ele.color : getRandomColor()), locked: ele.locked}))
		}
		localStorage.setItem('colors', JSON.stringify(newColors));
		return newColors
	}
	
	
	
	const lock = (index) => {
		let newColors = colorsState.map((ele, i) => ({color: ele.color, locked: index === i ? !ele.locked : ele.locked}))
		localStorage.setItem('colors', JSON.stringify(newColors));
		setColorsState(newColors)
	}

	useEffect(()=> {
		let data = localStorage.getItem('colors')
		if (!data)
		{
			setColorsState(generateColors());
		}
		else
		{
			setColorsState(JSON.parse(data))
		}

		const useSpace = (e) => {
			e.preventDefault()
			if(e.keyCode === 32)
			{
				setColorsState(prev => generateColors(prev));
			}
			if(e.key === 'c')
			{
				localStorage.clear();
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