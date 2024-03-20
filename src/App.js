import React, { useState } from 'react';
import './App.css';
import ExpensesList from './components/ExpensesList';
import AddExpenseForm from './components/AddExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="App">
      <h2>Money Tracker App</h2>
      <AddExpenseForm onAddExpense={addExpenseHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
}

export default App;
