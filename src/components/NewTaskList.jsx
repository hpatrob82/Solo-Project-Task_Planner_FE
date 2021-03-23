import React from "react";
import { Link } from "react-router-dom";

const NewTaskList = ({ tasks }) => {
  return (
    <>
      {!!tasks.length ? (
        <>
          <ul>
            {tasks.map((task, index) => {
              return (
                <li key={index}>
                  <Link to={`/tasks/${task.id}`}>{task.task_name}</Link>
                 
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
