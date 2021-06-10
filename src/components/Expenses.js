import React, { useState }  from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return(
        <div>
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            {
			props.expenses.map((expense) => {
				return <ExpenseItem expense={expense} />
			})
		}
        </div>
    );
}

export default Expenses;