import React from 'react';

const ExpensesList = ({ items }) => {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {items.map((expense, index) => (
          <li key={index}>{expense.name}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
