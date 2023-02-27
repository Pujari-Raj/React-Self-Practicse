import './App.css';
import Conditionalattribute from './components/Conditionalattribute';
import Employees from './components/Employees';
import Homepage from './components/Homepage';
import Messages from './components/Messages';
import ToggleFunctionality from './components/ToggleFunctionality';

function App() {
  const employees = [{id:'1', firstName: 'Virat', lastName: 'Kohli'},
                      {id:'2', firstName: 'MS', lastName: 'Dhoni'}
                    ];

  const messages = ['Keep Going!!!', 'Continue with React', 'Push Code to Github'];

  return (
    <div className="App">
      {/* <Homepage isLoggedIn = {false} /> */}
      {/* (for ternary opeartor) <Homepage/> */}
    {/*Employee component is for displaying the employees list using the map function*/}
    {/* <Employees employeelist={employees}/> */}
    <br/>
    {/* <input type="text" disabled={false} required={require} /><span>(Disabled Input Field)</span> */}
    
    {/* <Conditionalattribute/> */}

    {/* <ToggleFunctionality/> */}

    <Messages outboxMessages = {messages}/>
    </div>
  );
}

export default App;