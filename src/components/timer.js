import React, {useState} from "react";

const SetTimer = () => {

    const [timerMinutes, setTimerMinutes]= useState('00');
    const[timerSeconds, setTimerSeconds]=useState('00');

    return (
        <div>
            <div>
                <h2>Session Time</h2>
                <span>25</span>
                <span>:</span>
                <span>00</span>
            </div>
        </div>
    );
};

export default SetTimer;
