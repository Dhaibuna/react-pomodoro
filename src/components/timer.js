import React, {useRef, useEffect, useState} from "react";
import SetSessionLength from "./sessionLength"

const SetTimerClock = () => {
    const[timeLeft, setTimeLeft] = useState(0)

    return (
        <section>
            <div class="clock-container">
                <h2>Session Time</h2>
                <span>{timeLeft}</span>

                <div>
                    <button>GO/STOP</button>
                    <button>RESET</button>
                </div>
            </div>
        </section>
    );
};

export default SetTimerClock;
