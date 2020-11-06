import React from "react";
import 'assets/css/log.css'
import {  Button,Form, FormGroup, Label, Input, Row,Col } from 'reactstrap';

class Signup extends React.Component {

    render(){
        return(
          <>
    <Form className ="login-form">
    
    
        <h1 className= "wel">Welcome to Class _anager</h1>
        <span className="m-circle">M</span>
        
          <FormGroup >
            
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
        
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          <Button color="warning" className= "btn-lg  btn-block">Log In
          </Button>

          <a className= "text-success su" href ="/"> Sign Up</a>
          <span className="p-2">|</span>
          <a className= "text-success " href='/'>Forgot Password?</a>
      </Form>
          </>  
        )
    }
}

export default Signup;