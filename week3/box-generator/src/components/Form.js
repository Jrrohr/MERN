import React, { useState } from 'react';

const Form = (props) => {
    const { colors, setColors } = props;
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

    const createBox = (e) => {
        // preventing default refresh of the browser to keep our state from being reset
        e.preventDefault();
        const noSpaces = color.split(" ").join("");
        setColors( [ ...colors, noSpaces]);
        setColor("");
    };

    return (
        <div>
            <form onSubmit={createBox}>
                <div>
                    <label>Color: </label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <label>Width: </label>
                    <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
                <div>
                    <label>Height: </label>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <input type="submit" value="Add Box" />
            </form>
        </div>
    );
};

export default Form;