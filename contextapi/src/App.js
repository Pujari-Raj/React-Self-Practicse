import React, {Fragment} from "react";
import  Provider  from "./Provider";
import  Context  from "./Context";

/* Here we're using the same approach which we're using in Problem.js 
   But using context api we're not passing the data to each & every child(Agents,AgentOne,AgentTwo) 
   instead we're passing info directly in the child (AgentSandeep) we need. 
*/
const Agents = () => {
  return <AgentOne />  
}

const AgentOne = () => {
  return <AgentTwo />  
}

const AgentTwo = () => {
  return <AgentSandeep />  
}

// Accessing the data using Context API
const AgentSandeep = () => {
  return (
    <Context.Consumer>
      {context => (
        <Fragment>
          <h4>Mission Surgical Information</h4>
          <p>Mission name: {context.data.mName}</p>
          <h4>Mission Status: {context.data.status}</h4>
          <button onClick={context.isMissionCompleted}> Let's Compelete Mission </button>
        </Fragment>        
      )}      
    </Context.Consumer>      
  ); 
};



const App = () =>{
  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents/>        
      </Provider>
    </div>      
  );  
};

export default App;