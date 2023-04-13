import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    const { products, setProducts } = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
            })
            .catch(err=>console.log(err))
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
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div style={{ width: "350px", margin: "30px auto"}}>
            <h2>Product Manager</h2>
            <p style={formStyle}>
                <label>Title: </label>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p style={formStyle}>
                <label>Price: </label>
                <input type="number" step="any" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p style={formStyle}>
                <label>Description: </label>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <input type="submit" value="Create"/>
            </div>
        </form>
    )
}
export default ProductForm;