import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTask from "./components/NewTask";
import NewTaskList from "./components/NewTaskList";
import TaskDetails from "./components/TaskDetails";
// import ProfilePage from './components/ProfilePage';
import Menubar from './components/Menubar';
import SignIn from './components/SignIn';

// import UserProvider from "./providers/UserProvider";
import './App.css';




function App() {
  const { isLoading } = useState("");

  if (isLoading) return <div>Loading...</div>
  
  
  
  return (
   
    <Router>
 <Menubar />
      <div className="Get it Done App">
       <div class="jumbotron text-center">
<h1>Get it Done!</h1>

       </div>
      
        <Route exact path="/">
        <SignIn path="/signin" />
     
        {/* <UserProvider /> */}
       
        </Route>
        {/* <ProfilePage /> */}
        <Route path="/tasks/:task_id">
        <NewTask  />

<NewTaskList  />
          <TaskDetails />
        </Route>
      </div>
    </Router>
  );
}

export default App;
 // "https://get-it-done-back.herokuapp.com/Tasks"