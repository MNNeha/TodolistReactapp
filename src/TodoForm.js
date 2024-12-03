import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            // Add todo
            addTodo(value);
            // Clear form after submission
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="What is the task today?"
                data-testid="todo-input"
            />
            <button type="submit" data-testid="add-task-btn">Add Task</button>
        </form>
    );
};
