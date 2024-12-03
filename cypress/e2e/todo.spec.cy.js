describe('Todo App End-to-End Flow', () => {

  beforeEach(() => {
    // Visiting the todo app before each test
    cy.visit('http://localhost:3000'); // Replace with your app's URL
  });

  it('should add a new todo', () => {
    const newTodo = 'Test Todo';

    // Type in the input field and click add
    cy.get('[data-testid="todo-input"]') // Find the input field
      .type(newTodo); // Type the todo text
    
    cy.get('[data-testid="add-task-btn"]') // Find the Add Task button
      .click(); // Click the button to add todo

    // Assert the todo is in the list
    cy.contains(newTodo).should('exist'); // Check if the todo appears
  });

  it('should delete a todo', () => {
    const newTodo = 'Test Todo to Delete';

    // Add a todo first
    cy.get('[data-testid="todo-input"]')
      .type(newTodo); 
    
    cy.get('[data-testid="add-task-btn"]')
      .click();
    
    // Delete the todo by finding the delete button (assuming you have a delete button)
    cy.contains(newTodo)
      .parent() // Get the parent container of the todo (e.g., <div> or <li>)
      .find('delete-icon-class') // Assuming each todo has a delete button
      .click(); // Click the delete button

    // Assert the todo no longer exists
    cy.contains(newTodo).should('not.exist');
  });

  it('should filter todos by "All"', () => {
    // Add two todos
    cy.get('[data-testid="todo-input"]').type('Todo 1');
    cy.get('[data-testid="add-task-btn"]').click();
    
    cy.get('[data-testid="todo-input"]').type('Todo 2');
    cy.get('[data-testid="add-task-btn"]').click();

    // Click "All" filter button
    cy.get('[class="filter-btn"]').contains('All').click();

    // Assert that all todos are visible
    cy.contains('Todo 1').should('be.visible');
    cy.contains('Todo 2').should('be.visible');
  });

  it('should filter todos by "Completed"', () => {
    const newTodo = 'Todo to Mark Completed';
    
    // Add a todo
    cy.get('[data-testid="todo-input"]').type(newTodo);
    cy.get('[data-testid="add-task-btn"]').click();
    
    // Mark the todo as completed (assumes there's a checkbox or button for completion)
    cy.contains(newTodo)
      .parent() // Assuming the todo has a checkbox or completion button
      .find('[data-testid="completed-task-btn"]')
      .click(); // Simulating completing the task
    
    // Click "Completed" filter button
    cy.get('[class="filter-btn"]').contains(/^Completed$/).click();

    // Assert that the completed todo is visible
    cy.contains(newTodo).should('be.visible');
  });

  it('should filter todos by "Active"', () => {
    const newTodo = 'Active Todo';

    // Add a todo
    cy.get('[data-testid="todo-input"]').type(newTodo);
    cy.get('[data-testid="add-task-btn"]').click();

    // Click "Active" filter button
    cy.get('[class="filter-btn"]').contains(/^Active$/).click();

    // Assert that the active todo is visible
    cy.contains(newTodo).should('be.visible');

    // If a todo is marked as completed, ensure it doesn't show up in the "Active" filter
    cy.contains(newTodo)
      .parent()
      .find('[data-testid="complete-task-btn"]')
      .click();
    
    cy.get('[class="filter-btn"]').contains('/^Active$/').click();
    cy.contains(newTodo).should('not.exist');
  });

});

