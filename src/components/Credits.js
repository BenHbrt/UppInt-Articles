import './Credits.scss'
import CloseButton from './CloseButton';

const Credits = ({ setDisplay, gameStage }) => {

    const closeFunc = () => {
        if (gameStage.current === "start") {
            setDisplay("landing")
        } else {
            setDisplay("results")
        }
    }

    return (
        <div className="credits">
            <h2>Credits</h2>
            <CloseButton func={closeFunc} />
            <p>I wrote this app as part of my coding portfolio, which can be found at <a href="https://github.com/BenHbrt">https://github.com/BenHbrt</a>.</p>
            <p>The inspiration for this project came from my work as an English teacher. I recently taught articles (a, an, the, and Ø) to an upper-intermediate level class, and saw the opportunity to code a front-end application to give them extra practice with that area of language.</p>
            <p>The image used in this project were taken from <a href="https://pixabay.com/">pixabay.com</a>, and direct links to them can be found below.</p>
                <a href="https://pixabay.com/illustrations/question-question-mark-request-63916/"><img src={require("../images/background.jpg")} alt="Question Marks" /></a>
            <p>The icons and used in this project (featured below) were taken from <a href="https://fonts.google.com/">fonts.google.com</a>.</p>
            <div className="credits_icons">
                <img src={require('../images/question_mark.png')} alt="Question mark icon"></img>
                <img src={require('../images/cancel-nofill.png')} alt="Cancel icon"></img>
                <img src={require('../images/cancel-fill.png')} alt="Cancel icon"></img>
            </div>
        </div>
    )
}
export default Credits;