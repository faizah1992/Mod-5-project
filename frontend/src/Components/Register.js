import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Message, Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel } from 'rsuite';
import {useDispatch, useSelector} from 'react-redux'

export default function Register(props) {
    let message = useSelector(state => state.message)
    let dispatch = useDispatch()
    let history = useHistory()
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        address: ''
    }
    let  [user, setUser] = useState({initialValues})

    let setValue = (key, value) => {
        setUser({ ...user, [key]: value })
    }


    let handleRegister = (newUser) => {
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(resp => resp.json())
        .then(newUser => {
            console.log(newUser)
            dispatch({type:"SIGNUP", message: "Successfull"})
        })
      }



    return(
<FlexboxGrid align="middle" justify="center">
            <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Register</h3>} bordered>
                    <Form formValue={user} fluid>
                        <FormGroup>
                        {message != '' ?  <Message type="success" description={message}>Test</Message>: null}
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl 
                                name='first_Name'  
                                onChange={e => setValue('first_Name', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl 
                                name="last_Name"
                                onChange={e => setValue('last_Name', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl 
                                name="email"  
                                onChange={e => setValue('email', e)}   
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl 
                                name="password"
                                type="password" 
                                onChange={e => setValue('password', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                        <FormGroup>
                            <ControlLabel>Phone Number</ControlLabel>
                            <FormControl 
                                name="phone_number"
                                onChange={e => setValue('phone_number', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Address</ControlLabel>
                            <FormControl 
                                name="address"
                                onChange={e => setValue('address', e)}
                            />
                        </FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary" onClick={() => handleRegister(user)}>Submit</Button>
                                <Button appearance="default" onClick={() => history.push('/')}>Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>   
    )
}