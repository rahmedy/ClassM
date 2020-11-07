import React from "react";
import {  Switch ,Redirect} from "react-router-dom";

import SignNav from "components/Navbars/SignNavbar.js"
import SignP from "components/SignP/SignP.js"

class Signup extends React.Component {
    render() {
        return (
          <>
            <div className="wrapper">
                <SignNav />
                <SignP />
              
            </div>
          
          </>
        );
      }
}

export default Signup;
