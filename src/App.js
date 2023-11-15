
import React, { useState } from 'react';
import employeesData from './employeeData';
import EmployeeList from './EmployeeList';
import Filter from './Filter';

const App = () => {
  const [filter, setFilter] = useState('');

  const departments = [...new Set(employeesData.map((employee) => employee.department))];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredEmployees = filter
    ? employeesData.filter((employee) => employee.department === filter)
    : employeesData;

  return (
    <div>
      <h1>Employees</h1>
      <Filter departments={departments} handleFilterChange={handleFilterChange} />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default App;
