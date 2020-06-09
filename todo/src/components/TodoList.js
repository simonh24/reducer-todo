// LOOPS THROUGH TO DISPLAY TODO.JS -- need initalstate to loop through
// HAS CLEAR COMPLETED BUTTON
// HAS TOGGLE TODO
// CLEARTODO - IF COMPLETED DELETE

import React from "react";
import Todo from "./Todo";
import {Button} from "@material-ui/core";
import styled from "styled-components";

const StyledDiv = styled.div`
    text-align: center;
`;

const TodoList = (props) => {
    const {state, dispatch} = props;
    return (
            <StyledDiv>
                {
                    state.todos.map((el, ind) => {
                        return (
                            <Todo el={el} ind={ind} dispatch={dispatch} />
                        );
                    })
                }
                <Button variant="contained" color="secondary" onClick={() => { dispatch({ type: "CLEAR_COMPLETED" }) }}>Clear Completed</Button>
            </StyledDiv>
        )
}

export default TodoList;