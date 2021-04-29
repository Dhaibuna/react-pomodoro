import React, {useRef, useEffect, useState} from "react";



const SetTimerClock = () => {
    

    return (
        <section>
            <div class="clock-container">
                <h2>Session Time</h2>
                <span>25</span>
                <span>:</span>
                <span>00</span>
                <div>
                    <button>GO/STOP</button>
                    <button>RESET</button>
                </div>
            </div>
        </section>
    );
};

export default SetTimerClock;
