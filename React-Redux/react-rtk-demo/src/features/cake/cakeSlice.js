import { createSlice } from "@reduxjs/toolkit";

// initialState
const initialState = {
    numOfCakes : 10
}

// create a feature slice
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered :(state) => {
            state.numOfCakes--
        },
        restocked :(state, action) => {
            state.numOfCakes += action.payload
        },
    },
})

export default cakeSlice.reducer

export const{ ordered, restocked } = cakeSlice.actions