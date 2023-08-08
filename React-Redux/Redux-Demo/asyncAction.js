const redux = require('redux');
const createStore = redux.createStore

const thunkMiddleware = require('redux-thunk').default
const axios = require('axios');
const applyMiddleware = redux.applyMiddleware;

// 
const initialState = {
    loading: false,
    users: [],
    error: '',
}

//
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

//
const fetchusersrequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchusersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchusersFailed = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

// functions for different actions
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }

        default:
            break;
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchusersrequest())
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchusersSuccess(users))  
        })
        .catch((error) => {
            // error.message
            dispatch(fetchusersFailed(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers());