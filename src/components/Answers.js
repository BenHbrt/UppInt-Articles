import "./Answers.scss"

const Answers = ({length, answers, isCorrect}) => {
    return (
        <div className={`answers ${isCorrect === false ? "" : "hidden"}`}>
            Answer{`${length > 1 ? "s" : ""}`}: <span>{answers.map((item, i) => {
        return <span className={`answer ${!item.correct ? "wrong" : ""}`}>{item.ans}</span>
        })}</span>
        </div>
    )
}
export default Answers