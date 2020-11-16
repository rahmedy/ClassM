import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";

export default function Student() {
    const [user, setUser] = useState({})

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const { id } = useParams()
    useEffect(() => {
        API.getStudents(id)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [])
    console.log(user)
    return (
        <div>
            <p>User is a {user.type}</p>
            <p>first name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </div>
    )
};