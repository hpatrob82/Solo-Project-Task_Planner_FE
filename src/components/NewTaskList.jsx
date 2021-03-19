
import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";


const NewTaskList = ({ reload }) => {
  const [tasks, setTasks] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchTask = async () => {
      const tasksData = await fetch(
        "http://127.0.0.1:3333/Tasks")
      const tasksDatajson = await tasksData.json()
      console.log(tasksDatajson)
      setTasks(tasksDatajson);
    } 
    fetchTask();
  }, [reload]);

 

  return (
    <>
      {!!tasks.length ? (
        <>
          {/* <Route exact path="/"> */}
            <ul>
              {tasks.map((task, index) => {
                return (
                  <li key={index}>
                    <Link to={`/task/${task.id}`}>{task.task_name}</Link>
                  </li>
                );
              })}
            </ul>
          {/* </Route> */}
          {/* <Route path="/task/:taskID">
            <TaskDetails task={task} />
            <RemoveTask RemoveTask={RemoveTask} />
            <button type="button" onClick={() => history.delete()}>
              Delete
            </button>
          </Route> */}
        </>
      ) : (
        <p>Loading Tasks...</p>
      )}
    </>
  );

      }
export default NewTaskList;
