// HAS INPUT AND BUTTON TO ADD INTO LIST
// ADD TODO FUNCTION -- need reducer to add to array

import React, { useState } from "react";
import styled from "styled-components";
import {TextField, Button, Card} from "@material-ui/core";

const StyledCard = styled(Card)`
    display: flex;
    flex-flow: column;
    align-items: center;
    align-content: space-around;
    padding: 10px;
    width: 60%;
    margin: 0 20% 20px 20%;
`;

export default function TodoForm(props) {
    const {state, dispatch} = props;
    const [todoName, setTodoName] = useState("");

    const addTodo = todo => {
        const newTodo = {
            item: todo,
            id: Date.now(),
            completed: false,
        }
        console.log(newTodo);
        dispatch({ type: "ADD_TODO", payload: newTodo });
        console.log(state);
    }

    const handleChanges = e => {
        const { value } = e.target;
        setTodoName(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todoName);
        setTodoName("");
    }
    return (
        <StyledCard>
            <TextField variant="outlined" type="text" onChange={handleChanges} value={todoName}></TextField>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Add</Button>
        </StyledCard>
    );
}