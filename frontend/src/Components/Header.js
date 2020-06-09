import React, { Component } from 'react';
import {Link, useHistory} from 'react-router-dom'
import { Divider, Panel, Icon, Dropdown, Input, InputGroup } from 'rsuite'
import NavBar from './NavBar';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';

export default function Header(props) {
    let dispatch = useDispatch()
    let user = useSelector(state => state.user)
    let history = useHistory()
    const styles = {
        width: 300,
        marginBottom: 10
      };

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
   console.log(user)

    return(
        <div>
        <Panel className="main-header">
        <a href= "/"><img className="logo" src='http://tiny.cc/7urjqz' /></a>       
        {/* <Icon className="search-icon" icon='search' /> */}
        <Icon  className="cart-icon"  icon='shopping-cart' onClick= {()=>history.push('/cart')}/>
        <Dropdown className='dropdown' icon={<Icon icon="user-o"  />}>

            <InputGroup inside style={styles} className="search-bar">
            <Input />
            <InputGroup.Addon>
            <Icon icon="search" />
            </InputGroup.Addon>
            </InputGroup>
 
       {!user ? 
        <>
        <Dropdown.Item onClick={() => history.push('/login')} >Login</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push('/register')}>Register</Dropdown.Item> 
        </>
        :
        <>
        <Dropdown.Item >{user.first_name}</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLogout()} >Logout</Dropdown.Item>
        </>
        } 
        </Dropdown>
        </Panel>
        <NavBar  />
        </div>
    )
       
}
