export default function TaskItem (props)
{
	const clickHook = () => props.mark(props.index);
	return (
		<p onClick={clickHook}>{props.finished ? props.visibility ? <strike>{props.text}</strike> : "" : props.text}</p>
	)
}