import './App.css';
import NewTask from './components/NewTask';
import NewTaskList from './components/NewTaskList';

function App() {
  return (
    <div className="Get it Done App">
         <h1>GET IT DONE APP</h1>
         <NewTaskList />
      <NewTask />
   
    </div>
  );
}

export default App;
