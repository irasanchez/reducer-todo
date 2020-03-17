import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); //global state that concerns the whole app

  const [input, setInput] = useState(""); //local state that only concerns the form

  const ADD_TODO = { type: "ADD_TODO", payload: input };

  const CLEAR = { type: "CLEAR" };

  const handleChanges = event => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setInput("");
  };

  return (
    <div className="App">
      <header className="App-header">Getter Done</header>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          value={input}
          onChange={handleChanges}
        />

        <button onClick={() => dispatch(ADD_TODO)}>Add Todo</button>
      </form>

      <button
        onClick={() => {
          dispatch(CLEAR);
        }}
      >
        Clear Completed
      </button>

      <ul className="todo-list">
        {state.todos.map(({ todo, completed, id }) => {
          return (
            <li
              style={{ textDecoration: completed ? "line-through" : "" }}
              onClick={() => {
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: { todo, completed, id }
                });
              }}
            >
              {todo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
