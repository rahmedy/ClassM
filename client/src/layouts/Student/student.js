import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import API from "../../utils/API";
import axios from "axios";

export default function Student() {
    const [user, setUser] = useState({});

    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        axios.get("http://localhost:5000/api/students/" + id).then(res => {setUser(res.data)})
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