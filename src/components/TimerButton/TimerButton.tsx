import React from 'react';
import "./TimerButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward } from '@fortawesome/free-solid-svg-icons'

type Props = {
    buttonAction: () => void,
    buttonValue: string,
    isOn: boolean
}

const TimerButton: React.FC<Props> = ({ buttonAction, buttonValue,isOn }) => {
    return (
        <div>
            {buttonValue === "Start" ? <div className="timer-button" onClick={buttonAction}>
                {isOn ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</div> : null}
            {buttonValue === "Reset" ? <div className="timer-button" onClick={buttonAction}><FontAwesomeIcon icon={faBackward} /></div>:null}
        </div>
    )
}

export default TimerButton;