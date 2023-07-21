import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 432.15,
      date: new Date(12, 12, 2022),
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
      date: new Date(2022, 1, 12),
    },
  ];

  const addExpenseHandler=(expenses)=>{
    console.log("in app")
    console.log(expenses)

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
