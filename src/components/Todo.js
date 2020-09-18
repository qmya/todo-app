import React from 'react';


function Todo({ todo }) {
  return (
    <div style={{ display: "flex",
    alignItems:"center"}}>
        <input type= "checkbox"/>
        <li 
        style={{ 
         color: "black",
            fontSize: "30px",
            padding: "10px",
            textDecoration: todo.completed ? "line-through" : null
        }}
        > { todo.task }
        </li>
        <button style={{ 
            width: "45px",
            fontSize: "20px",
            height: "30px"
        }}
            > X </button>
    </div>
  );
}

export default Todo;