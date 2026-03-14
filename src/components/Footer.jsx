import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">🪷</span>
            VARA<span className="footer__logo-accent">AI</span>
          </div>
          <p className="footer__tagline">Blessed by wisdom. Powered by AI.</p>
          <p className="footer__mantra">ॐ श्री महालक्ष्म्यै नमः</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <p className="footer__col-title">SERVICES</p>
            {['Automation', 'Financial Tools', 'Development', 'Shop Websites', 'Medical Platforms', 'AI Solutions'].map((s) => (
              <a key={s} href="#services" className="footer__link">{s}</a>
            ))}
          </div>
          <div className="footer__col">
            <p className="footer__col-title">COMPANY</p>
            {['About Us', 'Our Work', 'Blog', 'Careers', 'Contact'].map((s) => (
              <a key={s} href="#about" className="footer__link">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} VaraAI. All rights reserved.</p>
        <p>Built with 🙏 to bring prosperity to every business.</p>
      </div>
    </footer>
  );
}
