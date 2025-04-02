import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../store/tasks/taskSlice";

const Tasks = () => {
  // Importing tasks and loading from taskSlice
  const { tasks, loading } = useSelector(
    (state) => state.tasks || { tasks: [], loading: false }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks()); // Dispatch loadTasks when the component mounts
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : tasks && tasks.length > 0 ? (
        <div>
          {tasks.map((x) => (
            <p key={x.id}>{x.task}</p>
          ))}
        </div>
      ) : (
        <p>No tasks available</p>
      )}
    </>
  );
};

export default Tasks;
