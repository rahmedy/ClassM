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
            sections: {
                sectionNo: "",
                time: "",
                days: ""
            },
            location: '',
            books: {
                title: "",
                author: "",
                link: ""
            },
            courseDescription: '',
        }

    }

    handleChangeInputName = async event => {
        const courseName = event.target.value
        console.log(courseName);
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

    handleChangeSection = async event => {
        const courseSection = event.target.value
        this.setState({ sections: {
            ...this.state.sections,
            sectionNo: courseSection,
            } })
    }


    handleChangeTime = async event => {
        const courseTime = event.target.value
        this.setState({ sections: {
            ...this.state.sections,
            time: courseTime} })
    }


    handleChangeDays = async event => {
        const courseDays = event.target.value
        this.setState({ sections: {
            ...this.state.sections,
            days: courseDays} })
    }

    handleChangeTitle = async event => {
        const title = event.target.value
        this.setState({ books: {
            ...this.state.books,
            title: title} })
    }

    handleChangeAuthor = async event => {
        const author = event.target.value
        this.setState({ books: {
            ...this.state.books,
            author: author} })
    }

    handleChangeLink = async event => {
        const link = event.target.value
        this.setState({ books: {
            ...this.state.books,
            link: link} })
    }

    handleIncludeClass = async () => {
        const { courseName, location, courseDescription, sections, books } = this.state
        const classLoad = { courseName, location, courseDescription, sections, books}

        console.log(classLoad);
        await API.insertClass(classLoad).then(res => {
            window.alert(`Class inserted successfully`)
            this.setState({
                courseName: '',
                sections: {
                    sectionNo: "",
                    time: "",
                    days: ""
                },
                location: '',
                books: {
                    title: "",
                    author: "",
                    link: ""
                },
                courseDescription: '',
            })
        })
    }

    render() {
        const { courseName, location, courseDescription, sections, books } = this.state
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

                <Label>Course Description: </Label>
                <InputText
                    type="text"
                    value={courseDescription}
                    onChange={this.handleChangeInputDescription}
                />

                <Label>Sections: </Label>
                <InputText
                    type="text"
                    placeholder="Section No."
                    value={sections.sectionNo}
                    onChange={this.handleChangeSection}
                />
                <InputText
                    type="text"
                    placeholder="Time"
                    value={sections.time}
                    onChange={this.handleChangeTime}
                />
                <InputText
                    type="text"
                    placeholder="Days"
                    value={sections.days}
                    onChange={this.handleChangeDays}
                />

                <Label>Books </Label>
                <InputText
                    type="text"
                    placeholder="Title"
                    value={books.title}
                    onChange={this.handleChangeTitle}
                />
                <InputText
                    type="text"
                    placeholder="Author"
                    value={books.author}
                    onChange={this.handleChangeAuthor}
                />
                <InputText
                    type="text"
                    placeholder="Link to book"
                    value={books.link}
                    onChange={this.handleChangeLink}
                />

                <Button onClick={this.handleIncludeClass}>Add Class</Button>
            </Wrapper>
        )
    }
}

export default ClassInsert