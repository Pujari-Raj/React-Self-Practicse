import React , {useContext} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {FaTrash} from 'react-icons/fa';
import { TodoContext } from "../context/TodoContent";
import { REMOVE_TODO } from "../context/action_types";


const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext);

    return(
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem s>
                    {todo.todoString}
                <span className="float-right"
                onClick={() => {
                    dispatch ({
                        type : REMOVE_TODO,
                        payload: todo.id,
                    })
                }}>
                <FaTrash/>
                </span>
                </ListGroupItem>
            ))
            }
        </ListGroup>
    )
}

export default Todos;