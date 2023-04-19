import React from 'react'
import {Link} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
const ProductList = (props) => {
    const { products, removeFromDom } = props;

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
                            <p><DeleteButton productId={product._id} successCallBack={()=>removeFromDom(product._id)} /></p>
                        </div>
                )})
            }
        </div>
    )
}
export default ProductList;