import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { useHistory} from 'react-router-dom';
import  ItemCard  from './ItemCard'
import { Row, Form, FormGroup, FormControl, Divider } from 'rsuite';

export default function KurtisContainer() {

let itemsState = useSelector(state=>state.items)
// console.log(itemsState.items)
let filteredKurtis = itemsState.items.filter(item => item.category === "Kurtis" ) 
// console.log(filteredKurtis)


  return(
      <div>
        <h1>Kurtis</h1>
       
       <Row>
         {filteredKurtis.map(item => <ItemCard item={item} key={item.id}/>)}
       </Row>
      </div>
  )
}