import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import TaskDetails from './TaskDetails';



const NewTaskList = ({reload}) => {
    const [task, setTask] = useState([]);
const history = useHistory();
useEffect(() => {
    (async () => {
        const tasksData = await fetch('http://127.0.0.1:3333/Tasks').then(response => response.json());
        console.log('tasksData', tasksData);
        setTask(tasksData);
    })();
},[reload]);

   
    return (
        <>
           {!!task.length ? (
               <>
               <Route exact path='/'>
                   <ul>
                       {task.map((task, index) => {
                           return (
                               <li key={index}>
                                   <Link to={`/task${task.id}`}>{task.name}</Link>
                               </li>
                           );
                       })}
                   </ul>
               </Route>
               <Route path='/task/:taskID'>
                   <TaskDetails task={task} />
                   <button type='button' onClick={() => history.delete()}>Delete</button>
               </Route>
               </>
           ) : (
               <p>Loading Tasks...</p>
           )}
            
        </>
    )
}


export default NewTaskList;
