import "./Button.scss"

export const Button = ({text}) => {
    return (
        <button type="submit" className="Button">
            {text}
        </button>
    )
}