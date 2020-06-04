import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { useHistory} from 'react-router-dom';
import { renderItems } from '../Redux/Actions/renderItem'
import  ItemCard  from './ItemCard'
import { Row, Form, FormGroup, FormControl, Divider } from 'rsuite';

export default function AllItemsContainer() {

let itemsState = useSelector(state=>state.items)
console.log(itemsState.items)
  return(

      <div>
        <h1>Kurtis</h1>
        <Divider />
      <Row>
         {itemsState.items.map(item => <ItemCard item={item} key={item.id}/>)}
       </Row>
      </div>
  )
}