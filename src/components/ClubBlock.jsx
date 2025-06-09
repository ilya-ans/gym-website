import React from 'react';
import './ClubBlock.css';

const ClubBlock = ({ image, title, description, imageLeft }) => {
  return (
    <div className={`club-block ${imageLeft ? 'left' : 'right'}`}>
      <div className="club-image">
        <img src={image} alt={title} />
      </div>
      <div className="club-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ClubBlock;