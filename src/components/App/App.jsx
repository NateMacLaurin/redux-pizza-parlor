import React from 'react';
import axios from 'axios';
import './App.css';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch()

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
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
