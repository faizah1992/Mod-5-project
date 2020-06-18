import React, { Component } from 'react';
import { Divider,Icon, Panel } from 'rsuite';

export default function ContactUs(props) {
    return(
        <div>
            <h1 style={{backgroundColor: "white"}} className="contact-header">We're here to help!</h1>
            <Divider/>
            <div className="contactpage">
            <Icon icon="phone" size="2x"/>
            Call us +12344567889900
            
            <br/>
            <br/>
            <Icon icon="whatsapp" size="2x"/>
            WhatsApp us +123445567788
            <br/>
            <br/>
            <Icon icon="envelope" size="2x"/>
            Email us Faizahahsandesign@gmail.com 
            <br/>
            <br/>
            <Icon icon="comments" size="2x"/>
            Customer service hours: 9 am to 6 pm.
            (Monday to Friday)
            </div>       
            <Divider/>   
        </div>
    )
}
