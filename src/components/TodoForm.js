import React, { useState } from 'react';

function TodoForm() {
    const [ todo, setTodo ] = useState({
        id="",
        task="",
        completed=False
    })
    //event handling function
    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value })
    }
  return (
    <div>
     <form>
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