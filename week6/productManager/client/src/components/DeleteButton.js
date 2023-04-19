import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { productId, successCallBack } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                console.log(res.data);
                successCallBack();
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;