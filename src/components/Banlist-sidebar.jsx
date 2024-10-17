import React from 'react';
import './BanlistSidebar.css'; // Assuming you will style it later

const BanlistSidebar = ({ tags }) => {
    return (
        <div className="banlist-sidebar">
            <h2>Ban List:</h2>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}><img src={tag[0].url}><h5>{tag[0].id}</h5></img></li>
                ))}
            </ul>
        </div>
    );
};

export default BanlistSidebar;