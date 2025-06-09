import React from 'react';
import './GoodsSection.css';
import ClubBlock from '../components/ClubBlock';

const GoodsSection = () => {
  return (
    <section className="goods-section">
      <h1 className="goods-title">Спортивное питание</h1>
      <ClubBlock
        image={"/images/protein-picture-2.jpg"}
        title="Сывороточный протеин"
        description="Здесь будет текстовое описание"
        imageLeft={true}
      />
      <ClubBlock
        image={"/images/vitamins-picture.jpg"}
        title="Витаминный комплекс"
        description="Здесь будет текстовое описание"
        imageLeft={true}
      />
      
      <h1 className="goods-title">Экипировка</h1>
      <ClubBlock
        image={"/images/sport-bottle-pic.jpg"}
        title="Спортивный шейкер"
        description="Здесь будет текстовое описание"
        imageLeft={true}
      />
      <ClubBlock
        image={"/images/towel-pic.jpg"}
        title="Полотенце"
        description="Здесь будет текстовое описание"
        imageLeft={true}
      />

    </section>

    
  );
};

export default GoodsSection;