import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${Number(product.price).toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <p><button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p>
            <Link to={`/home`}>Back</Link>
        </div>
    );
}
export default Detail;