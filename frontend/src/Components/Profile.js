import React, { Component } from 'react';
import { Divider, Icon,Sidenav,Nav , Panel, PanelGroup, Container, Col, Grid, Row, ButtonToolbar, Button} from 'rsuite'
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


export default function Profile() {
  let dispatch = useDispatch()
    let history = useHistory()
    let user = useSelector(state => state.user)
    console.log(user)
    if(user == null){
      return ("Loading...")
    }

    let handleDelete=()=>{
      fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'DELETE'
      })
      .then(r => r.json())
      .then((deleteUser) => {
        console.log(deleteUser);
        dispatch({type: "LOG_OUT"})
        history.push('/')
        // console.log(deleteUser);
      })
    }
  
   return(

    <div className="order-container">
    <div style={{ width: 250 }}>
    <Container>
     <Grid>
         <Row>
             <Col sm={6}>
            <Sidenav  className= "side-nav" defaultOpenKeys={['3', '4']}  activeKey='1' >
            <Sidenav.Body>
            My Account
            <Nav>
            <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />} onClick={()=>history.push('/profile')}>
            Profile
            </Nav.Item>
            <Nav.Item eventKey="2"  active icon={<Icon icon="book2" />} onClick={()=>history.push('/orders')}>
            Orders
            </Nav.Item>
            </Nav>
            </Sidenav.Body>
            </Sidenav>
            </Col>
        <Col>  
         <Container>
          <Panel bordered className="profile">
            <h4>Your personal Details:</h4>
            First Name: {user.first_name}
            <br/>
            Last Name: {user.last_name}
            <br/>
            Email: {user.email}
            <br/>
            Address: {user.address}
            <br/>
            Phone-number: {user.phonenumber}
            <ButtonToolbar>
            <Button color="red" onClick={()=>{handleDelete()}}>Delete Account</Button>
            </ButtonToolbar>
          </Panel>
          </Container>
        </Col>
        </Row>
        </Grid>
      </Container> 

      </div>
    </div>
        
   )
}