import React, { Component, useState } from 'react';
import { FlexboxGrid, Panel, Divider ,Input,Container, Sidebar, ButtonToolbar, IconButton,Grid, Col, Row,Icon, Button } from 'rsuite'
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory } from 'react-router-dom';

export default function CheckOut() {
    let history = useHistory()
    let cartItems = useSelector(state=> state.cartItems)
    let user = useSelector(state => state.user)
    let dispatch = useDispatch()
    console.log(cartItems)


    let cartAmount=()=>{
        
        if(cartItems && cartItems.length > 0){
            let price = cartItems.map(uc => uc.item.price * uc.quantity)
            //   console.log(price);
            let totalPrice = price.reduce((total, num) => total + num)
            let result = totalPrice + 10
                return result
        }
    }
  

    let formatAddress =(address) => {
        let shippingAddress = address["shipping_address_line1"] + ", " + address["shipping_address_city"] + ", "
        + address["shipping_address_state"] +  " " + address["shipping_address_zip"]
        return shippingAddress
    }



    let handleCheckout = (formattedAdress) =>{
        fetch('http://localhost:3000/orders',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user_id: user.id,
                total: totalAmount,
                address: formattedAdress
            })
        })
        .then(r => r.json())
        .then((orderdata)=>{
            console.log(orderdata)
            dispatch({type: "ADD_ORDER", orders: orderdata})
            dispatch({type: "CLEAR_CART"})
            history.push('/order')
        })
    }



    let handleToken = (token,address)=>{
        console.log(token, address)
        let formattedAdress = formatAddress(address)
        const charge = {
            token: token.id
        };
        fetch('http://localhost:3000/charges',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                charge: charge,
                price: cartAmount()*100
            })
        })
        .then(res => res.json())
        .then((data)=>{
            handleCheckout(formattedAdress)
        })    
    }



    let shipping = 10
    let totalAmount = cartAmount()
    let totalPrice = totalAmount - 10
    let tax = (totalPrice * .0825)+totalPrice


    return(
        <div>
            <Container>
                <Panel   className="total-card" shaded bordered>
                    <h3>Order Summary</h3>
                <Divider/>
            <table className="table">
            <tr>
                <td className="subtotal">SubTotal</td>
                {cartItems && cartItems.length > 0 ?  <td>${totalPrice}</td> : <td>${0}</td>}               
           </tr>
            <tr>
                <td>Shipping</td>
                {cartItems && cartItems.length > 0 ?  <td>${shipping}</td> : <td>${0}</td>}
            </tr>
            <tr>
                <td>With Tax</td>
                {cartItems && cartItems.length > 0 ?  <td>${tax}</td> : <td>${0}</td>}  
            </tr>
            <tr> 
                <td>Total</td>
                <td>${totalAmount}</td>
            </tr>
            <hr/>
            
            <StripeCheckout
            disabled = {false}
            className="checkout-Button"
            stripeKey= {process.env.REACT_APP_STRIPE_API_KEY}
            billingAddress
            shippingAddress
            token={handleToken}
            />
            </table>
                </Panel>
        </Container>
        </div>
    )
}