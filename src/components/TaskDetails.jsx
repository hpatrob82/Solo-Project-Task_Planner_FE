import { useParams, useHistory } from "react-router-dom";


const TaskDetails = ({ tasks, handleReload }) => {
  const { task_id } = useParams();
const history = useHistory();
  const taskCheck = tasks.find((task) => {
    return task.id === parseInt(task_id) ? task : null;
  });

  const deleteTask = async (task_id) => {
    const response = await fetch(
      `http://localhost:3333/tasks/delete/${task_id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status===200){
      handleReload(true);
      history.push('/');
    } else {
      alert('unable to delete entry');
    }
  };
  return (
    <>
      <h1>{taskCheck.task_name}</h1>
   
        <button className="btn btn-danger" type="button" onClick={() => deleteTask(task_id)} >Complete Task</button>
     
    </>
  );
};
export default TaskDetails;
//delete entry button
