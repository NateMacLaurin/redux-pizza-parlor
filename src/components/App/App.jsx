import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList.jsx';
import CustomerForm from '../PizzaList/CustomerForm.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import Admin from '../Admin/Admin.jsx';

function App() {

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Route path="/" exact component={PizzaList} />
      <Route path="/pizza" component={PizzaList} />
      <Route path="/order" component={CustomerForm} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/admin" component={Admin} />
    </div>
    </Router>
  );
}

export default App;
