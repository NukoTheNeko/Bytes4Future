import styles from "./TimerButton.module.css"
export function TimerButton({ image, hook })
{
	return (
		<img className={styles.wrapper} onClick={hook} src={image}/>
	)
}