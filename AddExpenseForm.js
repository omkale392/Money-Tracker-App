import React, { useState } from 'react';

const AddExpenseForm = ({ onAddExpense }) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: enteredName,
      amount: +enteredAmount
    };
    onAddExpense(expenseData);
    setEnteredName('');
    setEnteredAmount('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
