import React, { useState, useEffect } from 'react';
import './TrainersSection.css';
import ClubBlock from '../components/ClubBlock';

const TrainersSection = () => {
  const [trainers, setTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState({
    image: '',
    title: '',
    description: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/trainers') // json-server
      .then(res => res.json())
      .then(data => setTrainers(data));
  }, []);

  const handleAddTrainer = () => {
    fetch('http://localhost:3001/trainers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrainer)
    })
      .then(res => res.json())
      .then((addedTrainer) => {
        setTrainers(prev => [...prev, addedTrainer]);
        setNewTrainer({ image: '', title: '', description: '' });
      });
  };

  return (
    <section className="trainers-section">
      <h1 className="trainers-title">Наши тренеры</h1>

      {/* Форма добавления тренера */}
      <div className="trainer-form">
        <input
          type="text"
          placeholder="Ссылка на изображение"
          value={newTrainer.image}
          onChange={(e) => setNewTrainer({ ...newTrainer, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Имя"
          value={newTrainer.title}
          onChange={(e) => setNewTrainer({ ...newTrainer, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Описание"
          value={newTrainer.description}
          onChange={(e) => setNewTrainer({ ...newTrainer, description: e.target.value })}
        />
        <button onClick={handleAddTrainer}>Добавить</button>
      </div>

      {/* Отображение тренеров */}
      {trainers.map((trainer, index) => (
        <ClubBlock
          key={trainer.id}
          image={trainer.image}
          title={trainer.title}
          description={trainer.description}
          imageLeft={index % 2 === 0}
        />
      ))}
    </section>
  );
};

export default TrainersSection;