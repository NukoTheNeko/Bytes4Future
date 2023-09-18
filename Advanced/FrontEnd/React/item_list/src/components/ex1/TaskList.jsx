import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskListStats from "./TaskListStats";

export default function TaskList(props)
{
	const [taskState, setTaskState] = useState(props.tasks);
	const [visibilityState, setVisibility] = useState(true);
	const toggleVisibility = () => setVisibility(!visibilityState);
	const mark = (index) => {
		let list = taskState;
		list[index].finished = !list[index].finished;
		setTaskState(JSON.parse(JSON.stringify(list)))
	};
	return (
		<>
			{taskState.map((ele, index) => (<TaskItem key = {index} index = {index} text = {ele.text} finished = {ele.finished} mark = {mark} visibility = {visibilityState}/>))}
			<TaskListStats tasks = {taskState}/>
			<button onClick={toggleVisibility}>{visibilityState ? "Hide" : "Show"} Finished Tasks.</button>
		</>
	)
}