import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTask from "./components/NewTask";
import NewTaskList from "./components/NewTaskList";
import TaskDetails from './components/TaskDetails';
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(false);
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
  const _handleReload = (status) => {
    setReload(status => !status);
  }
  return (
    <Router>
      <div className="Get it Done App">
        <h1>GET IT DONE!</h1>
        
        <Route exact path="/">
          <NewTask handleReload = {_handleReload} />

          <NewTaskList tasks={tasks} />
        </Route>
        <Route path="/tasks/:task_id">
            <TaskDetails handleReload={_handleReload} tasks={tasks} />
            {/* <button type="button" onClick={() => history.goBack()}>Go Back</button>    */}
            {/* <button className="btn btn-default" type="submit">Save</button> */}
          </Route>
      </div>
    </Router>
  );
}

export default App;
