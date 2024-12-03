import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoWrapper } from './TodoWrapper';

describe('TodoWrapper Component', () => {
  it('renders the heading correctly', () => {
    render(<TodoWrapper />);
    expect(screen.getByText(/Get Things Done !/i)).toBeInTheDocument();
  });

  it('renders the TodoForm component', () => {
    render(<TodoWrapper />);
    expect(screen.getByPlaceholderText(/what is the task today\?/i)).toBeInTheDocument();

  });
});

