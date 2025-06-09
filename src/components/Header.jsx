import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <header className="header">

      <div className="container">

        <Link to="/" className="logo">

          <img src="/images/gym-logo.png" alt="logo" className="logo-icon" />
          <span className="logo-text">YOURGYM</span>

        </Link>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>

          <Link to="/clubs" onClick={() => setIsMenuOpen(false)}>Клубы</Link>
          <Link to="/prises" onClick={() => setIsMenuOpen(false)}>Тарифы</Link>
          <Link to="/instructors" onClick={() => setIsMenuOpen(false)}>Тренеры</Link>
          <Link to="/goods" onClick={() => setIsMenuOpen(false)}>Товары</Link>
          
        </nav>

        <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>

          <span className="line" />
          <span className="line" />
          <span className="line" />

        </div>

      </div>

    </header>

  );
}