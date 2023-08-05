import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

// importing & adding reducer in store
export const store = configureStore({
    reducer: {
        counter : counterReducer,
    }
})