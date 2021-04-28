import React, {useState} from "react";

const SetTimer = () => {
    const [count, setCount] = useState(5);
    return(
        <div class="timelength-container">
            <h2> Break time length</h2>
            <div>
                <button onCLick={()=> setCount(count-1)}>-</button>
                <span>{count}</span>
                <button onCLick={()=> setCount(count+1)}>+</button>
            </div>
        </div>
    )
}

export default SetTimer