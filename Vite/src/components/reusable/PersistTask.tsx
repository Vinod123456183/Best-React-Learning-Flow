import React, { useState, useEffect } from "react";

type Task = {
  id: number;
  name: string;
};

const LOCAL_STORAGE_KEY = "tasks";

const PersistTask: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  // 1️⃣ Load tasks from Local Storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error("Error parsing tasks from Local Storage:", error);
      }
    }
  }, []);

  // 2️⃣ Save tasks to Local Storage whenever 'tasks' changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]); // run this effect whenever tasks change

  // Add a new task
  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const task: Task = {
      id: Date.now(),
      name: newTask.trim(),
    };

    setTasks(prev => [...prev, task]);
    setNewTask("");
  };

  // Delete a task
  const handleDeleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Persisted Task List</h2>

      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}{" "}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks yet. Add one above!</p>}
    </div>
  );
};

export default PersistTask;
