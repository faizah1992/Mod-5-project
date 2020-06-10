import React, { Component } from 'react';
import {Divider,Icon,Nav,} from 'rsuite'
import '../App.css';
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { useHistory } from 'react-router-dom';


export default function Footer(props) {
    
    let history = useHistory()
    
    return(
        <div class="footer">
            
            <a href ="https://www.instagram.com/faizahahsandesignsofficial"><IoLogoInstagram color= "white" size="2%" className="fb"/></a>
            <a href = "https://www.facebook.com/FaizahAhsanDesigns/"><GrFacebookOption color= "white" size="2%"className="insta"/></a>
            <Divider />
            <Nav >
            <Nav.Item  appearance= 'subtle'className= "about" onClick={()=>history.push('/about')}>About Us</Nav.Item>
            <Nav.Item className="contact">Contact Us</Nav.Item>
            <Nav.Item className="refund" onClick={()=>history.push('/return-refund-policy')}>Return and Refund Policy</Nav.Item>
            </Nav>
            <Icon  className= "visa" icon='cc-visa' size="2x" />
            <Icon className= "amex" icon='cc-amex' size="2x" />
            <Icon className= "mc" icon='cc-mastercard' size="2x"/>
            <Icon className= "stripe" icon='cc-stripe' size="2x"/>
        </div>
        
    )
}
