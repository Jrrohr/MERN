import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const Form = (props) => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", { name })
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
            <form onSubmit={onSubmitHandler}>
                <h2 className="formHeader">Add a new author</h2>
                {errors.name ? <p className="error">{errors.name.message}</p> : null}
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="submit" />
            </form>
            <Link to="/">Home</Link>
        </div>
    )
}
export default Form;