const redux = require("redux");
const createStore = redux.createStore;

/* Immer is package used to deal with the nested-states */
const produce = require('immer').produce


// actions
const STREET_UPDATED = 'STREET_UPDATED';

// state of application (assume we have in-total 12 cakes) Step-2 Declare initialState
const initialState = {
    name: 'Pujari',
    address: {
        street: '118 Marathli St',
        City: 'Banglore',
        state : 'Karnataka',
    }
}

// created action Step-4 Define Action & Action Creators
function updateStreet(street) {
    return {
        type: 'STREET_UPDATED',
        // quantity: 1
        payload : street,
    }
}

// Reducer (previousState, aaction) = newState Step-3 Create Reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            })

        default:
            return state;
    }
}

//step-1 Creating a Store
const store = createStore(reducer);
console.log('initialState-', store.getState());

//Step-5 Subscribe to store
const unsubscribe = store.subscribe(() => {
    console.log('Update State-', store.getState());
})

//Step- subscribe to actions to update the store  
store.dispatch(updateStreet('018 Urban Bengaluru'));
store.dispatch(updateStreet('108 Eastern Bengaluru'));

// & finally unsubscribe to the changes
unsubscribe();
