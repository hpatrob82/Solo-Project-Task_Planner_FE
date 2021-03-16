import NewTaskList from './NewTaskList';
import React, { useState } from 'react';

const NewTask = () => {
    const [addTask, setAddTask] = useState('');
    
    const _handleSubmit = async (e) => {
        e.preventDefault();
        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: addTask
        // });        
        // setAddTask('')
    }

    const _handleChange = (e) => {
        setAddTask(e.target.value) //lets us type in placeholder
    
    };
   

    return (
        <div>
         <form onSubmit={_handleSubmit}>
         <label>
         
             <input className="task-form" type="text" name="Task" placeholder="Add Task" value={addTask} className="task-input"  onChange={_handleChange}/>   
             </label>          
             </form>  
             <button className="task-button">Add Task</button>
        </div>
    );
    
}


export default NewTask;
