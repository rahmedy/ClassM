import React, { Component } from "react";

import styled from 'styled-components'
import axios from 'axios';

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

        this.state = {
            courseName: "",
            sectionNo: "",
        }
    }

    handleNameChange = async event => {
        const courseName = event.target.value;
        this.setState({ courseName });
    }

    handleNoChange = async event => {
        const sectionNo = event.target.value;
        this.setState({ sectionNo });
    }

    addClass = async () => {
        const course = this.state;
        schedule.push(course)
        console.log(schedule)
        this.setState({
            courseName: "",
            sectionNo: "",
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
                <Button>
                    Complete
                </Button>
            </Wrapper>
        )
    }

}

export default ClassAddStudent;