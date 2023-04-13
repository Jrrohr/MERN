import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [ titleError, setTitleError ] = useState("");
    const [price, setPrice] = useState(0.0);
    const [ priceError, setPriceError ] = useState("");
    const [description, setDescription] = useState("");
    const [ descError, setDescError ] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/home"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }

    const titleValidate = (e) => {
        setTitle(e.target.value)
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be at least 3 characters long");
        } else {
            setTitleError("");
        }
    }

    const priceValidate = (e) => {
        setPrice(e.target.value)
        if(e.target.value < 0.01) {
            setPriceError("Price must be greater than 0");
        } else {
            setPriceError("");
        }
    }

    const descValidate = (e) => {
        setDescription(e.target.value)
        if(e.target.value.length < 1) {
            setDescError("Description is required!");
        } else if(e.target.value.length < 5) {
            setDescError("Description must be at least 5 characters long");
        } else {
            setDescError("");
        }
    }

    const formStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px',
        backgroundColor: 'rebeccapurple',
        border: '1px darkgray solid',
        color: 'white',
        borderRadius: '5px'
    }

    const error = {
        color: 'red'
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                <div style={{ width: "350px", margin: "30px auto"}}>
                    <h2>Update a Product</h2>
                    <p style={formStyle}>
                        <label>Title: </label>
                        <input type="text" name="title" value={title} onChange = { titleValidate }/>
                    </p>
                    {
                        titleError ?
                        <p style={ error }>{ titleError }</p> :
                        ''
                    }
                    <p style={formStyle}>
                        <label>Price: </label>
                        <input type="number" step="any" name="price" value={price} onChange = { priceValidate }/>
                    </p>
                    {
                        priceError ?
                        <p style={ error }>{ priceError }</p> :
                        ''
                    }
                    <p style={formStyle}>
                        <label>Description: </label>
                        <input type="text" name="description" value={description} onChange = { descValidate }/>
                    </p>
                    {
                        descError ?
                        <p style={ error }>{ descError }</p> :
                        ''
                    }
                    <input type="submit" value="Update"/>
                </div>
            </form>
            <Link to={`/home`}>Back</Link>
        </div>
    )
}
export default Update;