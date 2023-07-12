import React from 'react';
import "./ExpensesDate.css"; 

const ExpenseDate=(props)=>{
const month = props.date.toLocaleString('en-US', {month:'long'});
const day = props.date.toLocaleString('en-US', {day: '2-digit'});
const year = props.date.getFullYear();
    return(
    <div className="expense-item_date">
           <div className="expense-item_month">{month}</div>
           <div className="expense-item_day">{day}</div>
           <div className="expense-item_year">{year}</div>
    </div>
    );
}

export default ExpenseDate;