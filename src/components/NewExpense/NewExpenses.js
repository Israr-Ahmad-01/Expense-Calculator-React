import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpensesForm";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpenses(expenseData);
    setIsEditing(false);
  };
  const[isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
setIsEditing(true);
  };
  const stopEditingHandler=()=>{
setIsEditing(false);
  };
  return (
    <div className="new-expense">
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
