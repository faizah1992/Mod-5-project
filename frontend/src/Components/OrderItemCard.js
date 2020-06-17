import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import {Grid, Image} from 'semantic-ui-react'
import { Panel } from 'rsuite';

export default function OrderItemCard() {
    let order = useSelector(state=>state.orderItem)
    console.log(order)
    let {address, created_at} = order
    let date = created_at.split("T")[0]

    let {name, image, price} = order.orderItem
    return(
        <div>
        <Panel shaded bordered>
        <img className="orderItem" src={image} />
        <p> Style: {name}</p>
        <p> Shipping Address: {address}</p>
        <p> Order placed on: {date} </p>
        <p> price: ${price} </p>
        </Panel>
        </div>
    )
}