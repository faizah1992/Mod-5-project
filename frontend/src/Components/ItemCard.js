import React, { Component } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Col, Panel, Divider } from 'rsuite'
import { Grid, Image } from 'semantic-ui-react'

export default function ItemCard(props) {
    let history = useHistory()
return(

 <Col md={6} sm={12}>
        <Panel shaded onClick={() => history.push(`/items/${props.item.id}`)} style={{verticalAlign: 'middle', height: '450px'}} align='center'>
        <img src={props.item.image} style={{ display: 'inline-block', width: '80%'}} />
        <Divider/>
        {props.item.name} <Divider vertical/>${props.item.price}
        </Panel>
    </Col>

)
}

 // <Col md={6} sm={12}>
    //     <Panel shaded onClick={() => history.push(`/items/${props.item.id}`)} style={{verticalAlign: 'middle', height: '450px'}} align='center'>
    //     <img src={props.item.image} style={{ display: 'inline-block', width: '80%'}} />
    //     <Divider/>
    //     {props.item.name} <Divider vertical/>${props.item.price}
    //     </Panel>
    // </Col>

    // <Grid>
    // <Grid.Row columns={3}>
    //   <Grid.Column width={"80%"}>>
    //     <Image src={props.item.image} style={{ display: 'inline-block', width: '80%'}}/>
    //   </Grid.Column>
    // </Grid.Row>
    // </Grid>
    