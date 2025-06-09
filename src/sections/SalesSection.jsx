import React from 'react';
import './SalesSection.css';
import NewsCard from '../components/NewsCard';

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2 className="news-title">Акции</h2>
      <div className="news-grid">
        <NewsCard imageSrc={"/images/news-photo-1.jpg"} text="50% скидка на вступительный платеж с 23.05 по 20.06" />
        <NewsCard imageSrc={"/images/news-photo-1.jpg"} text="20% скидка за приглашение 2 друзей с 01.05 по 15.07" />
      </div>
    </section>
  );
};

export default NewsSection;