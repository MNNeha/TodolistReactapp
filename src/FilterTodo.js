import React from 'react';

// This component accepts a function to update the filter state
export const FilterTodo = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
    </div>
  );
};
