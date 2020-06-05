import React, { Component } from 'react';
import {Divider} from 'rsuite'
import '../App.css';
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { useHistory } from 'react-router-dom';

export default function Header(props) {
    let history = useHistory()
    return(
        <div class="footer">
             <Divider />
            <a href ="https://www.instagram.com/faizahahsandesignsofficial"><IoLogoInstagram color= "white" size="2.5%"/></a>
            <a href = "https://www.facebook.com/FaizahAhsanDesigns/"><GrFacebookOption color= "white" size="2.5%"/></a>
        </div>
    )
}