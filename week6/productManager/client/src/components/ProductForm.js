import React, { useState } from 'react'
const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [ titleError, setTitleError ] = useState("");
    const [price, setPrice] = useState(initialPrice);
    const [ priceError, setPriceError ] = useState("");
    const [description, setDescription] = useState(initialDescription);
    const [ descError, setDescError ] = useState("")

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        onSubmitProp({title, price, description});
        setTitle("");
        setPrice(0);
        setDescription("");
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
        <form onSubmit={onSubmitHandler}>
            <div style={{ width: "350px", margin: "30px auto"}}>
            <p style={formStyle}>
                <label>Title: </label>
                <input type="text" value={title} onChange = { titleValidate }/>
            </p>
                {
                        titleError ?
                        <p style={ error }>{ titleError }</p> :
                        ''
                }
            <p style={formStyle}>
                <label>Price: </label>
                <input type="number" step="any" value={price} onChange = { priceValidate }/>
            </p>
                {
                        priceError ?
                        <p style={ error }>{ priceError }</p> :
                        ''
                }
            <p style={formStyle}>
                <label>Description: </label>
                <input type="text" value={description} onChange = { descValidate }/>
            </p>
                {
                        descError ?
                        <p style={ error }>{ descError }</p> :
                        ''
                }
            <input type="submit"/>
            </div>
        </form>
    )
}
export default ProductForm;