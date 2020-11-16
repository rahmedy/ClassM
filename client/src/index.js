/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch,  } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import LoginLayout from "layouts/Login/Login.js"
import SignupLayout from "layouts/SignUp/Signup.js"
import StudentLayout from "layouts/Student/student.js"

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/student/5fa377860b4faa5e30c00bbc" render={props => <StudentLayout {...props} />} />
      <Route exact path="/sign" render={props => <SignupLayout {...props} />} />
      <Route exact path="/log" render={props => <LoginLayout {...props} />} />
      <Route exact path="/admin" render={props => <AdminLayout {...props} />} />
      <Route exact path="/rtl" render={props => <RTLLayout {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
