import React, { useMemo, useState } from 'react'

const UseMemoCounter = () => {

    const[counterone, setCounterOne] = useState(0);
    const[countertwo, setCounterTwo] = useState(0);
    
    const incrementOne = () => {
        setCounterOne(counterone+1);
    }

    const incrementTwo = () => {
        setCounterTwo(countertwo+1);
    }
    
    const isEven = useMemo(() => {
        let i=0;
        while (i<180000) {
            i++;
        }
        return (counterone % 2 === 0)
    }, [counterone]);
    
  return (
    <div>
        <div>
            <button onClick={incrementOne}>count- One {counterone}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>                    
            <button onClick={incrementTwo}>count- Two {countertwo}</button>
        </div>
    </div>
  )
}

export default UseMemoCounter