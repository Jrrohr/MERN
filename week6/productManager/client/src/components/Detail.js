import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${Number(product.price).toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <p><DeleteButton productId={product._id} successCallback={() => navigate("/home")} /></p>
            <Link to={`/home`}>Back</Link>
        </div>
    );
}
export default Detail;