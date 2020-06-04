import React, { Component } from 'react';
import logo from './logo.svg';
import { renderItems } from './Redux/Actions/renderItem'
import AllItemsContainer from './Components/AllItemsContainer'
import Homepage from './Components/Homepage'
import itemCard from './Components/ItemCard'
import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import  AboutPage   from './Components/AboutPage'


function App(props) {

  let dispatch = useDispatch()
  useEffect(()=>{
  fetch('http://localhost:3000/items')
  .then(resp => resp.json())
  .then(items => {
    console.log(items)
     dispatch(renderItems(items))
  })
}, [])

  return (
    <div className= 'App'>
      <BrowserRouter>
      <Switch>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/" component= {Homepage}/>
      <Route exact path="/items" component= {AllItemsContainer} />
      <Route exact path="/item" component= {itemCard} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
