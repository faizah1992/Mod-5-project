import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import  ItemCard  from './ItemCard'
import { Row, Form, FormGroup, FormControl, Divider } from 'rsuite';

export default function CasualWearContainer() {

    let itemsState = useSelector(state=>state.items)
    // console.log(itemsState)
    let filteredCasuals = itemsState.filter(item => item.category === "Casual-Wear" ) 
    // console.log(filteredCasuals)
    
  
      return(
          <div>
            <h1>Casual-Wear</h1>
           <Row>
             {filteredCasuals.map(item => <ItemCard item={item} key={item.id}/>)}
           </Row>
          </div>
      )
    }