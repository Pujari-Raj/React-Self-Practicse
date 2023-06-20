import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from '../cake/cakeSlice'

// initialState
const initialState = {
    numOfIcecreams: 20
}

// create a feature slice
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
    // extra reducers
    // extraReducers:{
    //     ['cake/ordered'] : (state) => {
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    },

})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions