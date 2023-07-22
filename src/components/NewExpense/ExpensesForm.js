import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // FORM SUBMIT FUNCTION
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toLocaleString(),
    };
    props.onSaveExpenseData(expenseData); //lifting this data to NewExpense
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* TITLE */}
        <div className="two-entity-block">
          <div className="new-expense__control-title">
            <label>Title</label>

            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          {/* AMOUNT */}
          <div className="new-expense__control-amount">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        {/* DATE */}
        <div className="new-expense__control-date">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        {/* BUTTON */}
        <div className="new-expense__control-button">
          <button type="Submit">Add Expense</button>
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
