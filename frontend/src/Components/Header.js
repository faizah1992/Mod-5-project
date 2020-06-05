import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Divider, Panel, Icon} from 'rsuite'
import NavBar from './NavBar';
import '../App.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function Header(props) {
    


    return(
        <div>
        <Panel className="main-header">
        <a href="/"><img className="logo" src='https://www8.lunapic.com/editor/working/15913273423252972?7880297866' /></a>
        <AiOutlineSearch color= "black" size="1.5%" className="cart-icon"/>
        <AiOutlineUser color= "black" size="1.5%" className="user-icon"/>
        <AiOutlineShoppingCart color= "black" size="1.5%" className="icon"/>
        </Panel>
        <NavBar />
        </div>
    )
}
