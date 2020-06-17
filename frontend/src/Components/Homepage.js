import React, { Component } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../App.css";
import "../homePage.css";
import { Panel, Grid, Row, Col, Icon} from "rsuite";
import { Divider } from "rsuite";
import HomeCard from "./homeCard";
// import { Carousel } from 'rsuite';
// import Carousel from 'react-bootstrap/Carousel
import Carousel from 'nuka-carousel';
import { Button, Jumbotron, Container, Card } from "react-bootstrap";

export default function Homepage(props) {
  let history = useHistory();
  return (
    <div>
      <div className="container">
        <Jumbotron>
          <h1>New Arrivals!</h1>
          <p>
            Breathtaking designs crafted to perfection with magical finesse.
            <br />
            <br />
            <Button
              variant="primary"
              onClick={() => history.push("/newarrivals")}
            >
              Explore
            </Button>
            <br />
            <br />
          </p>
        </Jumbotron>
      </div> 
        <Carousel  className="custom-slider" >
          <img src="https://cutt.ly/nuhF4mz" height="700" />
          <img src="https://cutt.ly/DuhGbJU" height="700" />
          <img src="https://cutt.ly/xuhHi5X" height="700" />
        </Carousel> 
      <Divider />

      <h3>SHOP NOW</h3>

      <Panel shaded bordered className="shopnow">
        <div class="row">
          <div class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://cutt.ly/5uhZAoB" />
              <Card.Body>
                <Card.Title>
                  <h6>Shop Kurtis </h6>
                </Card.Title>
                <Card.Text>
                  Shop some our best selling kurtis for your everyday wear!
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/kurtis")}
                >
                  Shop Now!
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://cutt.ly/IuhCcoW" />
              <Card.Body>
                <Card.Title>
                  <h6>Shop Casual-Wear </h6>
                </Card.Title>
                <Card.Text>
                  Shop our Casual wears for the comfort and style!
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/casual-wear")}
                >
                  Shop Now!
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://cutt.ly/quhCita" />
              <Card.Body>
                <Card.Title>
                  <h6>Shop Luxe-Pret</h6>
                </Card.Title>
                <Card.Text>
                  Shop our luxe-pret line for the most unique style and designs!
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/luxe-pret")}
                >
                  Shop Now!
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div class="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://cutt.ly/2uhCIVC" />
              <Card.Body>
                <Card.Title>
                  <h6>Shop Evening-Wear</h6>
                </Card.Title>
                <Card.Text>
                  Shop our Evening-wears to stand out in every party!
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => history.push("/evening-wear")}
                >
                  Shop Now!
                </Button>
              </Card.Body>
            </Card>
          </div>
          <Divider />
        </div>
      </Panel>

      <Panel bordered>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={24} sm={20} md={8}>
              <Icon icon="truck" size="2x" />
              <br />
              <br />
              <h5>Free Shipping on all orders!</h5>
              <p>
                Get Free Shipping on all orders in Bangladesh! Items are
                dispatched within Bangladesh (outside Dhaka city) will arrive in
                15-20 days. International dispatch will arrive in 20-30 days
                (The shipping and handling cost depends on the delivery address
                of your order, regular DHL or FedEx rate shall be applicable)
              </p>
            </Col>
            <Col xs={24} sm={20} md={8}>
              <Icon icon="credit-card" size="2x" />
              <br />
              <br />
              <h5>Safe and Secure Payments!</h5>
              <p>
                Safe and Secure Payments: Whether you pay at the time of
                in-store pickup, or via our multiple digital payment methods,
                your privacy and security is of utmost importance to us.
              </p>
            </Col>
            <Col xs={24} sm={20} md={8}>
              <Icon icon="money" size="2x" />
              <br />
              <br />
              <h5>No Extra Charges!</h5>
              <p>
                We pay these fees so you don’t have to! The total billed at
                checkout is the final amount you pay with no additional charges
                at the time of delivery!
              </p>
            </Col>
          </Row>
        </Grid>
      </Panel>
    </div>
  );
}
