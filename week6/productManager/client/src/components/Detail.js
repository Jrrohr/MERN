import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, Link} from "react-router-dom";
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${Number(product.price).toFixed(2)}</p>
            <p>Description: {product.description}</p>
            <Link to={`/home`}>Back</Link>
        </div>
    );
}
export default Detail;