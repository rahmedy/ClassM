import React, { Component } from "react";

import styled from 'styled-components'
import axios from 'axios';
import { idText } from "typescript";
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
import Dashboard from "layouts/Admin/Admin";

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 auto;
    width: 75%;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
let schedule = [];
class ClassAddStudent extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            courseName: "",
            sectionNo: "",
            id: props.match.params.id
        }
    }

    redirect = () => {
        this.props.history.push('/admin/dashboard/' + this.props.match.params.id);
    }

    handleNameChange = async event => {
        const courseName = event.target.value;
        this.setState({ courseName });
    }

    handleNoChange = async event => {
        const sectionNo = event.target.value;
        this.setState({ sectionNo });
    }

    addClass = () => {
        const course = this.state;
        schedule.push(course)
        console.log(schedule)
        const id = this.props.match.params.id
        console.group(id)
        this.setState({
            courseName: "",
            sectionNo: "",
            id: this.props.match.params.id
        })
    }

    complete = async () => {
        const id = this.props.match.params.id
        console.log(id)
        await
            axios({
                method: "put",
                url: "http://localhost:5000/api/students/update/" + id,
                data: {
                    id: id,
                    schedule: schedule
                }
            }).then(res => {
                this.setState({
                    courseName: "",
                    sectionNo: "",
                    id: this.props.match.params.id
                })
            })
    }
    render() {
        const { courseName, sectionNo } = this.state

        return (
            <Wrapper>
                <Title>
                    Add your schedule below
                </Title>
                <Label>Course Name: </Label>
                <InputText
                    type="text"
                    placeholder="Course Name"
                    value={courseName}
                    onChange={this.handleNameChange}
                />
                <Label>Section No.: </Label>
                <InputText
                    type="text"
                    placeholder="Section Number"
                    value={sectionNo}
                    onChange={this.handleNoChange}
                />
                <Button onClick={this.addClass}>
                    Add
                </Button>
                <Title>
                    Classes listed Below:
                </Title>
                {schedule.map((course, index) => (
                    <h1 key={index}>{course.courseName} => {course.sectionNo}</h1>
                ))}
                <Button onClick={this.complete}>
                    Complete
                </Button>
                <Button onClick={this.redirect}>
                    Dashboard
                    <Route path={"/admin/dashboard/" + this.props.match.params.id} component={Dashboard}></Route>
                </Button>
            </Wrapper>
        )
    }

}

export default ClassAddStudent;