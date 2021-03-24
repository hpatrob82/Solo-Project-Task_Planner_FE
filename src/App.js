import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTask from "./components/NewTask";
import NewTaskList from "./components/NewTaskList";
import TaskDetails from "./components/TaskDetails";
import './App.css';




function App() {
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const fetchTask = async () => {
      const tasksData = await fetch(
        "http://127.0.0.1:3333/Tasks"
      ).then((response) => response.json());

      setTasks(tasksData);
    };
    fetchTask();
  }, [reload]);
  const _handleReload = (status) => {
    setReload((status) => !status);
  };
  return (
    <Router>
      <div className="Get it Done App">
       <div class="jumbotron text-center">
<h1>Get it Done!</h1>

       </div>

        <Route exact path="/">
          <NewTask handleReload={_handleReload} />

          <NewTaskList tasks={tasks} />
        </Route>
        <Route path="/tasks/:task_id">
          <TaskDetails handleReload={_handleReload} tasks={tasks} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
