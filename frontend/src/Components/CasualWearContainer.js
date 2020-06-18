import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import  ItemCard  from './ItemCard'
import { Row, Form, FormGroup, FormControl, Divider, Breadcrumb } from 'rsuite';
import {Link} from 'react-router-dom'

export default function CasualWearContainer() {

    let itemsState = useSelector(state=>state.items)
    // console.log(itemsState)
    let filteredCasuals = itemsState.filter(item => item.category === "Casual-Wear" ) 
    // console.log(filteredCasuals)
    
  
      return(
          <div>
              <Breadcrumb>
              <Link to={'/'}><Breadcrumb.Item >Home</Breadcrumb.Item></Link>
              <Breadcrumb.Item active>Casualwear</Breadcrumb.Item>
              </Breadcrumb>
            <h3 style={{backgroundColor: "white"}}>Casual-Wear</h3>
            <br></br>
           <Row>
             {filteredCasuals.map(item => <ItemCard item={item} key={item.id}/>)}
           </Row>
          </div>
      )
    }