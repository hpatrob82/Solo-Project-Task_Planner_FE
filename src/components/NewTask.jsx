
import React, { useState } from 'react';


const NewTask = ({ handleReload }) => {
    const [NewTask , setNewTask ] = useState('');
    const [submitError, setSubmitError] = useState(null);
}

const _handleSubmit = async (e) => {
    e.preventDefault();
const submitResponse = await fetch('http://127.0.0.1:3333/Tasks', {
    headers: { 'Content-type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({ new_task: NewTask}),
}).then((response) => response);
console.log('submit response is,', submitResponse.status);
setNewTask('');

    if (submitResponse.status === 200) {
        handleReload(true);
    } else {
        setSubmitError(submitResponse.statusText);
    }

    const _handleChange = (e) => {
        setNewTask(e.target.value)
    }

return (
<>
    <form onSubmit={_handleSubmit}>
    <label>
        Add Task 
        <input type="text" name="Task" value={NewTask} onChange={_handleChange} />        
    </label>
    
    <button type='submit'> Add Task </button>
    
    </form>
    {!!submitError && <div className='error'>{submitError}</div>}
    </>
);

}


export default NewTask;
