import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Row, Form, FormGroup, FormControl, Divider,Breadcrumb} from 'rsuite';
import {Link} from 'react-router-dom'
import  ItemCard  from './ItemCard'


export default function NewArrivals() {

    let itemsState = useSelector(state=>state.items)
    console.log(itemsState)
    // let today = new Date()
    // let date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // console.log(date1)
    // let newArrivals = []
    // itemsState.forEach(item=> {
    //     let date2 = item.created_at.split("T")[0]
    //         let dt1 = new Date(date2)
    //         let dt2 = new Date(date1)
    //     let finalDate = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), 
    //     dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    //     console.log(finalDate)
    //     if (finalDate < 7){
    //         newArrivals.push(item)
    //     }
    // })

 

    let orderitems =itemsState.sort( (a,b) => (a.create_at > b.created_at) ? 1 : -1)
    console.log(orderitems)
    let newArrivals= orderitems.slice(-11) 
    console.log(newArrivals)
    return(
        <div>
            <div>
            <Breadcrumb>
            <Link to={'/'}><Breadcrumb.Item >Home</Breadcrumb.Item></Link>
            <Breadcrumb.Item active>New Arrivals</Breadcrumb.Item>
            </Breadcrumb>
        <h3 style={{backgroundColor: "white"}}>New Arrivals</h3>
        <br></br>
        
       <Row>
         {newArrivals.map(item => <ItemCard item={item} key={item.id}/>)}
       </Row>
      </div>
        </div>
    )
}
