import React from 'react';
import './NewsSection.css';
import NewsCard from '../components/NewsCard';

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2 className="news-title">Новости</h2>
      <div className="news-grid">
        <NewsCard imageSrc={"/images/news-photo-1.jpg"} text="Открытие нового клуба в Барнауле!" />
        <NewsCard imageSrc={"/images/news-photo-1.jpg"} text="Тренировка выходного дня — бесплатно!" />
        <NewsCard imageSrc={"/images/news-photo-1.jpg"} text="Скидки на абонементы до конца месяца!" />
        <NewsCard imageSrc={"/images/news-photo-1.jpg"} text="Это новый блок!!!" />
      </div>
    </section>
  );
};

export default NewsSection;