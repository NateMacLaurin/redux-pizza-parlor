import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZA':
            return action.payload;
        default:
            return state;
    }
}

const customerReducer = (state = [], action) => {
    switch (action.type) {
        case 'CUSTOMER_INFO':
            return [action.payload] // changed to only include the last info entered.
        case 'CHECKOUT':
            return [] // changed to only include the last info entered.
        default:
            return state;
    }
}

const adminReducer = (state = [], action) => {
    return state;
}

//payload is the pizza object, logic is add/remove
const orderReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_ORDER':
            return [...state, action.payload];
        case 'REM_FROM_ORDER':
            //filter function
            return state.filter(pizza => pizza.id !== action.payload.id);
        case 'CHECKOUT':
            return [];
        default:
            return state; //changed from return [] because it emptied the array every time customer info was added.
    }
}

const totalReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADD_TOTAL':
            return state + action.payload;
        case 'REM_TOTAL':
            return state - action.payload;
        case 'CHECKOUT':
            return 0;
        case 'CHECKOUT_TOTAL':
            return action.payload;
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        adminReducer,
        orderReducer,
        totalReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
