import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
// import {Form, Input, Segment, Image, Button, Grid, Item, Icon, Header} from 'semantic-ui-react'
import { FlexboxGrid, Panel, Divider ,Input,Container, Sidebar, ButtonToolbar, IconButton,Grid, Col, Row,Icon, Button } from 'rsuite'
import { useParams, useHistory } from 'react-router-dom'




export default function CartItems(props) {
   console.log(props)
    let history = useHistory()
    let cartItems = useSelector(state=>state.cartItems)
    let dispatch = useDispatch()
    // console.log(props.cartItem)


    let handleDelete =()=>{
    fetch(`http://localhost:3000/cart_items/${props.cartItem.id}`, {
      method : 'DELETE',
      headers: {
        "content-type": "application/json"
      }
    })
        let filteredCart = cartItems.filter(ct => ct.id !== props.cartItem.id)
        dispatch({type: "REMOVE_ITEM", cartItems: filteredCart })
    }



    let handleQuantity = (cartItem, quantity)=>{
      if (quantity < 0){
        quantity = 0
      }
       console.log(quantity)
        fetch(`http://localhost:3000/cart_items/${cartItem.id}`,{
        credentials: 'include',
        method: "PATCH",
        headers:{
         "content-type": "application/json"
        },
         body: JSON.stringify({cartItem, quantity})
        })
        .then(r => r.json())
        .then((response) => {   
        console.log(response) 
          dispatch({type:"UPDATE_ITEM", cartItem: response}) 
        })
    }
    // debugger
    let { name, price, image, color} = props.cartItem.item
    let{size, quantity}= props.cartItem

    return(
       
        <div >
        <Col md={18} sm={2}>
        <Panel shaded  style={{verticalAlign: 'middle', height: '460px'}} align='center'>
        <img src={image} style={{ display: 'inline-block', width: '80%'}} />
        <Divider/>
        {name}<Divider vertical/>{size} <Divider vertical/>${price}
        <Divider />
        <IconButton icon={<Icon icon="plus" />} circle size="lg" onClick={()=>handleQuantity(props.cartItem,quantity + 1)} />
        {quantity}
        <IconButton icon={<Icon icon="minus" />} circle size="lg"onClick={()=>handleQuantity(props.cartItem,quantity - 1)}/>
        <Divider vertical/>
        <IconButton icon={<Icon icon="trash2" />} circle size="lg" onClick={()=>handleDelete()}/>
        </Panel> 
        </Col> 
        </div>  
    
    )
}


    
