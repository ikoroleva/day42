export const Button = (props) => {

    return (
        <button onClick={props.onclick}>{props.text}</button>
    )
}