import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="footer__container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">✦</span>
            VARA<span className="footer__logo-accent">AI</span>
          </div>
          <p className="footer__tagline">We Build. We Deliver. We Are En(AI)bling™</p>
          <p className="footer__description">Leading digital transformation through AI, automation, and innovative technology solutions.</p>
        </div>

        <div className="footer__links">
          <div className="footer__col">
            <p className="footer__col-title">SERVICES</p>
            {['AI/ML Services', 'Big Data Analytics', 'Web Development', 'Cloud Solutions', 'Automation', 'Cybersecurity'].map((s) => (
              <a key={s} href="#services" className="footer__link">{s}</a>
            ))}
          </div>
          <div className="footer__col">
            <p className="footer__col-title">COMPANY</p>
            {['About Us', 'Insights', 'Blog', 'Careers', 'Contact Us', 'Privacy Policy'].map((s) => (
              <a key={s} href="#about" className="footer__link">{s}</a>
            ))}
          </div>
          <div className="footer__col">
            <p className="footer__col-title">FOLLOW</p>
            {['LinkedIn', 'Twitter', 'GitHub', 'Facebook', 'Instagram'].map((s) => (
              <a key={s} href="#" className="footer__link">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} VaraAI. All rights reserved.</p>
        <p>Transforming businesses through intelligent technology solutions.</p>
      </div>
    </footer>
  );
}
