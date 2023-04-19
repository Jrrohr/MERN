import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorTable from '../components/AuthorTable';
import { Link } from "react-router-dom";
const Main = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                let sortedList = res.data.sort((a, b) =>
                a.name.localeCompare(b.name));
                setAuthors(sortedList);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link to={"/new"}>Add new</Link>
            <p>We have quotes by:</p>
            <AuthorTable authors={authors} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;