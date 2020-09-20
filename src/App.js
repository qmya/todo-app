import React, { useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const[ todos, setTodos ] = useState([]);
  //to add the todo to the todos array we need another function
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
     <h1> React Todo App </h1>
     <TodoForm addTodo={ addTodo }/>
     <TodoList todos={ todos }/>
    </div>
  );
}

export default App;
