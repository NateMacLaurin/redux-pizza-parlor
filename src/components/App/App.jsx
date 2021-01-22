import React from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import Admin from '../Admin/Admin.jsx';
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

function App() {

  //const [totalPrice, setTotalPrice] = useState(0);
  
  const dispatch = useDispatch()
  const cart = useSelector(store => store.orderReducer)
  const price = useSelector(store => store.totalReducer)

 /* const getCartTotal = () => {
    let currentPrice = 0;
      for(let pizza of cart){
        currentPrice += Number(pizza.price);
      }
      console.log('currentPrice:', currentPrice);
    setTotalPrice(currentPrice);
  }*/

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
        <div className='cartTotal'>${price}</div>
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
