import React ,{useState} from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";

uuidv4();


export const TodoWrapper = () => {
   const [todos,setTodos] = useState([])
   const [filter, setFilter] = useState("");

    const addTodo = todo => {
        setTodos([...todos,{id: uuidv4(), task: todo, completed:false, isEditing: false}])
        console.log(todos) 
    }
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  // Filter todos based on filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true; // 'all' case
  });
  
  return (
    
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      
      <TodoForm addTodo={addTodo} />
       {/* Filter Buttons */}
       <div style={{ margin: "1rem 0" }}>
        <button
          className="filter-btn"
          onClick={() => setFilter("all")}
          style={{ backgroundColor: filter === "all" ? "#c5aeff" : "#8758ff" }}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => setFilter("completed")}
          style={{
            backgroundColor: filter === "completed" ? "#c5aeff" : "#8758ff",
          }}
        >
          Completed
        </button>
        <button
          className="filter-btn"
          onClick={() => setFilter("active")}
          style={{ backgroundColor: filter === "active" ? "#c5aeff" : "#8758ff" }}
        >
          Active
        </button>
      </div>
      {/* display todos */}
      {filteredTodos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
    );
};

