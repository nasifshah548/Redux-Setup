import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../store/tasks/taskSlice";

const Tasks = () => {
  const { tasks, loading } = useSelector((state) => state.tasks); // Importing tasks and loading from taskSlice
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {tasks.map((x) => (
            <p key={x.id}>{x.task}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Tasks;
