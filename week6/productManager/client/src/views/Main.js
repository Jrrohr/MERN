import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = productParam => {
        axios.post("http://localhost:8000/api/products", productParam)
        .then(res => {
            setProducts([...products, res.data]);
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="0" initialDescription="" />
            <hr />
            <ProductList products={products} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;