import React, { Component, useState } from 'react';
import { FlexboxGrid, Panel, Divider ,Input,Container, Sidebar, ButtonToolbar, IconButton,Grid, Col, Row,Icon, Button } from 'rsuite'
import { useSelector } from 'react-redux';

export default function CheckOut() {
    let cartItems = useSelector(state=> state.cartItems)
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
          let totalAmount = cartAmount()
          let totalPrice = totalAmount - 10

    return(
        <div>
            <Container>
                <Panel   className="total-card" shaded bordered>
                    <h3>Order Summary</h3>
                <Divider/>
            <table className="table">
            <tr>
                <td>SubTotal</td>
                <td>${totalPrice}</td>
            </tr>
            <tr>
                <td>Shipping</td>
                <td>$10</td>
            </tr>
            <tr> 
                <td>Total</td>
                <td>${totalAmount}</td>
            </tr>
            </table>
            <ButtonToolbar>
            <Button appearance="ghost" active>
                    Checkout
                </Button>
            </ButtonToolbar>
                </Panel>
            </Container>
        </div>
    )
}