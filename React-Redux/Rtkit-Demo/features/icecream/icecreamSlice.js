const { cakeActions } = require('../cake/cakeSlice').cakeActions

const createSlice = require('@reduxjs/toolkit').createSlice;

// initialState
const initialState = {
    numOfIcecreams : 20
}

// create a feature slice
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered :(state) => {
            state.numOfIcecreams--
        },
        restocked :(state, action) => {
            state.numOfIcecreams += action.payload
        },
        // extra reducers
        extraReducers:{
            ['cake/ordered'] : (state) => {
                state.numOfIcecreams--
            }
        }
        // extraReducers: builder => {
        //     builder.addCase(cakeActions.ordered, state=>{
        //         state.numOfIcecreams--
        //     })
        // }
    },
})

module.exports = icecreamSlice.reducer

module.exports.icecreamActions = icecreamSlice.actions