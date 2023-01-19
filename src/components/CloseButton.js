import { useState } from 'react'
import './CloseButton.scss'

const CloseButton = ({ func }) => {

    const [hover, setHover] = useState(false)

    return (
        <div className="closebutton" onClick={func} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? 
            <img src={require('../images/cancel-fill.png')} alt=""/>
            :
            <img src={require('../images/cancel-nofill.png')} alt=""/>
            }
        </div>
    )
}
export default CloseButton;