import logo from './logo.svg';
import './App.css';
import HookEffect from './Components/HookEffect';
import HookEffectMouse from './Components/HookEffectMouse';
import MouseContainer from './Components/MouseContainer';
import ReducerCounter from './Components/ReducerCounter';
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import React, { useReducer } from 'react';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) =>{
    switch (action) {
        case 'increment':
            return state+1;

        case 'decrement':
            return state-1;
    
        case 'reset':
            return initialState;
    
        default:
            break;
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    // <div className="App">
    //   {/* <HookEffect/> */}
    //   {/* <HookEffectMouse/> */}
    //   {/* <MouseContainer/> */}
    //   {/* <ReducerCounter/> */}
    //   Count - {count}
    //   <ComponentA />
    //   <ComponentB />
    //   <ComponentC />
    // </div>
    // </CountContext.Provider>
    <div className="App">
      
    </div>
  );
}

export default App;
