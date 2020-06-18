import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import  ItemCard  from './ItemCard'
import { Row, Form, FormGroup, FormControl, Divider,Breadcrumb } from 'rsuite';
import {Link} from 'react-router-dom'

export default function EveningWearContainer() {

    let itemsState = useSelector(state=>state.items)
    // console.log(itemsState.items)
    let filteredEveningWear = itemsState.filter(item => item.category === "Evening-Wear" ) 
    // console.log(filteredEveningWear)
    
  
      return(
          <div>
              <Breadcrumb>
              <Link to={'/'}><Breadcrumb.Item >Home</Breadcrumb.Item></Link>
              <Breadcrumb.Item active>Evening-Wear</Breadcrumb.Item>
              </Breadcrumb>
            <h3 style={{ backgroundColor: "white"}}>Evening-Wear</h3>
            <br></br>
            
           <Row>
             {filteredEveningWear.map(item => <ItemCard item={item} key={item.id}/>)}
           </Row>
          </div>
      )
    }