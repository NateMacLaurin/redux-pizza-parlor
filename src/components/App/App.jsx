import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import Admin from '../Admin/Admin.jsx';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const cartTotal = useSelector(store => store.totalReducer)

  useEffect(() => getPizzas(), [])

  const getPizzas = () => {
    axios
    .get('/api/pizza')
    .then((response) => {
      dispatch({ type: 'SET_PIZZA', payload: response.data})
    })
    .catch((err) => {
      alert('error in getPizzas')
      console.log(err)
    })
  }

  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <div className='cartTotal'>${cartTotal}</div>
      </header>
      <nav><Link to="/pizza">pizza---</Link><Link to="/order">order---</Link><Link to="/checkout">checkout---</Link><Link to="/admin">admin</Link></nav>
      {/*<img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>*/}
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
