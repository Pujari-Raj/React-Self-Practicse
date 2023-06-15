import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const Count = () => {

    // count is state of our counter variable, and dispatch method is used to execute any function(Incre,decre,reset)
    const [count, dispatch]  =  useReducer(reducer, initialState);

    return (
        <div>
            <div> count - {count}</div>
            <buttton onClick={() => dispatch('increment')}>Increment</buttton>
            <buttton onClick={() => dispatch('deccrement')}>Decrement</buttton>
            <buttton onClick={() => dispatch('reset')}>Reset</buttton>
        </div>
    )
}

export default Count;