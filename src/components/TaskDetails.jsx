import { useParams } from "react-router-dom";

const TaskDetails = ({ tasks }) => {
  console.log("tasks", tasks);
  const { tasks_id } = useParams();
  console.log("tasks_id", tasks_id);

  const taskCheck = tasks[tasks_id - 1];
  console.log("taskCheck", taskCheck);
  return (
    <>
      <h1>{taskCheck.task_id}Was added to your list</h1>
    </>
  );
};
export default TaskDetails;
