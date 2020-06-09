import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import  ItemCard  from './ItemCard'
import { Row, Form, FormGroup, FormControl, Divider } from 'rsuite';

export default function LuxePretContainer() {

    let itemsState = useSelector(state=>state.items)
    // console.log(itemsState.items)
    let filteredLuxe = itemsState.filter(item => item.category === "Luxe-Pret" ) 
    // console.log(filteredLuxe)
    

      return(
          <div>
            <h1>Luxe-Pret</h1>
            <Divider />
           <Row>
             {filteredLuxe.map(item => <ItemCard item={item} key={item.id}/>)}
           </Row>
          </div>
      )
    }