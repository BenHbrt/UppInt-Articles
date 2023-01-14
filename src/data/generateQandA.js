import { questionList, articlesLower, articlesUpper } from './questions'

const generateQandA = (index) => {
    const questionStr = questionList[index];
    const questionArr = questionStr.split(" ")
    let newQuestionArr = []
    let ansArr = []
    let tempArr = []
    questionArr.forEach((word) => {
        if (articlesLower.includes(word) || articlesUpper.includes(word)) {
            newQuestionArr.push({type: "text", text: tempArr.join(" ")})
            tempArr = []
            newQuestionArr.push({type: "ans", text: "ANS", ans: word})
            ansArr.push(word) 
        } else {
            tempArr.push(word)
        }  
    })
    newQuestionArr.push({type: "text", text: tempArr.join(" ")})
    if (newQuestionArr[0].type === "text" && newQuestionArr[0].text === "") {
        newQuestionArr.shift()
    }
    let id = 1
    newQuestionArr.forEach((item) => {
        item.id = "Q" + id
        id++
    })

    let withCaps = 0

    // console.log(newQuestionArr)
    // console.log(ansArr)

    let newAnsArr = []

    ansArr.forEach((item) => {
        if ((item !== item.toLowerCase() && item !== "Ø")) {
            newAnsArr = newAnsArr.concat(articlesUpper.map((item) => {
                return {text: item}
            }))
        } else {
            newAnsArr = newAnsArr.concat(articlesLower.map((item) => {
                return {text: item}
            }))
        }
    })

    id = 1
    newAnsArr.forEach((item) => {
        item.id = "A" + id
        id++
    })

    return [newQuestionArr, newAnsArr]
}

export default generateQandA;