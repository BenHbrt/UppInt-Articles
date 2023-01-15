import './Result.scss'

const Result = ({isCorrect}) => {

    let text = "TEXT"

    if (isCorrect !== undefined) {
        if (isCorrect) {
            text = "CORRECT"
        } else {
            text = "INCORRECT"
        }
    }

    return (
        <div class={`result ${isCorrect === undefined ? "hidden" : `${isCorrect ? "result-correct" : "result-incorrect"}`}`}>
            {text}
        </div>
    )
}
export default Result