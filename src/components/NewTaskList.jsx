import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import TaskDetails from "./TaskDetails";

const NewTaskList = ({ reload }) => {
  const [tasks, setTasks] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchTask = async () => {
      const tasksData = await fetch(
        "http://127.0.0.1:3333/Tasks"
      ).then((response) => response.json());
      console.log("this is the task data", tasksData);
      setTasks(tasksData);
    };
    fetchTask();
  }, [reload]);

  return (
    <>
      {!!tasks.length ? (
        <>
          <ul>
            {tasks.map((task, index) => {
              return (
                <li key={index}>
                  <input id="todo-2" type="checkbox" />
                  <Link to={`/tasks/${task.id}`}>{task.task_name}</Link>
                </li>
              );
            })}
          </ul>

          <Route path="/tasks/:tasks_id">
            <TaskDetails tasks={tasks} />

            <button
              type="button"
              className="btn btn__danger"
              onClick={() => history.delete()}
            >
              Delete
            </button>
          </Route>
        </>
      ) : (
        <p>Loading Tasks...</p>
      )}
    </>
  );
};
export default NewTaskList;
