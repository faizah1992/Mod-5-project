import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Col, Panel, Divider, Container, Row } from "rsuite";
import { Grid, Card, Image } from "semantic-ui-react";

export default function ItemCard(props) {
  let history = useHistory();
  return (
    <div>
      <Col md={6} s={10}>
        <img
          className="image-card"
          src={props.item.image}
          onClick={() => history.push(`/items/${props.item.id}`)}
          style={{ display: "inline-block", width: "80%" }}
        />
        <Divider />
        {props.item.name} <Divider vertical />${props.item.price}
        <Divider />
        {/* </Panel> */}
      </Col>
    </div>
  );
}

{
  /* <FlexboxGrid justify="space-between">
<FlexboxGrid.Item colspan={4}>{props.item.name}</FlexboxGrid.Item>
<FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item>
<FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item>
<FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item>
</FlexboxGrid>

<Col md={6} s={10}>
<Panel className="cardbackground"shaded onClick={() => history.push(`/items/${props.item.id}`)} style={{verticalAlign: 'middle', height: '450px'}} align='center'>
<img src={props.item.image} style={{ display: 'inline-block', width: '80%'}} />
<Divider/>
{props.item.name} <Divider vertical/>${props.item.price}
</Panel>
</Col>  */
}
