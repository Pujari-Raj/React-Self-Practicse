import React from 'react';
import './App.css';
import ComponentC from "./Components/ComponentC";

//1st context {Step-1}
export const UserContext = React.createContext();

//2nd context  {Step-1}
export const ChannelContext = React.createContext();

/*
  Steps To create and consume a context value 
  Step-1
  Creating a context
  Step-2
  Provide value to component , at high level-tree
  Step-3
  Component consumes the context value
*/
function App() {
  return (
    <div className="App">
        {/* Step-2 */}
      <UserContext.Provider value={'pujari'}>
        <ChannelContext.Provider value={'basvaraj'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
