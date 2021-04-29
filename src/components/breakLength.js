import React, {useState} from "react";

const SetBreakLength = () => {
    // start configuration Break Time Length configuration
    const [count, setCount] = useState(5);

    //Increase button
    const increaseCount =() =>{
        setCount(count+1);
    }
    //Decrease button
    const decreaseCount =()=>{

        if (count > 0) {
            setCount(count - 1);
        }else
            alert("Come on, take a break ;) !");
            setCount(0);
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

export default SetBreakLength