import React, { Component, useState } from 'react';
import {connect, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom'
import logo from './logo.svg';
import KurtisContainer from './Components/KurtisContainer'
import CasualWearContainer from './Components/CasualWearContainer'
import LuxePretContainer from './Components/LuxePretContainer'
import EveningWearContainer from './Components/EveningWearContainer'
import ItemDetails from './Components/ItemDetails'
import Register from './Components/Register'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import itemCard from './Components/ItemCard'
import './App.css';
import { BrowserRouter, Route, Switch, useHistory, Router } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import  AboutPage   from './Components/AboutPage'
import NavBar from './Components/NavBar'
import Logout from './Components/Logout'
import Cart from './Components/Cart'
import Search from './Components/Search'
import Profile from './Components/Profile'
import PastOrders from './Components/PastOrders'
import Refund from './Components/Refund'


 function App(props) {

  let history =useHistory()
  let user = useSelector(state => state.user)
  let dispatch = useDispatch()

  useEffect(()=>{
  fetch('http://localhost:3000/items')
  .then(resp => resp.json())
  .then(items => {
    console.log(items)
     dispatch({type:"RENDER_ITEMS",items})
  })
}, [])

  useEffect(()=>{
  fetch('http://localhost:3000/getuser', {
    credentials: 'include'
  })
  .then(resp => resp.json())
  .then(response=> {
    console.log(response)
    if (response.error == undefined){
     dispatch({type:"SAVE_USER", user: response.user})
     dispatch({type: "CURRENT_USER_CART", cartItems: response.cart_items })
    }
  })
}, [])


  return (
    <div className= 'App'>
      <BrowserRouter>
      <Header />
      <Switch> 
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/" component= {()=><Homepage/>}/>
      <Route exact path="/kurtis" component= {KurtisContainer} />
      <Route exact path="/casual-wear" component= {CasualWearContainer} />
      <Route exact path="/luxe-pret" component= {LuxePretContainer} />
      <Route exact path="/evening-wear" component= {EveningWearContainer} />
      <Route exact path="/items/:id" component={ItemDetails}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/pastorders" component={PastOrders}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/return-refund-policy" component={Refund}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}


export default App;
    

 // fetch('http://localhost:3000/cart_items',{
    //   credentials: 'include'
    // })
    // .then(resp => resp.json())
    // .then(items =>{
      // console.log(user)
    //   // let currentItems= items.filter(ct => ct.cart.id === user.cart.id)
    //   // console.log(currentItems)
    // })