import React, {useState} from "react";

const SetSessionLength = () => {
    // start configuration Session Time Length configuration
    const [count, setCount] = useState(15);

    //Increase button
    const increaseCount = () => {
        setCount(count + 1);
    };
    //Decrease button
    const decreaseCount = () => {
        if (count > 15) {
            setCount(count - 1);
        }else{
            alert("15 minutes of focus is not so long, just try è_é !");
            setCount(15);
        }
    };

    return (
        <div class="timelength-container">
            <h2> Session time length</h2>
            <div>
                <button onClick={decreaseCount}>-</button>
                <span>{count}</span>
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    );
};

export default SetSessionLength;
