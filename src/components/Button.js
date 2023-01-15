import './Button.scss'

const Button = ({text, func, active}) => {

    const handleClick = () => {
        if (active) {
            func()
        }
    }

    return (
        <span className={`button ${(active ? "active" : "disabled")}`} onClick={handleClick}>
            {text}
        </span>
    )
}
export default Button;