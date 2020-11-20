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
// import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Dashboard(props) {
  console.log(props.match.params.id)
  const id = props.match.params.id
  // this is where the calls componet will go 

  const [user, setUser] = useState({});
  var schedule = [];

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  console.log(id)
  useEffect(() => {
    axios.get("http://localhost:5000/api/students/" + id).then(res => { setUser(res.data) })
      .catch(err => console.log(err));
  }, [])

  if (user.schedule) {
    schedule = user.schedule;

      for(var i=0; i<schedule.length; i++) {
        var curCourse = schedule[i];
        console.log(curCourse);

       
      }



    return (
      <>
        <div className="studentDash">
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="6">
                      <h5 className="card-category">Teacher Dashboard</h5>
                      <h1>Welcome {user.firstName} {user.lastname}!</h1>
                      <h4>Your Account ID: {user._id}</h4>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle addbutton"
                        data-toggle="buttons"
                      >
                        <Button> 
                          Add a New Class!
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    <u>{schedule[0].courseName}</u>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <h4>Days:</h4>
                  <h4>Time:</h4>
                  <h4>Location:</h4>
                  <h4>Course Description:</h4>
                  <h4>Student List:</h4>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    <u>{schedule[1].courseName}</u>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <h4>Days:</h4>
                  <h4>Time:</h4>
                  <h4>Location:</h4>
                  <h4>Course Description:</h4>
                  <h4>Student List:</h4>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h3">
                    <u>{schedule[2].courseName}</u>

                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <h4>Days:</h4>
                  <h4>Time:</h4>
                  <h4>Location:</h4>
                  <h4>Course Description:</h4>
                  <h4>Student List:</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <Card>
              <CardHeader>
                  <CardTitle tag="h4">All Students</CardTitle>
                </CardHeader>
                <CardBody>
                <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Student Name</th>
                        <th>Email</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{schedule[0].courseName}</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>{schedule[1].courseName}</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>{schedule[2].courseName}</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Grades</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Course</th>
                        <th>Grade</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{schedule[0].courseName}</td>
                        <td>1</td>


                      </tr>
                      <tr>
                        <td>{schedule[1].courseName}</td>
                        <td>2</td>


                      </tr>
                      <tr>
                        <td>{schedule[2].courseName}</td>
                        <td>3</td>


                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  return null;
}

