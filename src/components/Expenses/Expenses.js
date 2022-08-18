import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear
    );
    
    function getYearHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    onYearSelection={getYearHandler}
                    selected={filteredYear}
                />

                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>

            </Card>
        </div>
    )
}

export default Expenses;

// Como props não foi desestruturado, precisou ser chamado assim e,
// em seguida, chamar qual propriedade, que é o array
// you can use jsx structures when declaring variables. They're not
//restricted to return();