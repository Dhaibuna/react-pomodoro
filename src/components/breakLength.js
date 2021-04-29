import moment from "moment";
import React, {useState} from "react";

const SetBreakLength = () => {
    // start configuration Break Time Length configuration
    const [count, setCount] = useState(300);

    //Increase button
    const increaseCount =() =>{
        setCount(count+60);
    }
    //Decrease button
    const decreaseCount =()=>{
        if (count > 0) {
            setCount(count-60);
        }else
            alert("Come on, take a break ;) !");
    }

    const BreakTimeInMinutes = moment.duration(count, 's').minutes()

    return(
        <div class="timelength-container">
            <h2> Break time length</h2>
            <div>
                <button onClick={decreaseCount} >-</button>
                <span>{BreakTimeInMinutes}</span>
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    )
}

export default SetBreakLength