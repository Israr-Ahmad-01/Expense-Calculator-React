import "./components/Expenses";
import "./App.css";
import { Expenses } from "./components/Expenses";

const App = () => {
  const expenses = [
    { title: "car Insurance", amount: 294.5, date: new Date(2021, 2, 28) },
    { title: "Toilet Paper", amount: 94.5, date: new Date(2022, 5, 20) },
    { title: "Books", amount: 24.5, date: new Date(2023, 4, 24) },
    
  ];

  return (
    <div>
      <h1>Expenses Calculator</h1>
      <Expenses title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></Expenses>
      <Expenses title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></Expenses>
      <Expenses title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></Expenses>

    </div>
  );
};

export default App;
