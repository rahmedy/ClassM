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
import "./style.css";
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

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

  var scheduleId = [];


  if (user.schedule) {
    schedule = user.schedule;
    console.log(schedule);

    for (var i = 0; i < schedule.length; i++) {
      var curCourse = schedule[i]._id;
      scheduleId.push(curCourse);
    }

    // console.log(scheduleId);
    // var allCourseData = scheduleId.map((course, index) => {
    //   console.log(course);
    //   axios({
    //     method: "get",
    //     url: "http://localhost:5000/api/class/get",
    //     data: scheduleId[i]
        
    //   }).then(res => {
    //     allCourseData.push(res);
    //   })
    // });

    // console.log(allCourseData);

    
    // for (var i = 0; i < scheduleId.length; i++) {
    //   axios({
    //     method: "get",
    //     url: "http://localhost:5000/api/class/get",
    //     data: scheduleId[i]
        
    //   }).then(res => {
    //     allCourseData.push(res);
    //   })
    // }
    // console.log(allCourseData);

    return (
      <>
        <div className="studentDash">
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="6">
                      <h5 className="card-category">Student Dashboard</h5>
                      <h1>Welcome Courtney Paasch!</h1>
                      <h4>Your Student ID: {user._id}</h4>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle addbutton"
                        data-toggle="buttons"
                      >
                        <Link to = {"/studadd/" + id}>
                        <Button>
                          Add a Class!
                        </Button>
                        </Link>
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
                  <h4>Professor: Dr. Smith</h4>
                  <h4>Days: MWF</h4>
                  <h4>Time: 10:00 am</h4>
                  <h4>Location: Science Building 305</h4>
                  <h4>Course Description: Intro to Biology is a 101 level science course.</h4>
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
                  <h4>Professor: Dr. Peterson</h4>
                  <h4>Days: MWF</h4>
                  <h4>Time: 1:00 pm </h4>
                  <h4>Location: Math Lab 188</h4>
                  <h4>Course Description: Calulus 100 is a intro level course aimed at engineering majors.</h4>
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
                  <h4>Professor: Dr. Lancer</h4>
                  <h4>Days: TTh</h4>
                  <h4>Time: 3:00 pm</h4>
                  <h4>Location: Science Building 450</h4>
                  <h4>Course Description: Lab is the lab requirement for Intro to Biology.</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Book List</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Textbook</th>
                        <th>Author</th>
                        <th>Link</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{schedule[0].courseName}</td>
                        <td>Get to Know Biology</td>
                        <td>http://amazon.com/get-to-know-biology</td>


                      </tr>
                      <tr>
                        <td>{schedule[1].courseName}</td>
                        <td>Calculus for Engineers</td>
                        <td>http://amazon.com/calculus-for-engineers</td>


                      </tr>
                      <tr>
                        <td>{schedule[2].courseName}</td>
                        <td>Practical Biology</td>
                        <td>http://amazon.com/practical-biology</td>


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
                        <td>A-</td>


                      </tr>
                      <tr>
                        <td>{schedule[1].courseName}</td>
                        <td>C+</td>


                      </tr>
                      <tr>
                        <td>{schedule[2].courseName}</td>
                        <td>A</td>


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

