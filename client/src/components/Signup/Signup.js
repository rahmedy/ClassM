import React from "react";

import {  Form, FormGroup, Label, Input, Row,Col } from 'reactstrap';

class Signup extends React.Component {

    render(){
        return(
          <>
    <Form>
    <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Row>
      </Form>
          </>  
        )
    }
}

export default Signup;