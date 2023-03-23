import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Todos from './Components/Todos';
import TodoForm from './Components/TodoForm';

function App() {

  const [todos, setTodos] = useState([]);
 
  useEffect(()=> {
      const localtodos = localStorage.getItem("todos")
      console.log({localStorage});
      if (localtodos) {
          setTodos(JSON.parse(localtodos));
        }
      }, [])
    
  const addTodos = async todo => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markDone = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container fluid>
      <h1>Todo App With Local Storage</h1>
      <Todos todos={todos} markDone={markDone} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
}

export default App;
