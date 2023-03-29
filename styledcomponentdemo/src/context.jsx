/*
    Steps to create ContextAPI and access it
    1. Create context 
    2. Provider
    3. Consumer / useContext
*/

import React, {useContext, useReducer} from "react";
import reducer from './reducer'

const AppContext = React.createContext();

const initialState = {
    name: "",
    image: ""
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () =>{
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Thapa Technical",
                image: "./images/hero.svg",
            }
        })
    }

    const updateAboutPage = () =>{
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "Vinod Thapa",
                image: "./images/about1.svg",
            }
        })
    }

    const updateServicePage = () =>{
        return dispatch({
            type: "SERVICE_UPDATE",
            payload: {
                name: "Vinod Thapa",
                image: "./images/hero.svg",
            }
        })
    }

    return <AppContext.Provider value={{...state, updateAboutPage, updateHomePage, updateServicePage}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};