import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}
        // });
    };

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value}
        // });
    };

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value}
        // });
    };

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        setIsEditing(false);
    };

    function addNewExpenseHandler() {
        setIsEditing(true);
    };

    function cancelNewExpenseHandler() {
        setIsEditing(false);
    };

    return <form onSubmit={submitHandler}>
        {isEditing === false ?
            <div className='new-expense__actions-start'>
                <button onClick={addNewExpenseHandler}>Add New Expense</button>
            </div>
            :
            <div>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type='text'
                            value={enteredTitle}
                            onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input
                            type='number'
                            min='0.01'
                            step='0.01'
                            value={enteredAmount}
                            onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input
                            type='date'
                            min="2019-01-01"
                            max="2022-12-31"
                            value={enteredDate}
                            onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={cancelNewExpenseHandler}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        }
    </form>
};

export default ExpenseForm;

// Whenever you listen to a OnChange input, it is always be a string;
// Whenever you update a state that depends of a previous state, you
// should create a function that takes the previous state as a argument,
// because it is going to use the latest state every time;