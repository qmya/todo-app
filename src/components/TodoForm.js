import React, { useState } from 'react';
import uuid from "uuid";
function TodoForm( addTodo ) {
    const [ todo, setTodo ] = useState({
        id="",
        task="",
        completed=False
    })
    //event handling function
    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value })
    }
    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
           addTodo({ ...todo, id: uuid.v4() });
           //reset task input
           setTodo({ ...todo, task: "" });
        }

    }
  return (
    <div>
     <form onSubmit= {handleSubmit}>
         <input
            name="task"
            type="text"
            value={todo.task}
            onChange= {handleTaskInputChange}
         />
         <button/>
     </form>
    </div>
  );
}

export default TodoForm;