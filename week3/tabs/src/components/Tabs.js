import React from 'react';

const Tabs = (props) => {

    const { items, setItems, setCurrentIndex, currentIndex } = props;

    const tabStyle = (index) => {
        if (index === currentIndex) {
            return "selectedStyle";
        } else {
            return "tabsStyle";
        }
    }

    return (
        <div style={{ display: "flex", gap: "5px" }}>
            {
                items.map((item, index) => (
                    <div  className={`tab ${ tabStyle(index) }`} onClick={() => setCurrentIndex(index)}>
                        <p>{ item.label }</p>
                    </div>
                ))
            }
        </div>
    )

}

export default Tabs;