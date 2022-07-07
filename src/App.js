import React,{ useState } from 'react';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from './component/Expenses/Expenses';
const DUMMY_EXPENSES = [
  { id: 'e1', title: 'toilet paper', amount: 23, date: new Date(2022, 6, 20), },
  { id: 'e2', title: 'car insurance', amount: 230.67, date: new Date(2022, 6, 20), },
  { id: 'e3', title: 'book', amount: 67, date: new Date(2022, 6, 20), },
  { id: 'e4', title: 'new desk(wooden)', amount: 450, date: new Date(2022, 6, 20), },

];
function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
    setExpenses((precExpenses) => {
      return[expense,...precExpenses];
    });
  };
  //return React.createElement('div',{},React.createElement('h2',{},"lets starts"),React.createElement(Expenses,{items:expense}));
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>

    </div>
  );
}

export default App;
