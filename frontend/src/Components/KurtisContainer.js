import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ItemCard from "./ItemCard";
import {
  Row,
  Form,
  FormGroup,
  FormControl,
  Divider,
  Breadcrumb,
  Container,
} from "rsuite";
import { Link } from "react-router-dom";

export default function KurtisContainer() {
  let itemsState = useSelector((state) => state.items);
  // console.log(itemsState.items)
  let filteredKurtis = itemsState.filter((item) => item.category === "Kurtis");
  // console.log(filteredKurtis)

  return (
    <div>
      <Breadcrumb>
        <Link to={"/"}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>Kurtis</Breadcrumb.Item>
      </Breadcrumb>
      <h3 style={{backgroundColor: "white"}}>Kurtis</h3>
      <br></br>

      <Row>
        {filteredKurtis.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </Row>
    </div>
  );
}
