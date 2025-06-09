import React from 'react';
import './ClubsSection.css';
import ClubBlock from '../components/ClubBlock';

const ClubsSection = () => {
  return (
    <section className="clubs-section">
      <h1 className="clubs-title">Наши клубы</h1>
      <ClubBlock
        image={"/images/gym1-view.jpg"}
        title="Фитнес-клуб в центре"
        description="Расположен в самом сердце города. Современное оборудование и опытные тренеры."
        imageLeft={true}
      />
      <ClubBlock
        image={"/images/gym2-view.jpg"}
        title="Клуб на правом берегу"
        description="Уютная атмосфера и свежий ремонт. Подходит для всех возрастов и уровней."
        imageLeft={false}
      />
      <ClubBlock
        image={"/images/gym3-view.jpg"}
        title="Клуб на левом берегу"
        description="Клуб для пауэрлифтинга. Большое количество стоек для приседа, жимовых скамей и всего необходимого для установления новых рекордов."
        imageLeft={true}
      />
    </section>
  );
};

export default ClubsSection;