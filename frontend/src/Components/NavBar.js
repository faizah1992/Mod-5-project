import React, { Component } from 'react';
import { Navbar, Nav, Container, Header, Dropdown, Icon} from 'rsuite';
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom'
import '../App.css'


export default  function NavBar(props){

    let history = useHistory()

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
        </Nav>

        </Navbar.Body>
        </Navbar>
        </Header>
        
  
        </div>
    )
}