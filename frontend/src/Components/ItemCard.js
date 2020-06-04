import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Grid, Card, Image } from 'semantic-ui-react'
import { Col, Panel, Divider } from 'rsuite'

export default function ItemCard(props) {
    let history = useHistory()

return(
    
    <Col md={6} sm={12}>
        <img src={props.item.image} style={{ display: 'inline-block', width: '100%'}} />
        <Divider />
        <Panel header={<b>{props.item.name}</b>}>
            <h6><Divider vertical /> ${props.item.price}</h6>
        </Panel>
    </Col>

)
}

