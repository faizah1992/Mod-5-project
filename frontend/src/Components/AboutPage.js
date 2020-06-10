import React, { Component } from 'react';
import { Panel, PanelGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export default function AboutPage(props) {
                
    return( 
        <div>
        <h1 className="about-header" >The Brand</h1>
        <Panel bordered>
            {/* <img src = "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/cc5dvskqjobawc4mbygl/sneakerheads-feature" class="center"></img> */}
            
            <p>Faizah Ahsan's clothing line is comprised of vibrant seasonal colors and exclusive designs to make you stand out in every crowd.

               My collection based on casual, semi-formal, party wear, couture wear. I utilize a wide variety colors, using different types of materials. 
               
               My collection also consist of intricate embroideries, pearl, kundan, stone and Dabka work.

               I exhibit my designs through exhibitions in Dhaka,Bangladesh and Houston, Texas, which you will be informed through this page. 
               
               Incase if you like any of the pictures in this page and want to purchase any of the dresses please inbox me with the picture of the dress and I will let you know the details. 
               
               Also if you want to get outfit for a particular occasion made on order, please message me on Facebook.</p>
        </Panel>
        </div>
    )
}
