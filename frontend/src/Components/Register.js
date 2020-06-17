import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Message, Form, FormGroup, FormControl, Alert, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel } from 'rsuite';
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
        address: '',
        
    }
   let defaultErrorState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    }
    let [passClickSubmit, setPassClickSubmit]=useState(false)
    let  [user, setUser] = useState(initialValues)
    let [errors, setErrors]=useState(defaultErrorState)

    let setValue = (key, value) => {
        // console.log(key)
        // console.log(value)
        setUser({ ...user, [key]: value })
    }
    // console.log(user)
    let validate = ()=>{
    if (!user.first_name){
        errors.first_name = "First name is required"
    }else{
        errors.first_name = ""
    }
    if (!user.last_name){
        errors.last_name = "Last name is required"
    }else{
        errors.last_name = ""
    }

    if (!user.email){
        errors.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(user.email)){
        errors.email = "Email address is invalid"
    }else{
        errors.email=""
    }

    if(!user.password){
        errors.password = "Password is required"
    }
    else if(user.password.length< 8){
        errors.password = "Password needs to be more than 8 characters"
    }else {
        errors.password=""
    }

    if (!user.phone_number){
        errors.phone_number = "Phone Number is required"
    }else{
        errors.phone_number = ""
    }

    if (!user.address){
        errors.address = "Address is required"
    }else{
        errors.address = ""
    }
    return {...errors}
    }

    let handleSubmit =()=>{
        setErrors(validate(user))
    }

    const clearState = () => {
        setUser({ ...initialValues });
      };

    let handleRegister = () => {
    //    console.log("test")
    // debugger  
        handleSubmit()
        setPassClickSubmit(true)
        console.log(errors)
        let noErrors = Object.values(errors).filter(error => error !== '').length == 0
        console.log(noErrors)
        if(noErrors){
            console.log("test")
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(newUser => {

            if(newUser.error){
                setErrors({...errors, email: newUser.error})
            }else{
                dispatch({type:"SIGNUP", message: "Successfull!!"})
                clearState()
                // history.push('/login')
            }   
        })
       
         
        }
    }



    return(
<FlexboxGrid align="middle" justify="center">
            <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Register</h3>} bordered className="register" style={{marginBottom:"60px"}}>
                    <Form formValue={user} fluid >
                        <FormGroup>
                        {message != '' ?  <Message type="success" description={message}>Test</Message>: null}
                            <ControlLabel>First Name</ControlLabel>
                            {errors.first_name && <p>{errors.first_name}</p>}
                            <FormControl 
                                name='first_name'  
                                onChange={e => {
                                setValue('first_name', e)
                                if(passClickSubmit){
                                    setErrors(validate(user))
                                }
                            }}
                            />    
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Last Name</ControlLabel>
                            {errors.last_name && <p>{errors.last_name}</p>}
                            <FormControl 
                                name="last_name"
                                onChange={e => {
                                    setValue('last_name', e)
                                    if(passClickSubmit){
                                        setErrors(validate(user))
                                    }
                                }}
                            />
                            
                        </FormGroup>
                        <FormGroup>
                        {errors.email && <p>{errors.email}</p>}
                            <ControlLabel>Email</ControlLabel>
                            <FormControl 
                                name="email"  
                                onChange={e => {
                                    setValue('email', e)
                                    if(passClickSubmit){
                                        setErrors(validate(user))
                                    }
                                }}   
                            />
                        </FormGroup>
                        <FormGroup>
                        {errors.password && <p>{errors.password}</p>}
                            <ControlLabel>Password</ControlLabel>
                            <FormControl 
                                name="password"
                                type="password" 
                                onChange={e => {
                                    setValue('password', e)
                                    if(passClickSubmit){
                                        setErrors(validate(user))
                                    }
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                        <FormGroup>
                        {errors.phone_number && <p>{errors.phone_number}</p>}
                            <ControlLabel>Phone Number</ControlLabel>
                            <FormControl 
                                name="phone_number"
                                onChange={e => {
                                setValue('phone_number', e)
                                if(passClickSubmit){
                                    setErrors(validate(user))
                                }
                            }}
                            />
                        </FormGroup>
                        <FormGroup>
                        {errors.address && <p>{errors.address}</p>}
                            <ControlLabel>Address</ControlLabel>
                            <FormControl 
                                name="address"
                                onChange={e => {
                                setValue('address', e)
                                if(passClickSubmit){
                                    setErrors(validate(user))
                                }
                            }}
                            />
                        </FormGroup>
                            <ButtonToolbar>
                                <Button appearance="default" onClick={()=>handleRegister()}>Submit</Button>

                                <Button appearance="default" onClick={() => history.push('/')}>Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </FlexboxGrid.Item>
        </FlexboxGrid>   
    )
}







