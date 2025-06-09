import './Footer.css';

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="social-icons">

          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/vk.jpg" alt="VK" />
          </a>

          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <img src="/images/telegram.jpg" alt="Telegram" />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/youtube.jpg" alt="YouTube" />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.jpg" alt="Instagram" />
          </a>

        </div>

        <div className="phone-number">8 977 933 15 15</div>

      </div>

    </footer>

  );
}