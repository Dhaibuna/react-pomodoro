import React, {useState} from "react";

const SetTimer = () => {
    // start configuration Break Time Length configuration
    const [count, setCount] = useState(5);

    //Increase button
    const increaseCount =() =>{
        setCount(count+1);
    }
    //Decrease button
    const decreaseCount =()=>{
        setCount(count-1);
    }

    return(
        <div class="timelength-container">
            <h2> Break time length</h2>
            <div>
                <button onClick={decreaseCount} >-</button>
                <span>{count}</span>
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    )
}

export default SetTimer