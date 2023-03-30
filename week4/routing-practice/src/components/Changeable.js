import React from 'react';
import { useParams } from "react-router-dom";

function Changeable() {
    const { parameter, color1, color2 } = useParams();
    return (
        <div>
            <h1>Welcome</h1>
            {
                isNaN(parameter)?
                <h3 style={
                    color1?
                    {color: color1, backgroundColor: color2}
                    :null
                }>The word is: {parameter}</h3>:
                <h3 style={
                    color1?
                    {color: color1, backgroundColor: color2}
                    :null
                }>The number is: { parameter }</h3>
            }
        </div>
    );
}

export default Changeable;