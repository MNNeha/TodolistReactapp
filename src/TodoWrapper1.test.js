import { render, screen, fireEvent } from "@testing-library/react";
import TodoWrapper from "./TodoWrapper";

describe("TodoWrapper State Updates", () => {
  it("adds a new todo", () => {
    render(<TodoWrapper />);
    
    // Use the data-testid to target the input field
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-task-btn");

    // Add a new todo
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    // Verify the new todo is added
    expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
  });

  it("toggles a todo's completion status", () => {
    render(<TodoWrapper />);
    
    // Add a todo
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-task-btn");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    // Toggle completion
    const todo = screen.getByText(/Test Todo/i);
    fireEvent.click(todo);

    // Check if the todo has the completed class
    expect(todo).toHaveClass("completed");
  });

  it("deletes a todo", () => {
    render(<TodoWrapper />);
    
    // Add a todo
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-task-btn");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    // Delete the todo
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    // Verify the todo is deleted
    expect(screen.queryByText(/Test Todo/i)).not.toBeInTheDocument();
  });
});
