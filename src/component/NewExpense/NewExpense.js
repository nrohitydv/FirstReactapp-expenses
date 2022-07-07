import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEdditing, setIsEdditing] =useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEdditing(false);
    };
    const startEdittingHaldler = () => {
        setIsEdditing(true);
    };
    const stopEdittingHandler = () => {
        isEdditing(false);
    };
    return <div className='new-expense'>
        {!isEdditing &&<button onClick={startEdittingHaldler}>Add New Expense</button>}
        {isEdditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdittingHandler}></ExpenseForm>}
         </div>

};
export default NewExpense;