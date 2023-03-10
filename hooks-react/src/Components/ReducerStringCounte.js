import React from 'react'

const initialState = {
    firststate: 0,
    secondstate: 18,
};
const reducer = (state, action) =>{
    switch (action.type) {
        case 'increment':
            return {};

        case 'decrement':
            return {};
    
        case 'reset':
            return initialState;
    
        default:
            break;
    }
}

const ReducerStringCounte = () => {


  return (
    <div>

    </div>
  )
}

export default ReducerStringCounte;