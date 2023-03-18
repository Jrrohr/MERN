import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ newAge, setNewAge ] = useState(props.age);
    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { newAge }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ (event) => setNewAge(newAge + 1)}>Birthday Button for { props.firstName } { props.lastName }</button>
        </div>
    )
}
export default PersonCard;