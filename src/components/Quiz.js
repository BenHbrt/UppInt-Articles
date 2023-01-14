import './Quiz.scss';
import generateQandA from "../data/generateQandA";
import { questionListLength } from "../data/questions";
import { useEffect, useState } from 'react'

const Quiz = ({score, setScore, questionNum, setQuestionNum}) => {

    const [question, setQuestion] = useState(null)
    const [answers, setAnswers] = useState(null)
    const [finished, setFinished] = useState(false)

    const questionChange = () => {
        if (questionNum + 1 < questionListLength) {
            setQuestionNum(questionNum + 1)
        } else {
            setFinished(true)
        }     
    }

    useEffect(() => {
        const [questionA, answersA] = generateQandA(questionNum)
        setQuestion(questionA)
        setAnswers(answersA)
    }, [questionNum])

    return (
        <div className="quiz">
            {finished === false && <div className="quiz_playing">
                <div>Question {questionNum + 1} of {questionListLength}</div>
                <br/>
                {
                    question && question.map((item, i) => {
                        if (item.type === "text") {
                            return <span key={i}>{item.text}</span>
                        } else {
                            return <span className="quiz_droparea" key={i}>{item.text}</span>
                        }
                    })
                }
                <br/>
                <br/>
                <div>Answers</div>
                <br/>
                {
                    answers && answers.map((item, i) => {
                        return <span key={i}>{item.text} </span>
                    })
                }
                <br/>
                <button onClick={questionChange}>Change Question</button><br/>
                {/* <button onClick={() => console.log(questionNum)}>QuestionNum</button><br/>
                <button onClick={() => console.log(questionListLength)}>QuestionNum</button><br/> */}
            </div>}
            {finished === true && <div>Finished!</div>}
        </div>
    )   
}
export default Quiz;