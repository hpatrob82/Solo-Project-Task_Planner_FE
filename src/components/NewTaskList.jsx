import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
const NewTaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const fetchTask = async () => {
      const tasksData = await fetch(
        "http://127.0.0.1/3000/Tasks"
       
      ).then((response) => response.json());

      setTasks(tasksData);
    };
    fetchTask();
  }, [reload]);
  const _handleReload = (status) => {
    setReload((status) => !status);
  };
  
  return (
    <>
      {!!tasks.length ? (
        <>
        <div className="Tasks" onChange={_handleReload}/>
          <ul className="unordered-list">
            {tasks.map((task, index) => {
              return (
                
                <li key={index} class="list-group">
                  <Link to={`/tasks/${task.id}`} class="list-group-item">{task.task_name} </Link>
                </li>
              
              );
            })}
          </ul>
        </>
      ) : (
        <p>Loading Tasks...</p>
      )}
    </>
  );
};

export default NewTaskList;
