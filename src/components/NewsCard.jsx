import React from 'react';
import './NewsCard.css';

const NewsCard = ({ imageSrc, text }) => {
  return (
    <div className="news-card">
      <img src={imageSrc} alt="Новость" className="news-image" />
      <div className="news-text">{text}</div>
    </div>
  );
};

export default NewsCard;