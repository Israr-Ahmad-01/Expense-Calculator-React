import "./components/Expenses"
import './App.css';
import { Expenses } from "./components/Expenses";

function App() {
  return (
    <div>
      <h2 className="text-warning">Expenses Calculator</h2>
      <Expenses></Expenses>
    </div>
  );
}

export default App;
