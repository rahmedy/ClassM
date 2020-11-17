import React, { Component } from 'react'
// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";


import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
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

class ClassInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseName: '',
            // sections: [],
            location: '',
            // textBooks: [],
            courseDescription: '',
        }

    }

    handleChangeInputName = async event => {
        const courseName = event.target.value
        this.setState({ courseName })
    }

    handleChangeInputLocation = async event => {
        const location = event.target.value
        this.setState({ location })
    }

    handleChangeInputDescription = async event => {
        const courseDescription = event.target.value
        this.setState({ courseDescription })
    }

    handleIncludeClass = async () => {
        const { id, courseName, location, courseDescription } = this.state
        const classLoad = { courseName, location, courseDescription  }

        await API.insertClass(classLoad).then(res => {
            window.alert(`Class inserted successfully`)
            this.setState({
                courseName: '',
                location: '',
                courseDescription: '',
            })
        })
    }

    render() {
        const { courseName, location, courseDescription } = this.state
        return (
            <Wrapper>
                <Title>Add Class </Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={courseName}
                    onChange={this.handleChangeInputName}
                />

                <Label>Location: </Label>
                <InputText
                    type="text"
                    value={location}
                    onChange={this.handleChangeInputLocation}
                />

                <Label>Course Des: </Label>
                <InputText
                    type="text"
                    value={courseDescription}
                    onChange={this.handleChangeInputDescription}
                />

                <Button onClick={this.handleIncludeClass}>Add Class</Button>
                {/* <CancelButton href={'/movies/list'}>Cancel</CancelButton> */}
            </Wrapper>
        )
    }
}

export default ClassInsert