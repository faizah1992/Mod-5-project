import React, { Component } from 'react';
import { Navbar, Nav, Container, Header, Dropdown, Icon, Button} from 'rsuite';
import { useHistory } from 'react-router';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import '../App.css'
import Logout from './Logout'



export default  function NavBar(props){
    let user = useSelector(state => state.user)
    let history = useHistory()
    let dispatch = useDispatch()
   
    // console.log(user)
    return(
        <div>

        <Header style={{ marginBottom: '50px' }}>
        <Navbar >
        <Navbar.Body>
   
        <Nav className="navbar">
            
            <Nav.Item onClick={() => history.push('/')} >Home</Nav.Item>
            <Nav.Item onClick={() => history.push('/kurtis')}>Kurtis</Nav.Item>
            <Nav.Item onClick={() => history.push('/casual-wear')}>Casual-Wear</Nav.Item>
            <Nav.Item onClick={() => history.push('/luxe-pret')}>Luxe-Pret</Nav.Item>
            <Nav.Item onClick={() => history.push('/evening-wear')}>Evening-wear</Nav.Item>
            <Nav.Item onClick={() => history.push('/about')}>About</Nav.Item>
            {/* <Button onClick={()=> props.handleLogout }>Logout</Button> */}
            <Logout />
        </Nav>

        </Navbar.Body>
        </Navbar>
        </Header>
        
  
        </div>
    )
}