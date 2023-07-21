import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card.js";

export const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated");
  // };
  return (
    <Card className="expenses">
      <ExpenseDate date={props.date} />
      <h5>{props.title}</h5>
      <h5>${props.amount}</h5>
      {/* <button className="update_button" onClick={clickHandler}>
        update!
      </button> */}
    </Card>
  );
};
