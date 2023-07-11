import React from "react";
import "./Expenses.css";
import Card from './UI/Card.js';

export const Expenses = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  return (
    <Card className="expenses">
      <h4>{expenseDate.toISOString()}</h4>
      <h5>{expenseTitle}</h5>
      <h5>${expenseAmount}</h5>
      <button className="update_button">update!</button>
    </Card>
  );
};
