import React from 'react'
import 'assets/css/sign.css'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';




class Option extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {

        return (
            <>
                <Form className="login-form">

                <h1 className="wel">Class __anager</h1>
                    <span className="m-circle">M</span>

                    
                    <Button color="warning" className="btn-lg  btn-block" onClick={this.continue}>Teacher
                    </Button>
                    <Button color="warning" className="btn-lg  btn-block" onClick={this.continue}>Student
                    </Button>

                </Form>
            </>



        )

    }

}

export default Option;