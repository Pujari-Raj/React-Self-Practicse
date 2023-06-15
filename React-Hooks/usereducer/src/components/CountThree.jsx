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

const CountThree = () => {

    /* count is state of our counter variable, and dispatch method is used 
        to execute any function(Incre,decre,reset)

        We can also use multiple reducers which uses same reducer functn
    */ 
    const [count, dispatch]  =  useReducer(reducer, initialState);
    const [count2, dispatch2]  =  useReducer(reducer, initialState);

    return (
        <div>
            <div> count - {count}</div>
            <buttton onClick={() => dispatch('increment')}>Increment</buttton>
            <buttton onClick={() => dispatch('deccrement')}>Decrement</buttton>
            <buttton onClick={() => dispatch('reset')}>Reset</buttton>

            <div> count - {count2}</div>
            <buttton onClick={() => dispatch2('increment')}>Increment</buttton>
            <buttton onClick={() => dispatch2('deccrement')}>Decrement</buttton>
            <buttton onClick={() => dispatch2('reset')}>Reset</buttton>
        </div>
    )
}

export default CountThree;