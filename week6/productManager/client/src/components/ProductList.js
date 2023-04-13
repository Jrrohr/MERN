import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
    const { removeFromDom, products, setProducts } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    const productBox = {
        border: '1px darkgray solid',
        borderRadius: '10px',
        boxShadow: '2px 2px 3px darkgray',
        width: '200px',
        height: '200px',
        display: 'inline-block',
        margin: '10px',
        overflow: 'auto'
        }

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((product, index) => {
                    return (
                        <div style={productBox} key={index}>
                            <h4><Link to={`/products/${product._id}`}>{product.title}</Link></h4>
                            <p><Link to={`/products/edit/${product._id}`}>Edit</Link></p>
                            <p><button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p>
                        </div>
                )})
            }
        </div>
    )
}
export default ProductList;