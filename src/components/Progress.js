import './Progress.scss'

const Progress = ({canMove, questionNum, questionListLength}) => {

    let width = 0

    if (!canMove) {
        width = (questionNum / questionListLength) * 100
    } else {
        width = ((questionNum + 1) / questionListLength) * 100
    }

    return (
        <div className="progress">
            <div className="progress_bar">
                <div className="progress_completed" style={{width: `${width}%`}}></div>
            </div>
            {questionNum + 1} / {questionListLength}
        </div>
    )
}
export default Progress