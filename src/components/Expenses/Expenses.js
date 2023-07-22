import React, { useState } from "react";
import { ExpenseList } from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./ExpenseItem.css";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpenseList items={filteredExpense}/>
    
    </div>
  );
};
