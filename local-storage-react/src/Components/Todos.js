import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import {FaTrash} from "react-icons/fa"

const Todos = ({todos, markDone}) => {
    return(
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right" onClick={() => markDone(todo.id)}>
                        <FaTrash></FaTrash>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default Todos;