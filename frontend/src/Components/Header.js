import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Divider,
  Panel,
  Icon,
  Dropdown,
  Input,
  InputGroup,
  Badge,
  Modal,
  Button,
} from "rsuite";
import NavBar from "./NavBar";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";


export default function Header(props) {
  let dispatch = useDispatch();
  let [visible, setVisible] = useState(false);
  let [hide, setHide] = useState(true);
  let user = useSelector((state) => state.user);
  let cartItems = useSelector((state) => state.cartItems);
  let history = useHistory();
  let logoSource = require("../images/logo.jpg")
  let cartCount = cartItems
    ? cartItems
        .map((ct) => ct.quantity)
        .reduce((total, num) => {
          return total + num;
        }, 0)
    : null;

  let showModal = () => {
    setVisible(true);
  };
  let hideModal = () => {
    setVisible(false);
  };

  let handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.loggedout == true) {
          dispatch({ type: "LOG_OUT" });
        }
        history.push("/");
      });
  };

  return (
    <div>
      <Panel className="main-header">
        <a href="/">
          <img className="logo" src={logoSource} />
        </a>
        <Icon
          className="search-icon"
          size="2x"
          icon="search"
          className="search-icon"
          onClick={() => history.push("/Search")}
        />
        <Divider vertical />
        <Icon
          className="cart-icon"
          size="2x"
          icon="shopping-bag"
          onClick={() => history.push("/cart")}
        >
          {cartCount > 0 ? (
            <Badge className="cartCount" content={cartCount}></Badge>
          ) : null}
        </Icon>
        <Dropdown className="dropdown" icon={<Icon size="2px" icon="user" />}>
          {!user ? (
            <>
              <Dropdown.Item onClick={() => showModal()}>Login</Dropdown.Item>
              <Dropdown.Item onClick={() => history.push("/register")}>
                Register
              </Dropdown.Item>
            </>
          ) : (
            <>
              <Dropdown.Item onClick={() => history.push("/profile")}>
                {user.first_name}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleLogout()}>
                Logout
              </Dropdown.Item>
            </>
          )}
        </Dropdown>
      </Panel>
      <NavBar />
      <Modal show={visible} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>
            <h3>Log-in</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login hideModal={hideModal} />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => hideModal()} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
