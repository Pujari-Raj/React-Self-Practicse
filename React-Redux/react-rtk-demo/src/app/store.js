import {configureStore} from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';


// const cakeReducer = require('../features/cake/cakeSlice');
// const icecreamReducer = require('../features/icecream/icecreamSlice');
// const reduxLogger = require('redux-logger');
//const userReducer = require('../features/user/userSlice');


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(reduxLogger.logger)
})

export default store;