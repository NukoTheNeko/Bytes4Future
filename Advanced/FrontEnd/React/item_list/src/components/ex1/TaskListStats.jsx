export default function TaskListStats(props)
{
	const taskCount = props.tasks.length;
	const completedTaskCount = props.tasks.filter(x => x.finished).length;
	const unfinishedTaskCount = taskCount - completedTaskCount;
	return(
		<>
			<p>Total Tasks: {taskCount}</p>
			<p>Completed Tasks: {completedTaskCount}</p>
			<p>Unfinished Tasks: {unfinishedTaskCount}</p>
		</>
	)
}