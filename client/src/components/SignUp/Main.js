import React from "react";
import Perso from 'components/SignUp/Perso';
import Option from 'components/SignUp/Option';
import Info from 'components/SignUp/Info';
import { Button } from "reactstrap";
import axios from "axios";
// import Teacher from 'components/SignUp/Teacher';



class Main extends React.Component {

    state = {
        step: 1,

        firstName: '',
        lastName: '',
        email: '',
        password: '',
        type: "",

        // Step 2
        // className: '',
        // location: '',
        // classSection: '',
        // desc: ''
    }

	handleSubmit = async event => {
        
        event.preventDefault();
        
        const endPoint = `http://localhost:5000/api/${this.state.type}/register`;
        console.log(endPoint);
      const user = JSON.stringify(this.state);
    //   const endPoint = "http://localhost:5000/api/teachers/login";
      const config = {headers:{"Content-type":"application/json"}}
      try {const results = await axios.post(endPoint, user, config)
        console.log(results);}
      catch(err){console.log(err)}
     
      
    
    }

    setType = (type) => {
        console.log(type)
        this.setState({
            type,
        })
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = Input => e => {
        console.log(e.target.value);
        this.setState({ [Input]: e.target.value });
    }

    showStep = () => {
        const { step, firstName, lastName,email,password } = this.state;
        if (step === 1)
            return (


              
                <Perso
                    handleChange={this.handleChange}
                    nextStep={this.nextStep}
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    

                />
            );
        if (step === 2) {
            return (
                <Option
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    setType={this.setType}
                />); 
            }

                if(step === 3) {
                return(
                    <>
                    <Info
                    
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    prevStep={this.prevStep}
                     />
                     <Button color="warning" onClick={this.handleSubmit} className="btn-lg  btn-block">Submit</Button>
                     </>
                ); 
            }
    }


    render() {
        const { step } = this.state;

        return (
            <>
                <h2>Step {step} of 3</h2>
                {this.showStep()}

            </>
        )
    }

}



export default Main;