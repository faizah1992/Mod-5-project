import React, { Component, useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import { Divider, Panel, Icon, Dropdown, Input, InputGroup } from 'rsuite'
import NavBar from './NavBar';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';


export default function Header(props) {
    let dispatch = useDispatch()
    let user = useSelector(state => state.user)
    
    let history = useHistory()


    let handleLogout = () => {
        
        fetch('http://localhost:3000/logout', {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(r => r.json())
            .then((response)=>{
                if (response.loggedout == true)
                {dispatch({type:"LOG_OUT"})}
                history.push('/')
            })
      }
  

    return(
        <div>
        <Panel className="main-header">
        <a href= "/"><img className="logo" src='http://tiny.cc/7urjqz' /></a>       
        <Icon className="search-icon" size='2x'icon='search' className="search-icon" onClick= {()=>history.push('/Search')}/>
        <Icon  className="cart-icon"  size='2x' icon='shopping-cart' onClick= {()=>history.push('/cart')}/>
        <Dropdown className='dropdown' icon={<Icon  size='1px' icon="user-o"  />}>
       {!user ? 
        <>
        <Dropdown.Item onClick={() => history.push('/login')}>Login</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push('/register')}>Register</Dropdown.Item> 
        </>
        :
        <>
        <Dropdown.Item onClick={() => history.push('/profile')}>{user.first_name}</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLogout()} >Logout</Dropdown.Item>
        </>
        } 
        </Dropdown>
        </Panel>
        <NavBar  />
        </div>
    )
       
}
