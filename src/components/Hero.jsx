import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Желаете привести себя в хорошую форму?</h1>
        <p><strong>Lorem Ipsum</strong> – это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
        <p><strong>Lorem Ipsum</strong> является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
        <p>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов...</p>
        <p><strong>Lorem Ipsum</strong> не только успешно пережил без заметных изменений пять веков...</p>
      </div>
      <div className="hero-image">
        <img src="/images/hero.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
