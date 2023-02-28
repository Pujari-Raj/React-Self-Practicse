import React, { useState } from 'react'
import useCount from '../Hooks/useCount'

const Counter = () => {
    // const [count, setCount] = useState(0);

    // const increment = () =>{
    //     setCount(count+1);
    // }

    // const decrement = () =>{
    //     setCount(count-1);
    // }
    
    // const reset = () =>{
    //     setCount(0);
    // }

    /* Array Destructring */
    const [count, increment, decrement, reset] = useCount(15, 5);

  return (
    <div>
        <h2>Counter = {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter