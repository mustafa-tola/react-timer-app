import React, { useState, useEffect } from 'react'
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
    const [timerMinutes, setTimerMinutes] = useState<number>(0);
    const [timerSeconds, setTimerSeconds] = useState<number>(0);
    const [isTimerActive, setTimerActivity] = useState<boolean>(false);

    const toggleActivity = () => {
        setTimerActivity(!isTimerActive);
    }

    const resetTimer = () => {
        setTimerSeconds(0);
        setTimerMinutes(0);
        setTimerActivity(false);
    }

    useEffect(() => {
        let interval: any;
        if (isTimerActive) {
            interval = setInterval(() => {
                if (timerMinutes === 59) {
                    resetTimer();
                }
                if (timerSeconds === 59) {
                    setTimerMinutes(timerMinutes + 1);
                    setTimerSeconds(0);
                } else {
                    setTimerSeconds(timerSeconds + 1)
                }
            },1000)
        } else if(!isTimerActive && timerSeconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isTimerActive,timerMinutes,timerSeconds]);

    return (
        <div>
            <div className="timer-display">{("0" + timerMinutes).slice(-2)} : {("0" + timerSeconds).slice(-2)}</div>
            <div className="timer-button-container">
                <TimerButton buttonAction={toggleActivity} buttonValue={'Start'} isOn={isTimerActive} />
                <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} isOn={isTimerActive} />
            </div>
        </div>
    )
}

export default Timer;