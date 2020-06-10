import React, { Component } from 'react';
import { Panel, PanelGroup } from 'rsuite';
import '../App.css';
// import 'rsuite/dist/styles/rsuite-default.css';

export default function Refund(props) {
                
    return( 
        <div>
        <h1 className="refund-policy" >Return and Refund Policy</h1>
        <Panel bordered>  
        <p>Thank you for purchasing our products at www.Faizahahsandesigns.com operated by Faizah Ahsan Designs™.
            In order to be eligible for a refund, you have to cancel the order within 24 hours of your purchase. 
            The product must not be delivered to you in any way. After we receive your cancellation order, our team of professionals will process your refund. 
            The money will be refunded to the original payment method you’ve used during the purchase. 
            For credit card payments it may take 5 to 10 business days for a refund to show up on your credit card statement.
            If the product is delivered to you in any way, or you have initiated the cancellation after 24 hours have passed, you will not be eligible for a refund.
            If anything is unclear or you have more questions feel free to contact our sales team.</p>
        </Panel>
        </div>
    )
}
