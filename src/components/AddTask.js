import React, { useState } from "react";
import { addNewTask, addTask } from "../store/tasks/taskSlice";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = { task };

    // Dispatch addTask to immediately add the task to the local state
    dispatch(addTask(newTask));

    // Then, dispatch addNewTask to send the task to the API (this is asynchronous)
    dispatch(addNewTask(newTask));

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Enter new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
