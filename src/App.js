import React, { setState, useState } from 'react';
import './App.css';

function App() {
  const[ todos, setTodos ] = useState([]);
  return (
    <div className="App">
     <h1> React Todo App </h1>
    </div>
  );
}

export default App;
