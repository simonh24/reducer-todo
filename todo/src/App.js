import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import React, { useReducer } from "react";
import { initialState, reducer } from "./reducers/todoReducer";
import styled from "styled-components";

const StyledH2 = styled.h2`
  text-align: center;
  font-family: Roboto;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <StyledH2>Welcome to your Todo App!</StyledH2>
      <TodoForm state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}


export default App;