import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import {Segment} from 'semantic-ui-react'
import {Button, Jumbotron, Container,Card } from 'react-bootstrap'


export default function OrderProcessing() {
    let orders = useSelector(state => state.orders)
    console.log(orders)
    const logo = require("../fad_logo.png")
    // let orderCard = orders ? orders.map(order => <OrderCard order={order}/>): null
    return(
        
        <div>
            <div className="container">
        <Jumbotron className="thankyoujumbo">
            <h1></h1>
            <p className="thankyounote">
            "Thank you for shopping with us. Your order is being processed."
            <br/>
            <img src ={logo} className="thankyouimg"></img>
            <br/>
            </p>
        </Jumbotron>
        </div>
        </div>
    )
}