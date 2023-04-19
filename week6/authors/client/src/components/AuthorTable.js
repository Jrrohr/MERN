import React from 'react';
import {Link} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const AuthorTable = (props) => {
    const { authors, removeFromDom } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                authors.map((author, index) => {
                    return (
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td><Link to={`/authors/edit/${author._id}`}><button>Edit</button></Link>| 
                            <DeleteButton authorId={author._id} successCallBack={()=>removeFromDom(author._id)} /></td>
                        </tr>
                )})
            }
            </tbody>
        </table>
    )
}
export default AuthorTable;