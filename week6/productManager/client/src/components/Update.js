import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import ProductForm from '../components/ProductForm';
const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = productParam => {
        axios.put('http://localhost:8000/api/products/' + id, productParam
            )
            .then(res => {
                console.log(res);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Update a Product</h2>
            {
            loaded && <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
            }
            <Link to={`/home`}>Back</Link>
        </div>
    )
}
export default Update;