export default function HelloWorld({name})
{
	return (<div>
		<h1>Hello, {name ? name : "stranger"}.</h1>
	</div>)
}