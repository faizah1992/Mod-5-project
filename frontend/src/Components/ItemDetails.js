import React, { Component, useState } from 'react';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, FlexboxGrid, Divider } from 'rsuite'

export default function ItemDetails(props) {

    let dispatch = useDispatch()
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

        console.log("itemdetail")
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
                    <h4>S {item.size_s_quantity}</h4>
                    <h4>M: {item.size_m_quantity}</h4>
                    <h4>L: {item.size_l_quantity}</h4>
                    <h4>XL: {item.size_xl_quantity}</h4>
                    <h4>Description: {item.description}</h4>
                    <br />
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}
