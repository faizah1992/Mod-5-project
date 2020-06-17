import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ItemCard from './ItemCard'
import CartItems from './CartItems'
import CheckOut from './CheckOut'
import { useParams, useHistory } from 'react-router-dom'
import { FlexboxGrid, Panel, Divider, Container, Sidebar, ButtonToolbar, IconButton,Grid, Col, Row,Icon,Button } from 'rsuite'

export default function Header(props) {
 let cartItems = useSelector(state => state.cartItems)
 console.log(cartItems)
 let history = useHistory()
 let cartCount = cartItems ? cartItems.length :null
//  console.log(cartCount)
 let productInfo = cartItems? cartItems.map(cartItem => <CartItems cartItem={cartItem}/>) : null
 const emptyCart = require("../empty-cart.png")
    return(
    
    
    <div style={{marginBottom: "100px"}}>
      <Container className="cart-fullpage">
        
         <Grid fluid>
            <Row className="main-cart-grid">
                <Col sm={12}>
                {cartCount > 0 ? productInfo : <img className="empty_cart" src= {emptyCart} alt = "sorry your cart is empty"/>}
               
                </Col>
                
                <Col>
                <CheckOut/>
                </Col>
            </Row>
          </Grid>
          
      </Container>
    </div>
   
    )
}






 {/* <Panel shaded bordered bodyFill onClick={() => history.push(`/items/${props.cartItem.item.id}`)} style={{ display: 'inline-block', width: 240 }}>
                <img src={props.cartItems.item.image} height="240" />
                <Panel header={props.cartItem.item.name}>
                <p>
                <small>${props.cartItem.item.price}</small>
                </p>
                 </Panel>
                </Panel> */}