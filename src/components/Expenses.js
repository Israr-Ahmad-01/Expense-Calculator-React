import React from "react";
import "./Expenses.css";
import Card from './UI/Card.js';

export const Expenses = (props) => {

  return (
    <Card className="expenses">
      {/* date component is not working so i leave it for future*/}
      <h4>{props.date.toISOString()}</h4>
      <h5>{props.title}</h5>
      <h5>${props.amount}</h5>
      <button className="update_button">update!</button>
    </Card>
  );
};
