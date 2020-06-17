import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import OrderItemCard from './OrderItemCard'
import { Panel } from 'rsuite'


export default function OrderCard(props) {

    // let order = useSelector(state=> state.orders)
    // console.log(props.order)
    let date = props.order.created_at.split("T")[0]
    let orderImgs = props.order.items.map(item =>  <div>
        <img  className="orderItemImage" src={item.image}/>
        <p>Name: {item.name}</p>
        Quantiy: {props.order.order_items.find(orderItem => orderItem.item_id == item.id).quantity}
        </div>)
    
    // let orderItemCard = props.order.order_items.map(orderItem => order ={order} orderIem={orderItem} )
    return(
    <div className="order-card">
        <Panel bordered>
        Order Id: {props.order.id}
        {orderImgs}
        Shipping Address: {props.order.address}
        <br/>
        Order placed on: {date} 
        <br/>
        price: ${props.order.total} 
       </Panel>
    </div>
    )
}