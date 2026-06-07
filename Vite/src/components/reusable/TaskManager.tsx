import React, { useState, useEffect } from "react";

type Task = {
  id: number;
  name: string;
  completed: boolean;
};

const LOCAL_STORAGE_KEY = "tasks";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // Load tasks from Local Storage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error("Failed to parse tasks from localStorage:", error);
      }
    }
  }, []);

  // Save tasks to Local Storage whenever tasks change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const task: Task = {
      id: Date.now(),
      name: newTask.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  // Delete task with confirmation
  const handleDeleteTask = (id: number) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((task) => task.id !== id));
    }
  };

  // Toggle task completed
  const handleToggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // Start editing a task
  const handleStartEdit = (id: number, name: string) => {
    setEditId(id);
    setEditText(name);
  };

  // Save edited task
  const handleSaveEdit = (id: number) => {
    if (!editText.trim()) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, name: editText.trim() } : task,
      ),
    );
    setEditId(null);
    setEditText("");
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div
      style={{ maxWidth: "500px", margin: "2rem auto", fontFamily: "Arial" }}
    >
      <h2>Task Manager</h2>

      {/* Add Task */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button onClick={handleAddTask} style={{ padding: "0.5rem 1rem" }}>
          Add
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: task.completed ? "#e0ffe0" : "#fff",
            }}
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              style={{ marginRight: "0.5rem" }}
            />

            {/* Task Name or Edit Input */}
            {editId === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                style={{ flex: 1, marginRight: "0.5rem", padding: "0.25rem" }}
              />
            ) : (
              <span
                style={{
                  flex: 1,
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.name}
              </span>
            )}

            {/* Action Buttons */}
            {editId === task.id ? (
              <>
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => handleStartEdit(task.id, task.name)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks available. Add one above!</p>}
    </div>
  );
};

export default TaskManager;
