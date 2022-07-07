import React,{ useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHaldler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
   
    return  (
        <div>
        <Card className='expenses'>
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHaldler}></ExpensesFilter>
       <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
       <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
    );

}
export default Expenses;
//const function_name = () => {} for function