import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NewTask from './components/NewTask';
import NewTaskList from './components/NewTaskList';


import { useState } from 'react';


function App() {
  const [reload, setReload ] = useState(false);
  const handleReload = (status) => {
    setReload(status);
  }
  return (
    <header>
    <div className="Get it Done App">
         <h1>GET IT DONE!</h1>
        
         <NewTask handleReload={handleReload}/>
         <Router>
         <NewTaskList reload={reload}/>
        
         </Router>
         </div>  
         </header>
    
  );
}

export default App;
