import React from "react";
import { ExpenseItem } from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import './ExpenseList.css';

export const ExpenseList = (props) => {

  return (
    <div>
      {props.items.length === 0 ? (
        <Card><h2>Content Not Found</h2></Card>
      ) : (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}

      {/* props.items was initial here in map below but after filtering the year in arry we use filteredExpenses */}
      {}
      {/* <ExpenseItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
    ></ExpenseItem> */}
    </div>
  );
};
