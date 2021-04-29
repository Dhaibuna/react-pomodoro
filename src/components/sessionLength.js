import moment from "moment";
import React, {useState} from "react";

const SetSessionLength = () => {
    // start configuration Session Time Length configuration
    const [count, setCount] = useState(300);

    //Increase button
    const increaseCount = () => {
        setCount(count + 60);
    };
    //Decrease button
    const decreaseCount = () => {
        if (count > 15) {
            setCount(count - 60);
        }else{
            alert("15 minutes of focus is not so long, just try è_é !");
            
        }
    };

    const sessionTimeInMinutes = moment.duration(count,'s').minutes();

    return (
        <div class="timelength-container">
            <h2> Session time length</h2>
            <div>
                <button onClick={decreaseCount}>-</button>
                <span>{sessionTimeInMinutes}</span>
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    );
};

export default SetSessionLength;
