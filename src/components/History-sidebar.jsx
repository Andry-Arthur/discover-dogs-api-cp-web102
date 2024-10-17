import React from 'react';
import './HistorySidebar.css'; // Make sure to create and style this CSS file

const HistorySidebar = ({ items }) => {
    return (
        <div className="history-sidebar">
            <h4>Discovery History:</h4>
            {items.map((item, index) => (
                <div key={index} className="history-item">
                    <li key={index}><img src={item.url}/><p>{item.id}</p></li>
                </div>
            ))}
        </div>
    );
};

export default HistorySidebar;