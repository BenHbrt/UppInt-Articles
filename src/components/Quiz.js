import './Quiz.scss';
import generateQs from "../data/generateQs";
import { questionListLength } from "../data/questions";
import { useEffect, useState } from 'react'

const Quiz = ({score, setScore, questionNum, setQuestionNum}) => {

    const [question, setQuestion] = useState(null)
    const [finished, setFinished] = useState(false)
    const [isCorrect, setIsCorrect] = useState(undefined)

    const questionChange = () => {
        if (questionNum + 1 < questionListLength) {
            setQuestionNum(questionNum + 1)
        } else {
            setFinished(true)
        }     
    }

    const optionSelect = (e) => {
        const newArr = question.map((item) => {
            return item
        })
        newArr[e.target.name].text = e.target.value
        setQuestion(newArr)
    }

    const checkAnswers = () => {
        let result = true
        let resultArr = []
        question.forEach((item) => {
            if (item.type === "ans") {
                if (item.text === item.ans) {
                    resultArr.push(true)
                } else {
                    resultArr.push(false)
                }
            }
        })
        resultArr.forEach((item) => {
            if (item === false) {
                result = false
            }
        })
        console.log(result)
        if (result === true) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    }

    useEffect(() => {
        const questionA = generateQs(questionNum)
        setQuestion(questionA)
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
                            if (item.caps === false) {
                                return <select onChange={optionSelect} key={i} name={i}>
                                <option value="a">a</option>
                                <option value="an">an</option>
                                <option value="the">the</option>
                                <option value="Ø">Ø</option>
                                </select>
                            } else {
                                return <select onChange={optionSelect} key={i} name={i}>
                                <option value="A">A</option>
                                <option value="An">An</option>
                                <option value="The">The</option>
                                <option value="ØØ">Ø</option>
                                </select>
                            }
                        }
                    })
                }
                <br/>
                <br/>
                {isCorrect !== undefined && <div className="result">
                        {
                            isCorrect ? <div>Correct</div> : <div>Incorrect</div>
                        }
                    </div>}
                <br/>
                <button onClick={questionChange}>Change Question</button><br/>
                <button onClick={checkAnswers}>Check Answers</button><br/>
                <button onClick={() => console.log(question)}>Question</button><br/>
                {/* <button onClick={() => console.log(questionNum)}>QuestionNum</button><br/>
                <button onClick={() => console.log(questionListLength)}>QuestionNum</button><br/> */}
            </div>}
            {finished === true && <div>Finished!</div>}
        </div>
    )   
}
export default Quiz;