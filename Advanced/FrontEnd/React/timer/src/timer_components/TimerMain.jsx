import styles from "./TimerMain.module.css"
import { useState } from "react";

import { useTimer, useEditing } from "./TimerCore"

import { TimerDisplay } from "./TimerDisplay"
import { TimerButton } from "./TimerButton"

import pause from "../timer_art/pause.png"
import start from "../timer_art/start.png"
import restart from "../timer_art/restart.png"
import set from "../timer_art/set.png"
import go from "../timer_art/go.png"
import background from "../timer_art/background.png"
import endSound from "../timer_art/End.wav";
import changeSound from "../timer_art/ChangeTimer.wav";
import endChange from "../timer_art/EndChange.wav";
import startSound from "../timer_art/StartTimer.wav";
import restartSound from "../timer_art/Restart.wav";
import stopSound from "../timer_art/Stop.wav";

export function TimerMain() {
    const {
        timeElapsedMs,
        timeMissingMs,
        timeOverdueMs,
        timeMs,
        timeElapsedParts,
        timeMissingParts,
        timeOverdueParts,
        timeParts,
        running,

        setTimer,
        startTimer,
        resetTimer,
        pauseTimer
    } = useTimer()

	const {
		editing,
		toggleEditing
	} = useEditing()

	const useResetTimer = () => {
		new Audio(restartSound).play()
		resetTimer();
		setBlownState(false);
	}

	const toggleTimer = () => {
		if (editing)
		{
			toggleEditing();
		}
		running ? new Audio(stopSound).play() : new Audio(startSound).play();
		running ? pauseTimer() : startTimer();
	}
	const chooseTime = () => {
		if (editing)
		{
			new Audio(endChange).play()
			toggleEditing();
			return;
		}
		new Audio(changeSound).play()
		setBlownState(false);
		resetTimer();
		toggleEditing();
	}
	const [blownState, setBlownState] = useState(false)
	if (!blownState && timeOverdueMs > 0)
	{
		new Audio(endSound).play()
		setBlownState(true);
	}

    return (
        <div className={styles.wrapper}>
			<img className={styles.background} src={background}/>
			<h1 className={styles.title}>Pixel<br/>Timer</h1>
			<TimerDisplay time = {timeOverdueMs > 0 ? timeOverdueParts : timeMissingParts} ms={timeOverdueMs > 0 ? timeOverdueMs : timeMissingMs} setTimer={setTimer} editing={editing} over={timeOverdueMs > 0}/>
			<div className={styles.controls}>
				<TimerButton image = {restart} hook={useResetTimer}/>
				<TimerButton image = {running ? pause : start} hook={toggleTimer}/>
				<TimerButton image = {editing ? go : set} hook={chooseTime}/>
			</div>
        </div>
    )
}