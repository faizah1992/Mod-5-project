import React, { Component } from 'react';
import logo from './logo.svg';
import { renderItems } from './Redux/Actions/renderItem'
import {saveUserToState} from './Redux/Actions/userActions'
import KurtisContainer from './Components/KurtisContainer'
import CasualWearContainer from './Components/CasualWearContainer'
import LuxePretContainer from './Components/LuxePretContainer'
import EveningWearContainer from './Components/EveningWearContainer'
import ItemDetails from './Components/ItemDetails'
import Register from './Components/Register'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Components/Homepage'
import itemCard from './Components/ItemCard'
import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import  AboutPage   from './Components/AboutPage'
import NavBar from './Components/NavBar'


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
      {/* <NavBar/> */}
      <Header/>
      <Switch> 
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/" component= {()=><Homepage/>}/>
      <Route exact path="/kurtis" component= {KurtisContainer} />
      <Route exact path="/casual-wear" component= {CasualWearContainer} />
      <Route exact path="/luxe-pret" component= {LuxePretContainer} />
      <Route exact path="/evening-wear" component= {EveningWearContainer} />
      <Route exact path="/items/:id" component={ItemDetails}/>
      <Route exact path="/register" component={Register}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
