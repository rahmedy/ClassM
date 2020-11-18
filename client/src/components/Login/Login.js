// Copy and paste your work, or start typing.

import React from "react";
import 'assets/css/log.css'
import {  Button,Form, FormGroup, Label, Input, Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import  axios  from "axios"; 

async function handleLogin(user) {
	
    

}

class LoginP extends React.Component {

  	state = {
      email: '',
      password: '',
    };

	handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      }) 
    }

	handleSubmit = async event => {
		event.preventDefault();
    	
      const user = this.state;
      const endPoint = "http://localhost:5000/api/teachers/login";
       
      const config = {headers:{"Content-type":"application/json"}}
      
      const results = await axios.post(endPoint, user, config)
      console.log(results);
      if (results.data.success){
        localStorage.setItem("token", results.data.token);
        this.props.setAuthenticated(results.data.token);
        this.props.history.push("/admin");
      }
    }
    
    render(){
        return(
          <>
     <Form  onSubmit={this.handleSubmit} className ="login-form"> 
    
    
        <h1 className= "wel">Class __anager</h1>
        <span className="m-circle">M</span>
        
          <FormGroup >
            
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
          </FormGroup>
        
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
          </FormGroup>
          <FormGroup >
            <Button color="warning" className= "btn-lg  btn-block"> Teacher Log In
          </Button>
          <Button color="warning" onClick={this.handleSubmit} className= "btn-lg  btn-block"> Student Log In
          </Button>
          </FormGroup>
          
          
          < Link to ="/sign">
          <a className= "text-success su" href ="/"> Sign Up</a>
          </Link>
          <span className="p-2">|</span>
          <a className= "text-success " href='/'>Forgot Password?</a>
          
      </Form>
     
          </>  
        )
    }
}

export default LoginP;