import { questionList, articlesLower, articlesUpper } from './questions'

const generateQs = (index) => {
    const questionStr = questionList[index];
    const questionArr = questionStr.split(" ")
    let newQuestionArr = []
    let tempArr = []
    questionArr.forEach((word) => {
        if (articlesLower.includes(word) || articlesUpper.includes(word)) {
            newQuestionArr.push({type: "text", text: tempArr.join(" ")})
            tempArr = []
            if (articlesLower.includes(word)) {
                newQuestionArr.push({type: "ans", text: "a", ans: word, caps: false, correct: undefined})
            } else {
                newQuestionArr.push({type: "ans", text: "A", ans: word, caps: true, correct: undefined})
            }
        } else {
            tempArr.push(word)
        }  
    })
    newQuestionArr.push({type: "text", text: tempArr.join(" ")})
    if (newQuestionArr[0].type === "text" && newQuestionArr[0].text === "") {
        newQuestionArr.shift()
    }

    return newQuestionArr
}

export default generateQs;