import { createSlice } from "@reduxjs/toolkit";

// initial state of count
const initialState = {
    count: 0
}

// method
export const counerSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment : (state) => {
            state.count +=1;
        },
        decrement : (state) => {
            state.count -=1;
        },
        reset : (state) => {
            state.count =0;
        },
        incrementByValue : (state, action) => {
            state.count += action.payload;
        }
    }
})

// exporting reducers
export  const{increment, decrement,reset, incrementByValue } = counerSlice.actions;

export default counerSlice.reducer