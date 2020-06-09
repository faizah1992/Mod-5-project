import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import  ItemCard  from './ItemCard'
import { Row, Form, FormGroup, FormControl, Divider } from 'rsuite';

export default function EveningWearContainer() {

    let itemsState = useSelector(state=>state.items)
    // console.log(itemsState.items)
    let filteredEveningWear = itemsState.filter(item => item.category === "Evening-Wear" ) 
    // console.log(filteredEveningWear)
    
  
      return(
          <div>
            <h1>Evening-Wear</h1>
            <Divider />
           <Row>
             {filteredEveningWear.map(item => <ItemCard item={item} key={item.id}/>)}
           </Row>
          </div>
      )
    }