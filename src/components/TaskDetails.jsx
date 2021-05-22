import { useParams, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
const TaskDetails = ({ tasks, handleReload }) => {
  const { task_id, task_details  } = useParams();
  const history = useHistory();
  const taskCheck = tasks.find((task) => {
    return task.id === parseInt(task_id, task_details) ? task : null;
  });
  const addDetails = async (task_details) => {
    const response = await fetch(`https://get-it-done-back.herokuapp.com/tasks/details/${task_details}`,
    {
      method: "POST",
    }
    );
    if (response.status === 200) {
      handleReload(true);
      history.push("/");
    } else {
      alert("unable to add details");
    }
  }
  const deleteTask = async (task_id) => {
    const response = await fetch(`https://get-it-done-back.herokuapp.com/tasks/delete/${task_id}`,
      {
        method: "DELETE",
      }
    );
    if (response.status === 200) {
      handleReload(true);
      history.push("/");
    } else {
      alert("unable to delete entry");
    }
  };
  
  return (
    <>
<form>
  <label>
    <h1>Details:</h1>
    <textarea placeholder="Add details here" onChange="alert ('You just changed the textarea.')" />
  </label>

  </form>
      <h1>{taskCheck.task_name}</h1>

      <button
        className="btn btn-danger"
        type="button"
        color="primary"
        onClick={() => deleteTask(task_id)}
      >
        Complete Task
      </button>
      
    </>
  );
};
export default TaskDetails;
