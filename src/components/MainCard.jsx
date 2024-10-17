import React from 'react';

const MainCard = ({ object }) => {
    return (
        <div className="main-card">
            <h2>{object.id}</h2>
            <div className="picture">
                <img src={object.url} alt='Picture' />
            </div>
        </div>
    );
};

export default MainCard;