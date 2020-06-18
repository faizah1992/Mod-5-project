import React, { Component, useState } from 'react';
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Button,Notification, Grid,Row,Col,FlexboxGrid,Carousel,Container, Divider, Dropdown,FormGroup, RadioGroup, Radio, Panel } from 'rsuite'
import Paragraph from './Paragraph'

export default function ItemDetails(props) {
    let history = useHistory()
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

        let open =()=>{
            Notification.open({
                title: 'ADDED!',
                description: <Paragraph width={320} rows={3} />
              });
        }

    let createCartItem = (cartItem, size)=>{
        open()
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
     
                    <img src={item.image} style={{ width: '100%', padding: "60px" }} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={-10}></FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={10} align='left'>
                        <Panel className= "details-panel" style={{overflow: "visible", padding:"-10px", align: "left"}}>
                        <h3 style={{backgroundColor: "white"}}>{item.name}</h3>   
                        <br></br>         
                        <h5>Sku Number: {item.sku_number}</h5>
                        <h5>${item.price}</h5>
                        <h5>Color: {item.color}</h5>
                        <h6>Description: {item.description}</h6>
                        <Dropdown title={size || "Size"} >
                        {item.size_s_quantity > 0 ? 
                        <Dropdown.Item  value={item.size_s_quantity} onSelect={()=> setSize("S")}>S</Dropdown.Item>: ''}
                        {item.size_m_quantity > 0 ? 
                        <Dropdown.Item value={item.size_m_quantity} onClick={()=> setSize("M")}>M</Dropdown.Item>: ''}
                        {item.size_l_quantity > 0 ? 
                        <Dropdown.Item value={item.size_l_quantity} onClick={()=> setSize("L")}>L</Dropdown.Item>: ''}
                        {item.size_xl_quantity > 0 ? 
                        <Dropdown.Item value= {item.size_xl_quantity} onClick={()=> setSize("XL")}>XL</Dropdown.Item>: ''}                    
                        </Dropdown>
                        <br />
                        {!user?
                        <Button appearance="ghost" disabled > Login to Add To Cart</Button>
                        :
                        <Button appearance="ghost" onClick={()=> createCartItem(item, size)}>Add To Cart</Button>
                        }
                    </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
        </div>
    )

}



{/* <Carousel  className="custom-slider-details-page"  vertical>
<img
src={item.image}
// height="500"
/>
<img
src="https://cutt.ly/DuhGbJU"
height="500"
/>
<img
   src="https://cutt.ly/xuhHi5X"
   height="500"
/>

</Carousel> */}

                    {/* <Dropdown title= "Size">
                    {item.size_s_quantity > 0 ? 
                    <Dropdown.Item quantiy={item.size_s_quantity} onClick={()=> setSize("S")}>S</Dropdown.Item>: ''}
                    {item.size_m_quantity > 0 ? 
                    <Dropdown.Item quantiy={item.size_m_quantity} onClick={()=> setSize("M")}>M</Dropdown.Item>: ''}
                    {item.size_l_quantity > 0 ? 
                    <Dropdown.Item quantiy={item.size_l_quantity} onClick={()=> setSize("L")}>L</Dropdown.Item>: ''}
                    {item.size_xl_quantity > 0 ? 
                    <Dropdown.Item quatity= {item.size_xl_quantity} onClick={()=> setSize("XL")}>XL</Dropdown.Item>: ''}                    
                    </Dropdown> */}

                    // <FormGroup controlId="Size">
                    // <RadioGroup name="Size" inline>
                    // {item.size_s_quantity > 0 ? 
                    // <Radio value={item.size_s_quantity} onClick={()=> setSize("S")}>S</Radio>:''}
                    // {item.size_m_quantity > 0 ? 
                    // <Radio value={item.size_m_quantity} onClick={()=> setSize("M")}>M</Radio>:''}
                    // {item.size_l_quantity > 0 ? 
                    // <Radio value={item.size_l_quantity} onClick={()=> setSize("L")}>L</Radio>:''}
                    // {item.size_xl_quantity > 0 ? 
                    // <Radio value={item.size_xl_quantity} onClick={()=> setSize("XL")}>XL</Radio>:''}
                    // </RadioGroup>
                    // </FormGroup>



