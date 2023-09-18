export default function UserGreeting(props)
{
  return (
    <p>Hello, {props.user ? `${props.user.first} ${props.user.second}`: `Anonimous`}.</p>
  )
}