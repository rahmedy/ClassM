import React from "react";
import Perso from 'components/Perso';
import Option from 'components/Option';




class Main extends React.Component {

state = {
    step: 1,

    firstName: '',
    lastName: '',
    email: '',

    location: '',
    textbook: '',
    desc: ''
}

    nextStep = () => {
        const {step} = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const {step} = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = Input => e => {
        this.setState({[Input]: e.target.value});
    }

    showStep = () =>{
        const {step} = this.state;
        if(step === 1)
            return (

            <Perso 
                handleChange = {this.handleChange}
                nextStep = {this.nextStep}
                />   
            );
            if(step === 2 )
                return (
                    <Option 
                    nextStep = {this.nextStep}
                />);
    }


    render() {
        const {step} = this.state;

        return (
            <>
                <h2>Step {step} of 3</h2>
                {this.showStep()}
                
            </>
        )
    }

}



export default Main;