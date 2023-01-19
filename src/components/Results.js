import './Results.scss'

import { questionListLength } from "../data/questions";
import comment from '../data/comment';

import Button from './Button'

const Results = ({setDisplay, score}) => {

    const percentageScore = Math.round((score/questionListLength) * 100 )

    const commentText = comment(percentageScore)

    return (
        <div className="results">
            <div className="results_text">
                <div className="results_text_percent">
                    {percentageScore}%
                </div>
                <div className="results_text_comment">
                    {commentText}
                </div>
            </div>
            <div className="results_buttons">
                <Button func={() => setDisplay("credits")} text={"Credits"} active={true} />
            </div>
        </div>
    )
}
export default Results