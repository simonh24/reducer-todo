// EACH TODO ITEM
// TOGGLETODO - CLICK TO SET TO COMPLETE / INCOMPLETE ---- need reducer here for completed

import React from "react";
import {Card} from "@material-ui/core";
import styled from "styled-components";

const StyledCard = styled(Card)`
    display: flex;
    width: 50%;
    margin: 5px 25%;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
`;

const StyledP = styled.p`
    font-family: Roboto;
`;

export default function Todo(props) {
    const { el, ind, dispatch } = props;
    return (
        <StyledCard
            onClick={() => { dispatch({ type: "TOGGLE_TODO", payload: ind }) }}
            style={{
                backgroundColor: el.completed ? "red" : "",
                color: el.completed ? "white" : ""
            }}>
            <StyledP>{el.item}</StyledP>
        </StyledCard>
    )
}