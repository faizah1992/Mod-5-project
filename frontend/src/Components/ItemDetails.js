import React, { Component, useState } from 'react';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, FlexboxGrid, Divider, Dropdown } from 'rsuite'

export default function ItemDetails(props) {

    let dispatch = useDispatch()
    let [cart, setCart] = useState([])
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

    let [size, setSize] = useState(
        null
    )
    // let itemsState = useSelector(state=>state.items)
    // console.log(itemsState.items)

    useEffect(() => {
        fetch(`http://localhost:3000/items/${params.id}`)
        .then(resp => resp.json())
        .then(item => {
            console.log(item)
            setItem(item)
          })
        }, [])

        const handleAddtoCart = (e) => {
            let newCart = cart.concat([item,size])
            setCart(newCart)        
        }
    return(
        <div>
            <FlexboxGrid align="middle">
                <FlexboxGrid.Item colspan={12}>
                    <img src={item.image} style={{ width: '100%' }} />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={2}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={10} align='center'>
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
                    <Button appearance="primary" onClick={()=> dispatch({type: "ADD_ITEM", cartItems: {item, size}}, {handleAddtoCart})}>Add To Cart</Button>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}
