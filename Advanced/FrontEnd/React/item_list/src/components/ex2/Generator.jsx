export const generateNumber = (min, max) => min + Math.floor(Math.random() * (max-min))
export default function Generator(props)
{
    const clickHook = () => props.randomSetter(generateNumber(1,355))
    return (
        <button onClick={clickHook}>Generate!</button>
    )
}