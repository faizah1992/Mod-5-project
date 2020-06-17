import React, { Component } from 'react';
import { Divider, Icon,Sidenav,Nav , Panel, PanelGroup, Container, Grid, Row, Col, Sidebar, Content} from 'rsuite'
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import OrderCard from './OrderCard'

export default function PastOrdersContainer() {
    let history = useHistory()
    let orders = useSelector(state =>state.orders)
    // console.log(orders)
    let orderLength = orders ? orders.length : 0
    // let orderCard = orders ? orders.map(order => <OrderCard order={order}/>): null
    // let orderCard = orders.map(order => <OrderCard order={order}/>)
    return(
    <div className="order-container">
    <div style={{ width: 250 }}>
    <Container>
     <Grid>
         <Row>
             <Col sm={6}>
            <Sidenav  className= "side-nav" defaultOpenKeys={['3', '4']} activeKey="2">
            <Sidenav.Body>
            My Account
            <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />} onClick={()=>history.push('/profile')}>
            Profile
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="book2" />} onClick={()=>history.push('/orders')}>
            Orders
            </Nav.Item>
            </Nav>
            </Sidenav.Body>
            </Sidenav>
            </Col>
            <Col>
        <Container>
            <Panel bordered className="past-orders">
                <h4>Order details</h4> 
                <b className= "order">{orderLength <= 0 ? <img verticalAlign="middle" 
                src="https://cutt.ly/muldxiG"/>: orders.map(order => <OrderCard order={order}/>)}</b>
            </Panel>
        </Container>
        </Col>
        </Row>
    </Grid>  
     </Container>
        
        </div>
        
    </div>
        
        
       
    )
}
