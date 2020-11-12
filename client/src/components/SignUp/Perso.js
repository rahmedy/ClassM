import React from 'react';
import 'assets/css/sign.css'
import { Card, CardTitle,CardSubtitle ,CardBody, CardText, CardLink, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';



class Perso extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { handleChange, firstName, lastName, email, password } = this.props;

        return (
            <>



{/* <Card style={{ width: '40rem', height: '30rem' }}>
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <CardLink href="#">Card Link</CardLink>
    <CardLink href="#">Another Link</CardLink>
  </CardBody>
</Card> */}
                <Form className="login-form">


                    <h1 className="wel">Class __anager</h1>
                    <span className="m-circle">M</span>

                    <FormGroup >

                        <Label for="exampleName"></Label>
                        <Input
                            type="text"
                            name="firstName"
                            id="exampleName"
                            placeholder="First name"
                            value={firstName}
                            onChange={handleChange('firstName')} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleLname"></Label>
                        <Input
                            type="text"
                            name="lastName"
                            id="exampleLname"
                            placeholder="Last name"
                            value={lastName}
                            onChange={handleChange('lastName')} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail"></Label>
                        <Input
                            type="text"
                            name="email"
                            id="exampleEmail"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange('email')} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword"></Label>
                        <Input type="text"
                         name="password" 
                         id="examplePassword"
                         placeholder="Password"
                         value={password}
                         onChange= {handleChange ('password')} />
                    </FormGroup>

                    <Button color="warning" className="btn-lg  btn-block" onClick={this.continue}>Next
                    </Button>


                </Form>


            </>
        )


    }



}

export default Perso;