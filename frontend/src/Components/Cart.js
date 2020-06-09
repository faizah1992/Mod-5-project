import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ItemCard from './ItemCard'

export default function Header(props) {
 let cartitems = useSelector(state => state.cartItems)

    return(
    
    <div>
        {cartitems.map(cartItem => <ItemCard item={cartItem.item} key={cartItem.item.id}/>)}
    </div>
   
    )
}
