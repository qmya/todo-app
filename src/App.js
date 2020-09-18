import React, { setState, useState } from 'react';
import './App.css';

function App() {
  const[ todos, setTodos ] = useState([]);

  //to add the todo to the todos array we need another function
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }
  return (
    <div className="App">
     <h1> React Todo App </h1>
    </div>
  );
}

export default App;
