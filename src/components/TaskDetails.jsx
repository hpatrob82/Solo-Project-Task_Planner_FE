
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';




const TaskDetails = ({task}) => {
    console.log('task', task);
    const { taskID } = useParams();
    console.log('taskID', taskID);

    const taskNew = task[taskID - 1];
    console.log('taskNew', taskNew);
    return(
        <>
        <h1>{taskNew.name} Was added to your list</h1>
        </>
    )
}
export default TaskDetails;