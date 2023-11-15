
import React from 'react';
import './Filter.css';

const Filter = ({ departments, handleFilterChange }) => {
  return (
    <div className="filter">
      <h3>Filter by Department:</h3>
      <select onChange={handleFilterChange}>
        <option value="">All Departments</option>
        {departments.map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
