import React from 'react';
import 'assets/css/sign.css'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';



class Perso extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { handleChange } = this.props;

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
                            onChange={handleChange('firstName')} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleLname"></Label>
                        <Input
                            type="text"
                            name="lastName"
                            id="exampleLname"
                            placeholder="Last name"
                            onChange={handleChange('lastName')} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail"></Label>
                        <Input
                            type="text"
                            name="email"
                            id="exampleEmail"
                            placeholder="Email"
                            onChange={handleChange('email')} />
                    </FormGroup>

                    <Button color="warning" className="btn-lg  btn-block" onClick={this.continue}>Next
                    </Button>


                </Form>


            </>
        )


    }



}

export default Perso;