import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Login from './components/Login';
import YoutubeForm from './components/YoutubeForm';
import OldYouTubeForm from './components/OldYouTubeForm';

function App() {
  
const [userName, setUserName] = useState("");
const [userNameUpdated, setUserNameUpdated] = useState("");
const [pass, setPass] = useState("");
const [passUpdated, setpassUpdated] = useState("");

const inputEvent = (event) =>{
  // console.log('clicked!!', e.target.value);
  setUserName(event.target.value);
}

const passEvent = (event) =>{
  // console.log('clicked!!', e.target.value);
  setPass(event.target.value);
}

const submitForm = (event) =>{
  event.preventDefault();
  setUserNameUpdated(userName);
  setpassUpdated(pass);
};
  return (
    <div className="App">
      {/* <form onSubmit={submitForm}>
      <div>
      <h1>Hey {userNameUpdated} {passUpdated} </h1>
      <input type="text" placeholder='Enter userName' 
        onChange={inputEvent} 
        value={userName}
      />
      <input type="text" placeholder='Enter Password' 
        onChange={passEvent} 
        value={pass}
      />
      <button type='submit'>Submit</button>
      </div>
      </form> */}
      {/* <Login></Login> */}
      <YoutubeForm/>
      {/* <OldYouTubeForm/> */}
    </div>
  );
}

export default App;
