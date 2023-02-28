import { useState } from "react";

function useCount(initalValue = 0, value) {
    const [count, setCount] = useState(initalValue);

    const increment = () =>{
        setCount(count+value);
    }

    const decrement = () =>{
        setCount(count-value);
    }
    
    const reset = () =>{
        setCount(initalValue);
    }

    return[count, increment, decrement, reset];
}

export default useCount;