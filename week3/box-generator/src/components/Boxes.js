import React from 'react';

const Boxes = (props) => {

    const { colors } = props;

    return (
        <div>
            {
                colors.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "15px",
                        backgroundColor: color,
                        width: "100px",
                        height: "100px"
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default Boxes;