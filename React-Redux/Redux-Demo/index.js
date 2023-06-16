
const CAKE_ORDERED = 'CAKE_ORDERED'

// state of application (assume we have in-total 12 cakes)
const initialState = {
    numOfCakes : 10,
}

// created action
function orderCake() {
    return{
      type :  'CAKE_ORDERED', 
      quantity :  1
      }    
}

// Reducer (previousState, aaction) = newState

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
    
        default:
            return state;
    }
}