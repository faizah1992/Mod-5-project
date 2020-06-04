import React, { Component } from 'react';
import { useHistory } from 'react-router';
import { Input, Menu, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import '../App.css'
import { Navbar, Nav, Container, Header, Dropdown, Icon} from 'rsuite';
import {Divider} from 'rsuite'
import { Carousel } from 'rsuite';

export default  function Homepage(props){
    let history = useHistory()
    return(
        <div>
        <Segment className="main-header">
        <Link to={`/`}><img className="logo" src='https://scontent.fhou1-1.fna.fbcdn.net/v/t31.0-8/12898252_115781748819169_5140743774705995608_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=GLHpfjUJxFsAX8-xc6f&_nc_ht=scontent.fhou1-1.fna&oh=0e6f47d0e199759827567f223b9aed43&oe=5EFE9D14'/></Link>
        </Segment>
        
        <Header style={{ marginBottom: '50px' }}>
        <Navbar.Body>
        <Nav>
            <Nav.Item onClick={() => history.push('/')} >Home</Nav.Item>
            <Nav.Item onClick={() => history.push('/items')}>Kurtis</Nav.Item>
            <Nav.Item>Luxe-Pret</Nav.Item>
            <Nav.Item>Casual-Wear</Nav.Item>
            <Nav.Item>Formal-Wear</Nav.Item>
            <Nav.Item onClick={() => history.push('/about')}>About</Nav.Item>
        </Nav>
        </Navbar.Body>
        </Header>
        <Divider/>

        <Carousel autoplay className="custom-slider">
            <img
            src="https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/38744327_606137156450290_6359245603431514112_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=H6r5c7ZAPR4AX_gwXOg&_nc_ht=scontent.fhou1-2.fna&oh=4e4bca09c36741ac5f5a417f3c480a78&oe=5EFFD992"
             
            />
            <img
             src="https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/86831362_2852622831465067_4634450809680035840_o.jpg?_nc_cat=109&_nc_sid=2d5d41&_nc_ohc=SePlMDtA6OkAX_EoKKd&_nc_ht=scontent.fhou1-2.fna&oh=c3b68ecb110839f45e7adca37627401d&oe=5EFF06D1"
            height="100"
            />
            <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
            height="1000"
            />
           
        </Carousel>
        </div>
    )
}
