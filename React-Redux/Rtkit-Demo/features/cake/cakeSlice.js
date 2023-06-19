const createSlice = require('@reduxjs/toolkit').createSlice;

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

module.exports = cakeSlice.reducer

module.exports.cakeActions = cakeSlice.actions