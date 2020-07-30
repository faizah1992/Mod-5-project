import React, { useState } from 'react'
import { Message, Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel} from 'rsuite';
import { useHistory } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'


export default function Login(props){
    let errorMessage = useSelector(state => state.errorMessage)
    let history = useHistory()
    let dispatch = useDispatch()
    let  [user, setUser] = useState({
        email: '',
        password: '',
    })

    let setValue = (key, e) => {
        console.log(e)
        setUser({ ...user, [key]: e })
    }


    let handleLogin=(user, e)=>{
        e.preventDefault()
    fetch('http://localhost:3000/login', {
      credentials: 'include',
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(r => r.json())
    .then((response) => {
      
      if (response.success){
      dispatch({type:"SAVE_USER",user:response.user}) 
      dispatch({type: "CURRENT_USER_CART", cartItems: response.cart_items })
      props.hideModal()
    //   history.push('/')
      }
      else{
          dispatch({type: "FAIL_LOGIN", errorMessage: "Incorrect Email or Password"})
      }
     
    })
}


    return(
   
                   
                    <Form fluid>
                        <FormGroup>
                        {errorMessage != '' ?  <Message type="error" description={errorMessage}>Test</Message>: null}
                            <ControlLabel>Email</ControlLabel>
                            <FormControl name="email" type="email"  onChange={(e) => setValue( "email", e)}/>
                        
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password"  onChange={(e) => setValue('password', e )}/>
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="default" color="black" onClick={e =>handleLogin( user, e)}>Sign in</Button>
                            </ButtonToolbar>
                        
                        </FormGroup>
                    </Form>
   
    )
}


