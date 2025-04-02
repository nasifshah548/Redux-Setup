import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

let tasks = [
  { id: 1, task: "Start creating Redux application", completed: true },
  { id: 2, task: "Design redux store", completed: true },
  { id: 3, task: "Define all actions list", completed: false },
  { id: 4, task: "Create reducer", completed: false },
  { id: 5, task: "Create store using reducer", completed: false },
];

// Get all tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Add new Task
app.post("/api/tasks", (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body, completed: false };
  tasks.push(newTask);

  console.log(tasks);
  res.json(newTask);
});

// Change task completed property
app.patch("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks[index].completed = req.body.completed;
  res.json(tasks[index]);
});

// Delete Specific task
app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const filteredTasks = tasks.filter((task) => task.id !== id);

  if (filteredTasks.length === tasks.length) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks = filteredTasks;
  res.json({ id });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
