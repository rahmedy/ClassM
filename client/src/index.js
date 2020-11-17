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
import ClassInsert from "layouts/ClassInsert"
import ClassList from "layouts/ClassList"

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
     {/* <Route exact path="/log" render={props => <LoginLayout {...props} />} /> */}
    <Switch>
    <Route path="/sign" render={props => <SignupLayout {...props} />} />
      <Route path="/log" render={props => <LoginLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/rtl" render={props => <RTLLayout {...props} />} />
      <Route exact path="/insert" render={props => <ClassInsert {...props} />} />
       <Route exact path="/:id" children={<StudentLayout />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
