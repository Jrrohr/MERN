import React from 'react';

const Content = (props) => {
    const { items, setItems } = props;
    const { currentIndex } = props;

    return (
        <div style={{ border: "1px solid darkgray", padding: "10px", margin: "10px auto", height: "150px" }}>
            <p>{ items[currentIndex].content }</p>
        </div>
    );
}

export default Content;