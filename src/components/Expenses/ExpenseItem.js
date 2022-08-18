import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>
                        <h2>${props.amount}</h2>
                    </div>
                </div>

            </Card>
        </li>
    )
}

export default ExpenseItem;

// You can't use a Component as wrapper to any kind of component,
// unless you give the children props to it;
// All the Events listeners "on.." receives a function;
// On this example, if you put a () after the function, it's gonna be
// called and the code is read;