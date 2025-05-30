import './Header.css'; 

import { Link } from 'react-router-dom';

export default function Header() {
  return (

    <header className="header">

      <div className="container">

        <div className="header-section">

          <p><Link to="/">Главная</Link></p>
        
        </div>

        <div className="header-section">
          <div className="sections">
          <p><Link to="/clubs">Клубы</Link></p>
          <p><Link to="/prises">Тарифы</Link></p>
          <p><Link to="/instructors">Тренеры</Link></p>
          <p><Link to="/goods">Товары</Link></p>
          </div>
        </div>

      </div>

    </header>

  );
}