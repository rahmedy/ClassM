import React from 'react';
import 'assets/css/sign.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SignP = (props) => {


  return (
    <div>
   <Form className="sign-form">
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={3}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={3}>Select</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
              <option>--Choose Role--</option>
            <option>Teacher</option>
            <option>Studnet</option>
         
          </Input>
        </Col>
      </FormGroup>
      </Form>
    </div>

    
  );
}

export default SignP;