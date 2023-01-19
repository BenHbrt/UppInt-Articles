import './Landing.scss'

import Button from "./Button"

const Landing = ({setDisplay}) => {
    return (
        <div className="landing">
            <div className="landing_text">
                <div className="landing_text_title">Articles Quiz</div>
                <div className="landing_text_instructions">
                    Complete the sentences by selecting "a", "an", "the", or no article "Ø".
                </div>
            </div>
            <div className="landing_buttons">
                <Button func={() => setDisplay("quiz")} text={"Start Quiz"} active={true} />
                <Button func={() => setDisplay("credits")} text={"Credits"} active={true} />
            </div>
            
        </div>
    )
}
export default Landing