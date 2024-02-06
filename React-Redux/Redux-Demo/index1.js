const redux = require("redux");
const createStore = redux.createStore;

//
const bindActionCreators = redux.bindActionCreators;

// actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';


// state of application (assume we have in-total 12 cakes) Step-2 Declare initialState
// const initialState = {
//     numOfCakes: 10,
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIcecreamState = {
    numOfIcecreams: 20,
}

// created action Step-4 Define Action & Action Creators
function orderCake() {
    return {
        type: 'CAKE_ORDERED',
        // quantity: 1
        payload : 1,
    }
}

// function for restocking the cake
function restokeCake(qty = 1) {
    return {
        type: 'CAKE_RESTOCKED',
        // quantity: qty,
        payload : qty,
        /* In Redux payload is the convention used for any additional information we want to send */
    }
}

function orderIcecream() {
    return {
        type: 'ICECREAM_ORDERED',
        // quantity: 1
        payload : 1,
    }
}

// function for restocking the cake
function restockIcecream(qty = 1) {
    return {
        type: 'ICECREAM_RESTOCKED',
        // quantity: qty,
        payload : qty,
        /* In Redux payload is the convention used for any additional information we want to send */
    }
}


// Reducer (previousState, aaction) = newState Step-3 Create Reducer

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        default:
            return state;
    }
}

const iceCreamreducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1,
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + action.payload,
            }
        // added extra reducer(adding cake action inside the iceCreamd) 
        case CAKE_ORDERED:
            return{
                ...state,
                numOfIcecreams : state.numOfIcecreams - 1
        }
        default:
            return state;
    }
}

// creating root reducer and adding multiple reducer inside it
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamreducer
})

//step-1 Creating a Store
const store = createStore(rootReducer);
console.log('initialState-', store.getState());

//Step-5 Subscribe to store
const unsubscribe = store.subscribe(() => {
    console.log('Update State-', store.getState());
})

//Step- subscribe to actions to update the store  
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restokeCake(4));
 
// using bindActionCreators (bindActionCreators is convetion for calling actions in redux)
const actions = bindActionCreators({orderCake, restokeCake, orderIcecream, restockIcecream}, store.dispatch);
actions.orderCake();
actions.orderCake();
// actions.orderCake();
actions.restokeCake(5);

// actions.orderIcecream();
// actions.orderIcecream();
// actions.orderIcecream();
actions.restockIcecream(10);



// & finally unsubscribe to the changes
unsubscribe();

