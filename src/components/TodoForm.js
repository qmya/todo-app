import React, { useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
    const [ todo, setTodo ] = useState({
        id: "",
        task: "",
        completed: false
    })
    //event handling function
    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value })
    }
    function handleSubmit(e){
        e.preventDefault();
        
        // trim() gets rid of string whitespace
        if(todo.task.trim()){
           addTodo({...todo, id:uuidv4()});
           //reset task input
           setTodo({ ...todo, task: "" });
        }

    }
  return (
    <div>
     <form className="todo-form" onSubmit= {handleSubmit}>
         <TextField
            name="task"
            type="text"
            value={todo.task}
            onChange= {handleTaskInputChange}
         />
         <Button type= "submit"> Submit </Button>
     </form>
    </div>
  );
}

export default TodoForm;