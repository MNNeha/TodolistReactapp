import './App.css';
import { TodoWrapper } from './TodoWrapper';
import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // Initially empty, will be fetched from the backend
  const [filter, setFilter] = useState("all"); // 'all', 'completed', 'active'

  // Fetch todos from the backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/todos');
        const data = await response.json();
        setTasks(data); // Assuming data is an array of tasks
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
    fetchTodos();
  }, []);

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  // Toggle completion status of a todo
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks based on the filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="App">
      <h1>Todo List</h1>

      {/* Buttons to set the filter */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("active")}>Active</button>
      </div>

      {/* TodoWrapper Component */}
      <TodoWrapper
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
