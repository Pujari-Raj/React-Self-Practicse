const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;


console.log('Initial State-', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(' Updated State-', store.getState());
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(5))
store.dispatch(fetchUsers());

// console.log(' Updated State-after-fetchUsers', store.getState());
// unsubscribe();