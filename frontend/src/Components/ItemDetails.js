import React, { Component, useState } from 'react';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, FlexboxGrid, Divider, Dropdown } from 'rsuite'

export default function ItemDetails(props) {

    let dispatch = useDispatch()
    let user =useSelector(state => state.user)

    let [size, setSize] = useState(
     null
    )
    let params = useParams()
    let [item, setItem] = useState({
        name: '',
        sku_number:'',
        color:'',
        size_s_quantity:0,
        size_m_quantity:0,
        size_l_quantity:0,
        size_xl_quantity:0,
        description:'',
        image:'',
        price:0,
        category:''
    })


    // let itemObj = useSelector(state=>state.items.find(item=>item.id === params.id))
    // console.log(itemsState.items)

    useEffect(() => {
        fetch(`http://localhost:3000/items/${params.id}`)
        .then(resp => resp.json())
        .then(item => {
            console.log(item)
            setItem(item)
          })
        }, [])

    let createCartItem = (cartItem, size)=>{
        fetch('http://localhost:3000/cart_items',{
        credentials: 'include',
        method: "POST",
        headers:{
         "content-type": "application/json"
        },
         body: JSON.stringify({cartItem, size})
        })
        .then(r => r.json())
        .then((response) => {   
              
        console.log(response)
        dispatch({type:"ADD_ITEM", cartItems: response}) 
              // history.push('/')
              
        })
    }
          

    return(
        <div>
            <FlexboxGrid align="middle">
                <FlexboxGrid.Item colspan={12}>
                    <img src={item.image} style={{ width: '100%' }} />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={-10}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={10} align='left'>
                    <h3>{item.name}</h3>
                    <Divider />
                    <h4>Sku Number: {item.sku_number}</h4>
                    <h4>${item.price}</h4>
                    <h4>Color: {item.color}</h4>
                    <h4>Description: {item.description}</h4>
                    <Dropdown title= "Size">
                    {item.size_s_quantity > 0 ? 
                    <Dropdown.Item quantiy={item.size_s_quantity} onClick={()=> setSize("S")}>S</Dropdown.Item>: ''}
                    {item.size_m_quantity > 0 ? 
                    <Dropdown.Item quantiy={item.size_m_quantity} onClick={()=> setSize("M")}>M</Dropdown.Item>: ''}
                    {item.size_l_quantity > 0 ? 
                    <Dropdown.Item quantiy={item.size_l_quantity} onClick={()=> setSize("L")}>L</Dropdown.Item>: ''}
                    {item.size_xl_quantity > 0 ? 
                    <Dropdown.Item quatity= {item.size_xl_quantity} onClick={()=> setSize("XL")}>XL</Dropdown.Item>: ''}                    
                    </Dropdown>
                    <br />
                    {!user?
                    <Button appearance="primary" disabled > Login to Add To Cart</Button>
                    :
                    <Button appearance="primary" onClick={()=> createCartItem(item, size)}>Add To Cart</Button>
                    }
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}
