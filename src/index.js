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
            return [...state, action.payload]
        default:
            return state;
    }
}

const adminReducer = (state = [], action) => {
    return state;
}

const reduxStore = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        adminReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
