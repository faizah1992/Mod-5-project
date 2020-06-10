import React, { Component } from 'react';
import { Divider, Icon,Sidenav,Nav , Panel, PanelGroup, Container} from 'rsuite'
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


export default function Profile() {
    let history = useHistory()
    let user = useSelector(state => state.user)
    console.log(user)

   return(
    <div className="show-container">
        <div style={{ width: 250 }}>
        <Container>
        <Sidenav  className= "side-nav" defaultOpenKeys={['3', '4']} activeKey="1">
        <Sidenav.Body>
            My Account
        <Nav>
          <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />} onClick={()=>history.push('/profile')}>
           Profile
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="book2" />} onClick={()=>history.push('/pastoders')}>
            Past Oders
          </Nav.Item>
    
        </Nav>
        </Sidenav.Body>
        </Sidenav> 
        </Container>
        </div>
        <Container>
        <h4 >Your personal Details:</h4>
        </Container>
        
    </div>
        
   )
}