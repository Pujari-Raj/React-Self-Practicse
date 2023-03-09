import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  // const [todos, setTodos] = useState([]);
  // const [searchtodo, setSearchTodo] = useState("");

  // useEffect(()=>{
  //     const fetchTodos = async ()=> {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //       const todos = await res.json();
  //       setTodos(todos);
  //       console.log(todos);
  //     };
  //     fetchTodos();
  // }, []);

  let renderTodos = data.slice(0, 10).map((todo) => {
    return (
      <div key={todo.userId}>
        <p>{todo.title}</p>
      </div>
    );
  });

  // let filteredTodos = todos.slice(1, 10).filter(({title}) => {
  //   return title.indexOf(searchtodo) >=0;
  // })
  // .map((todo) => {
  //   return(
  //    <div key={todo.userId}>
  //      <p>{todo.title}</p>
  //    </div>
  //   );
  //  })

  return (
    <div>
      <h3>Todo List</h3>
      {/* <input type="text" value={searchtodo} placeholder="search User"
      onChange={(e) => setSearchTodo(e.target.value)} />

      <div> {filteredTodos} </div>   */}
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
