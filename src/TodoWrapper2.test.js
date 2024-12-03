import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoWrapper } from './TodoWrapper';

describe('Edge Cases', () => {
  it('does not add an empty todo', () => {
    render(<TodoWrapper />);

    const addButton = screen.getByText(/Add Task/i);
    fireEvent.click(addButton);

    expect(screen.queryByText(/Add a new task/i)).not.toBeInTheDocument();
  });
});
