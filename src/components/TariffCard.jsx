import React from 'react';
import './TariffCard.css';

const TariffCard = ({ title, features }) => {
  return (
    <div className="tariff-card">
      <h2>{title}</h2>
      <ul>
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TariffCard;