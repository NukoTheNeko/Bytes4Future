import styles from "./TimerDisplay.module.css"
import "../timer_art/Pixel.ttf"

export function TimerDisplay({time, ms, setTimer, editing, over})
{
	const changeHours = (e) => {
		if (!editing) return;
		let hours = e.target.value
		if (isNaN(hours)) return;
		hours = hours > 99 ? 99 : hours < 0 ? 0 : hours
		setTimer({...time, hours: hours})
	}
	const changeMinutes = (e) => {
		if (!editing) return;
		let minutes = e.target.value
		if (isNaN(minutes)) return;
		minutes = minutes > 59 ? 59 : minutes < 0 ? 0 : minutes
		setTimer({...time, minutes: minutes})
	}
	const changeSeconds = (e) => {
		if (!editing) return;
		let seconds = e.target.value
		if (isNaN(seconds)) return;
		seconds = seconds > 59 ? 59 : seconds < 0 ? 0 : seconds
		setTimer({...time, seconds: seconds})
	}
	return (
		<div className={styles.wrapper + " " + (editing ? styles.editing : over ? styles.over : "")}>
			<input className={styles.displayText + " " + (editing ? styles.editing : over ? styles.over : "")} value={String(time.hours).padStart(2, "0")} type="text" onChange={changeHours}/>:
			<input className={styles.displayText + " " + (editing ? styles.editing : over ? styles.over : "")} value={String(time.minutes).padStart(2, "0")} type="text" onChange={changeMinutes}/>:
			<input className={styles.displayText + " " + (editing ? styles.editing : over ? styles.over : "")} value={String(time.seconds).padStart(2, "0")} type="text" onChange={changeSeconds}/>
			<span className={styles.miniText}>.{String(ms%1000n).padStart(3, "0")}</span>
		</div>
	)
}