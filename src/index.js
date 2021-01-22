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
            return [action.payload]
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
            return [];
    }
}

const reduxStore = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        adminReducer,
        orderReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
