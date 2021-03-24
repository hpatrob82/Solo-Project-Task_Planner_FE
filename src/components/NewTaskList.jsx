import React from "react";
import { Link } from "react-router-dom";

const NewTaskList = ({ tasks }) => {
  return (
    <>
      {!!tasks.length ? (
        <>
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
