import React, { useReducer } from 'react';

// converted state to object
const initialState = {
    firstcounter: 0,
    secondcounter: 20,
};

/* The reason the spread operator is used so frequently for this
 purpose is it's the least tedious method for putting all unchanged values into
  the new object.
*/
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstcounter: state.firstcounter + action.value };
        case 'decrement':
            return { ...state, firstcounter: state.firstcounter - action.value };
        case 'increment20':
            return { ...state, secondcounter: state.secondcounter + action.value };
        case 'decrement20':
            return { ...state, secondcounter: state.secondcounter - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const Countone = () => {

    // count is state of our counter variable, and dispatch method is used to execute any function(Incre,decre,reset)
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div> count - {count.firstcounter}</div>
            <div> count - {count.secondcounter}</div>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <div>

                <button onClick={() => dispatch({ type: 'increment20', value: 20 })}>Increment20</button>
                <button onClick={() => dispatch({ type: 'decrement20', value: 20 })}>Decrement20</button>
                {/* <button onClick={() => dispatch({ type: 'reset' })}>Reset20</button> */}
            </div>
        </div>
    )
}

export default Countone;