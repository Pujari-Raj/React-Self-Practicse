import React, { useState, useContext } from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddOn,
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContent";
import { ADD_TODO } from "../context/action_types";

const TodoForm = () => {

    const [todoString, setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e =>{
        console.log('handle called');
        e.preventDefault();

        if (todoString === "") {
            return alert("enter to do");
        }

        const todo = {
            todoString,
            id: v4()
        };
        
        dispatch({
            type: ADD_TODO,
            payload : todo
        });

        setTodoString("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next Todo"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />

                    <div className="input-group-append">
                    <Button
                        color="warning"
                    >Add</Button>
                    </div>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;