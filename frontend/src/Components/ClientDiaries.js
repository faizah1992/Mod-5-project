import React, { Component, useState } from "react";
import {
  Row,
  Form,
  FormGroup,
  FormControl,
  Divider,
  Breadcrumb,
  Container,
  Col,
  Button,
  Modal
} from "rsuite";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ContactUs from "./ContactUs"

export default function ClienDiaries() {

  let [visible, setVisible] = useState(false);
  let [hide, setHide] = useState(true);

  let showModal = () => {
    setVisible(true);
  };
  let hideModal = () => {
    setVisible(false);
  };
  return (
    <div>
      <Breadcrumb>
        <Link to={"/"}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>Client diaries</Breadcrumb.Item>
      </Breadcrumb>
      <h3 style={{backgroundColor: "white"}}>Client Diaries</h3>
      <br></br>
      <Row>
        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/QuWUmoN"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/ZuWPsaU"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/GuWGgRd"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/puWGLER"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/IuWGBMz"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/duWG6be"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/fuWHtuF"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/yuWHlRT"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src='https://cutt.ly/NuWHOaY'
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/huWZYjo"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/QuWUmoN"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} s={10}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Text>
                <img
                  className="client-image-card"
                  src="https://cutt.ly/YuWZe2G"
                  //   onClick={() => history.push(`/items/${props.item.id}`)}
                  style={{ display: "inline-block", width: "80%", marginBottom: "30px" }}
                />
              </Card.Text>
              <Card.Link onClick={() => showModal()}>Inquire</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
       <Modal show={visible} onHide={hideModal}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <ContactUs  />
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

{
  /* <Row md={4}>
      <Col md={6} s={10}>
        <img
          className="client-image-card"
          src="https://cutt.ly/QuWUmoN"
        //   onClick={() => history.push(`/items/${props.item.id}`)}
          style={{ display: "inline-block", width: "80%" }}
        />
         </Col>
        <Col md={6} s={10}>
        <img
          className="client-image-card"
          src="https://cutt.ly/QuWUmoN"
        //   onClick={() => history.push(`/items/${props.item.id}`)}
          style={{ display: "inline-block", width: "80%" }}
        />
        </Col>
        <Col md={6} s={10}>
        <img
          className="client-image-card"
          src="https://cutt.ly/QuWUmoN"
        //   onClick={() => history.push(`/items/${props.item.id}`)}
          style={{ display: "inline-block", width: "80%" }}
        />
        </Col>
        <Col md={6} s={10}>
        <img
          className="client-image-card"
          src="https://cutt.ly/QuWUmoN"
        //   onClick={() => history.push(`/items/${props.item.id}`)}
          style={{ display: "inline-block", width: "80%", marginBottom:"80px"}}
        />
        </Col>
       
        <Col md={6} s={10}>
        <img
          className="client-image-card"
          src="https://cutt.ly/QuWUmoN"
        //   onClick={() => history.push(`/items/${props.item.id}`)}
          style={{ display: "inline-block", width: "80%", }}
        />
        </Col>

    
      </Row> */
}
