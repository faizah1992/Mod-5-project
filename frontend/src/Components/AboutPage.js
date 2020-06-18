import React, { Component } from 'react';
import { Panel, Container, Divider} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export default function AboutPage(props) {
                
    return( 
        <div style={{marginBottom: '-140px'}} >
        <h1 style={{backgroundColor: "white"}} className="about-header" >The Brand</h1>
        
            <img src = "https://cutt.ly/buh74yF" class="center" style={{marginTop: '50px'}}/>
            <Divider/>
            <div class="center" style={{fontWeight: "bold"}}>
            <Panel bordered style={{backgroundColor:"white"}}>
            <p>Faizah Ahsan's clothing line is comprised of vibrant seasonal colors and exclusive designs to make you stand out in every crowd.

               Our collection based on casual, semi-formal, party wear, couture wear. We utilize a wide variety colors, using different types of materials. 
               
               Our collection also consist of intricate embroideries, pearl, kundan, stone and Dabka work.

               We exhibit our designs through seasonal exhibitions in Dhaka,Bangladesh and Houston, Texas, which you will be informed through the website and our Faceboook page.. 
               
               We also take custom orders, if you are interested please reach out to us through the email address provided.</p>     
            </Panel>
            </div>
        </div>
    )
}
