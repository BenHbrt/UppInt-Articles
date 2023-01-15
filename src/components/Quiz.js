import './Quiz.scss';
import generateQs from "../data/generateQs";
import { questionListLength } from "../data/questions";
import { useEffect, useState } from 'react'

import Button from './Button';

const Quiz = ({score, setScore, questionNum, setQuestionNum}) => {

    const [question, setQuestion] = useState(null)
    const [finished, setFinished] = useState(false)
    const [isCorrect, setIsCorrect] = useState(undefined)
    const [canCheck, setCanCheck] = useState(false)
    const [canMove, setCanMove] = useState(false)
    const [ansArr, setAnsArr] = useState([])

    const optionSelect = (e) => {
        const newArr = question.map((item) => {
            return item
        })
        newArr[e.target.name].text = e.target.value
        setQuestion(newArr)
        let isCanCheck = true
        newArr.forEach((item) => {
            if (item.type === 'ans') {
                if (item.text === "---") {
                    isCanCheck = false
                }
            }
        })
        setCanCheck(isCanCheck)
    }

    const checkAnswers = () => {
        let result = true
        let resultArr = []
        question.forEach((item) => {
            if (item.type === "ans") {
                if (item.text === item.ans) {
                    resultArr.push({ans: item.ans, correct: true})
                } else {
                    resultArr.push({ans: item.ans, correct: false})
                }
            }
        })
        resultArr.forEach((item) => {
            if (item.correct === false) {
                result = false
            }
        })

        if (result === true) {
            setIsCorrect(true)
            setScore(score + 1)
        } else {
            setIsCorrect(false)
        }
        
        const newArr = question.map((item) => {
            return item
        })
   
        newArr.forEach((item) => {
            if (item.type === 'ans') {
                if (item.text === item.ans) {
                    item.correct = true
                } else {
                    item.correct = false
                }
            }
        })
        setQuestion(newArr)
        setAnsArr(resultArr)
        setCanMove(true)

    }

    const questionMove = () => {
        setIsCorrect(undefined)
        setCanCheck(false)
        setCanMove(false)
        setAnsArr([])
        if (questionNum + 1 < questionListLength) {
            setQuestionNum(questionNum + 1)
        } else {
            setFinished(true)
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
                <div>Score: {score}</div>
                <br/>
                <div>Please select the correct option(s):</div><br/>
                <span className="question">
                {
                    question && question.map((item, i) => {
                        if (item.type === "text") {
                            return <span key={i}>{item.text}</span>
                        } else {
                            if (item.caps === false) {
                                return <select disabled={canMove ? true : false} onChange={optionSelect} key={i} name={i} className={`${(item.correct !== undefined ? `${(item.correct ? "correct" : "incorrect")}` : "")}`} value={`${(item.text)}`}>
                                <option value="---">---</option>
                                <option value="a">a</option>
                                <option value="an">an</option>
                                <option value="the">the</option>
                                <option value="Ø">Ø</option>
                                </select>
                            } else {
                                return <select disabled={canMove ? true : false} onChange={optionSelect} key={i} name={i} className={`${(item.correct !== undefined ? `${(item.correct ? "correct" : "incorrect")}` : "")}`} value={`${(item.text)}`}>
                                <option value="---">---</option>
                                <option value="A">A</option>
                                <option value="An">An</option>
                                <option value="The">The</option>
                                <option value="ØØ">Ø</option>
                                </select>
                            }
                        }
                        
                    })
                }
                </span>
                <br/>
                <br/>
                {isCorrect !== undefined && <div className="result">
                        {
                            isCorrect ? <div>Correct</div> : <div>Incorrect</div>
                        }
                        {
                            !isCorrect ? <div>Answers: <span>{ansArr.map((item, i) => {
                                return <span className={`answer ${!item.correct ? "wrong" : ""}`}>{item.ans}</span>
                            })}</span></div> : <div></div>
                        }
                    </div>}

                <br/>
                {
                    canMove ? <Button text="Next Question" func={questionMove} active={true} /> :
                    <Button text="Check Answers" func={checkAnswers} active={canCheck} />
                }
                <button onClick={() => console.log(question)}>Question</button><br/>
                {/* <button onClick={() => console.log(questionNum)}>QuestionNum</button><br/>
                <button onClick={() => console.log(questionListLength)}>QuestionNum</button><br/> */}
            </div>}
            {finished === true && <div>Finished!</div>}
        </div>
    )   
}
export default Quiz;