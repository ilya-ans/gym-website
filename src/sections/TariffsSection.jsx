import React from 'react';
import './TariffsSection.css';
import TariffCard from '../components/TariffCard';

const TariffsSection = () => {
  return (
    <section className="tariffs-section">
      <h1 className="tariffs-title">Наши тарифы</h1>
      <div className="tariffs-grid">
        <TariffCard
          title="Light"
          features={['Доступ в зал 1 месяц', 'Без тренера', 'Без дополнительных услуг']}
        />
        <TariffCard
          title="Infinity"
          features={['3 месяца', 'Персональные тренировки', 'Групповые занятия']}
        />
        <TariffCard
          title="Smart"
          features={['6 месяцев', 'Тренер', 'SPA', 'Все услуги включены']}
        />
      </div>
    </section>
  );
};

export default TariffsSection;