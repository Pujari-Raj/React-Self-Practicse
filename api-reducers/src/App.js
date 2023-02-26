import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React,{useReducer} from 'react';
import { Container } from 'reactstrap';

import { TodoContext } from './context/TodoContent';
import reducer from './context/reducer';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const App = () =>{
  const [todos , dispatch] = useReducer(reducer, []);
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <TodoForm></TodoForm>
        <Todos></Todos>
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
