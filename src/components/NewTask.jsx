import React, { useState } from "react";

const NewTask = ({ handleReload }) => {
  const [TaskName, setTaskName] = useState("");
  const [submitError, setSubmitError] = useState(null);

  
  const _handleSubmit = async (e) => {
    e.preventDefault();
    const submitResponse = await fetch(`http://127.0.0.1:3333/Tasks`, {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ task_name: TaskName }),
    }).then((response) => response);
    setTaskName("");

    if (submitResponse.status === 200) {
      handleReload(true);
    } else {
      setSubmitError(submitResponse.statusText);
    }
  };
  const _handleChange = (e) => {
    setTaskName(e.target.value);
  };


  return (
    <>
      <form onSubmit={_handleSubmit}>
        <label>
          Enter Task Here
          <input
            type="text"
            id="TaskName"
            name="TaskName"
            value={TaskName}
            onChange={_handleChange}
          />
        </label>

        <button
          type="submit"
          className="btn btn__primary bn__lg"
          value={TaskName}
          onClick={_handleSubmit}
        >
          {" "}
          Add Task{" "}
        </button>
        
      </form>
      
    

      {!!submitError && <div className="error">{submitError}</div>}
    </>
  );
};

export default NewTask;
