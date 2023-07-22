import React, {useState} from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpenses";

const App = () => {
  const Dummy_Expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 432.15,
      date: new Date(2020, 11, 12),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 32.15,
      date: new Date(2022, 11, 12),
    },
    {
      id: "e3",
      title: "Travelling",
      amount: 432.15,
      date: new Date(2021, 1, 12),
    },
  ];
const [expenses, setExpenses]=useState(Dummy_Expenses);

  const addExpenseHandler=(expenses)=>{
    setExpenses((prevExpenses)=>{
      return [expenses, ...prevExpenses]
    });

  }
  return (
    <>
      <h1>Expenses Calculator</h1>
      <NewExpense onAddExpenses={addExpenseHandler}/>
      <Expenses items={expenses} />
    </>
  );
};

export default App;
