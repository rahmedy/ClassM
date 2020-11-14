import React from "react";
import {  Switch ,Redirect} from "react-router-dom";

import SignNav from "components/Navbars/SignNavbar.js";
// import SignP from "../../components/Signp"

import Main from "components/SignUp/Main";

class Signup extends React.Component {
    render() {
        return (
          <>
            <div className="wrapper">
                <SignNav />
                <Main />
              
            </div>
          
          </>
        );
      }
}

export default Signup;
