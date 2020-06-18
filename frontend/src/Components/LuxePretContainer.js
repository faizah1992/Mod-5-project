import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { Row, Form, FormGroup, FormControl, Divider, Breadcrumb } from "rsuite";
import { Link } from "react-router-dom";

export default function LuxePretContainer() {
  let itemsState = useSelector((state) => state.items);
  // console.log(itemsState.items)
  let filteredLuxe = itemsState.filter((item) => item.category === "Luxe-Pret");
  // console.log(filteredLuxe)

  return (
    <div>
      <Breadcrumb>
        <Link to={"/"}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>Luxe-pret</Breadcrumb.Item>
      </Breadcrumb>
      <h3 style={{backgroundColor: "white"}}>Luxe-Pret</h3>
      <br></br>
      <Row>
        {filteredLuxe.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </Row>
    </div>
  );
}
