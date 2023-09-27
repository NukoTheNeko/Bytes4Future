export default function PiskelColorPipette ({handleInput})
{
	const onClickHook = () =>{
		handleInput("colorPicker");
	}
	return <button onClick={onClickHook}>Pipette</button>
}