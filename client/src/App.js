// Copy and paste your work, or start typing.

import AdminDashboard from "components/AdminDashboard"
import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect  } from "react-router-dom";

import axios from 'axios';
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import LoginLayout from "layouts/Login/Login.js"
import SignupLayout from "layouts/SignUp/Signup.js"
import StudentLayout from "layouts/Student/student.js"
import ClassInsert from "./layouts/ClassInsert";
import ClassAddStudent from "./layouts/ClassAddStudent";



const hist = createBrowserHistory();


class App extends React.Component {

    componentDidUpdate(){
        console.log('App updated, token:',this.state.token);
    }

    state = {
        token: localStorage.getItem('token'),
    }

    setAuthenticated = token =>{

        this.setState({
            token:token
        })

    }

    unsetAuthenticated = () => {
        this.setState({
            token: null,
        })
    }

    render(){
        return(
            <Router history={hist}>
                <Switch>
                <Route exact path="/student/:id" render={props => <StudentLayout {...props} />} />
                <Route exact path="/addclass" render={props => <ClassInsert {...props} />} />
                <Route exact path="/studadd" render={props => <ClassAddStudent {...props} />} />
                <Route exact path="/sign" render={props => <SignupLayout {...props} />} />
                <Route exact path="/log" render={props => <LoginLayout {...props} unsetAuthenticated={this.unsetAuthenticated} setAuthenticated = {this.setAuthenticated}/>} />
                <Route exact path="/admin" render={props => this.state.token? <AdminLayout {...props} />: <Redirect to= {{pathname: "/log",state:{from: props.location}}}  />} />
                <Route exact path="/rtl" render={props => <RTLLayout {...props} />} />
                <Route exact path="/admin/dashboard" render={props => this.state.token? <AdminDashboard {...props} />: <Redirect to= {{pathname: "/log",state:{from: props.location}}}  />} />
                </Switch>
            </Router>
        )
    }
}

export default App;