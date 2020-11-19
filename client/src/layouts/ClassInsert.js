import React, { Component } from 'react'
// import React, { useEffect, useState } from "react";

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
let textBooks = [];
let sectionArr = [];
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
            textBooks: {
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
        this.setState({
            sections: {
                ...this.state.sections,
                sectionNo: courseSection,
            }
        })
    }


    handleChangeTime = async event => {
        const courseTime = event.target.value
        this.setState({
            sections: {
                ...this.state.sections,
                time: courseTime
            }
        })
    }


    handleChangeDays = async event => {
        const courseDays = event.target.value
        this.setState({
            sections: {
                ...this.state.sections,
                days: courseDays
            }
        })
    }

    handleChangeTitle = async event => {
        const title = event.target.value
        this.setState({
            textBooks: {
                ...this.state.textBooks,
                title: title
            }
        })
    }

    handleChangeAuthor = async event => {
        const author = event.target.value
        this.setState({
            textBooks: {
                ...this.state.textBooks,
                author: author
            }
        })
    }

    handleChangeLink = async event => {
        const link = event.target.value
        this.setState({
            textBooks: {
                ...this.state.textBooks,
                link: link
            }
        })
    }

    handleBook = async () => {
        console.log("starting book...");
        const bookToAdd = this.state.textBooks
        textBooks.push(bookToAdd);
        console.log(textBooks)
        this.setState({
            textBooks: {
                title: "",
                author: "",
                link: ""
            }
        })
    }

    handleSection = async () => {
        console.log("starting section...");
        const sectionToAdd = this.state.sections
        console.log(sectionToAdd)
        sectionArr.push(sectionToAdd);
        console.log(sectionArr)
        this.setState({
            sections: {
                sectionNo: "",
                time: "",
                days: ""
            }
        })
    }

    handleIncludeClass = async () => {

        const data = {
            courseName: this.state.courseName,
            sections: sectionArr,
            location: this.state.location,
            textBooks: textBooks,
            courseDescription: this.state.courseDescription,
        }
        console.log(data)
        await
            axios({
                method: "post",
                url: "http://localhost:5000/api/class/add",
                headers: {},
                data: data
            })
                .then(res => {
                    window.alert(`Class inserted successfully`)
                    this.setState({
                        courseName: '',
                        sections: {
                            sectionNo: "",
                            time: "",
                            days: ""
                        },
                        location: '',
                        textBooks: {
                            title: "",
                            author: "",
                            link: ""
                        },
                        courseDescription: '',
                    })
                })
    }

    render() {
        const { courseName, location, courseDescription, sections, textBooks } = this.state
        return (
            <Wrapper>
                <Title>Create Classes</Title>

                <Label>Course Name: </Label>
                <InputText
                    type="text"
                    placeholder="Course Name"
                    value={courseName}
                    onChange={this.handleChangeInputName}
                />

                <Label>Location: </Label>
                <InputText
                    type="text"
                    placeholder="Buidling/Room No."
                    value={location}
                    onChange={this.handleChangeInputLocation}
                />

                <Label>Course Description: </Label>
                <InputText
                    type="text"
                    placeholder="Course Description..."
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
                <Button onClick={this.handleSection}>
                    Add Section!
                </Button>
                <Label>Books </Label>
                <InputText
                    type="text"
                    placeholder="Title"
                    value={textBooks.title}
                    onChange={this.handleChangeTitle}
                />
                <InputText
                    type="text"
                    placeholder="Author"
                    value={textBooks.author}
                    onChange={this.handleChangeAuthor}
                />
                <InputText
                    type="text"
                    placeholder="Link to book"
                    value={textBooks.link}
                    onChange={this.handleChangeLink}
                />
                <Button onClick={this.handleBook}>
                    Add Book!
                </Button>

                <Button onClick={this.handleIncludeClass}>Add Class</Button>
            </Wrapper>
        )
    }
}

export default ClassInsert