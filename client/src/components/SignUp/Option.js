import React from 'react'
import 'assets/css/sign.css'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';



class Option extends React.Component {
    continue = Input => e => {
        console.log("input", Input);
        this.props.setType(Input);
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        
        return (
            <>
                <Form className="login-form">

                <h1 className="wel">Class __anager</h1>
                    <span className="m-circle">M</span>

                    
                    <Button color="warning" className="btn-lg  btn-block" onClick = {this.continue('teachers')}> Teacher
                    </Button>
                    <Button color="warning" className="btn-lg  btn-block" onClick={this.continue('students')}>Student
                    </Button>

                    <Button color="warning" className="btn-lg  btn-block" onClick={this.back}>Back
                    </Button>

                </Form>
            </>



        )

    }

}

export default Option;