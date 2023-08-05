import React, {useState} from 'react';
import { increment, decrement, reset, incrementByValue } from "./counterSlice";
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
     
    const [incrementvalue, setIncrementValue] = useState(0);

    const addValue = Number(incrementvalue) || 0;

    const resetAll = () => {
        setIncrementValue(0);
        dispatch(reset());
    }
    return (
        <div>
            Counter
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type='text'
                value={incrementvalue}
                onChange={(e) => setIncrementValue(e.target.value)}
            />

            <div className="">
                <button onClick={() => dispatch(incrementByValue(addValue))} >Add Value</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </div>
    )
}

export default Counter