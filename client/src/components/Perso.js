import React from 'react';
import 'assets/css/sign.css'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';



class Perso extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { handleChange, firstName, lastName, email, password } = this.props;

        return (
            <>
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