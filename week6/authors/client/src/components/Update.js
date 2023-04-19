import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = () => {
    const { id } = useParams();
    const [authorName, setAuthorName] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthorName(res.data.name);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/" + id, { name: authorName })
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        })            
}

    return (
        <div>
            {
                loaded &&
                <form onSubmit={onSubmitHandler}>
                    <h2 className="formHeader">Update an author</h2>
                    {errors.name ? <p className="error">{errors.name.message}</p> : null}
                    <label>Name:</label>
                    <input type="text" value={ authorName } onChange={(e) => setAuthorName(e.target.value)}/>
                    <input type="submit" />
                </form>
            }
            <Link to="/">Home</Link>
        </div>
    )
}
export default Update;