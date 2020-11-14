import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';




class Info extends React.Component {

back = e => {
    e.preventDefault();
    this.props.prevStep();
}

    render(){
        const{firstName, lastName, email, } = this.props;
        return(

            <>
                <h2>Information inputed </h2>
                First name: <b>{firstName}</b> <br />
                Last Name: <b>{lastName}</b> <br />
                Email: <b>{email}</b> <br />

                <Button color="warning" className="btn-lg  btn-block" onClick={this.back}>Back
                    </Button>
            </>

        );


    }



}


export default Info;