import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services', hasDropdown: true, submenu: [
    { label: 'AI/ML Services', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
    { label: 'Automation', href: '#services' },
  ]},
  { label: 'About Us', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <Zap className="navbar__logo-icon" size={28} strokeWidth={2} />
          <span className="navbar__logo-text">
            VARA<span className="navbar__logo-accent">AI</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <a
                href={link.href}
                className="navbar__link"
                onMouseEnter={link.hasDropdown ? () => setDropdownOpen(link.label) : null}
                onMouseLeave={link.hasDropdown ? () => setDropdownOpen(null) : null}
              >
                {link.label}
                {link.hasDropdown && <span className="dropdown-arrow">▼</span>}
              </a>
              {link.hasDropdown && (
                <div className={`dropdown ${dropdownOpen === link.label ? 'dropdown--open' : ''}`}>
                  {link.submenu.map((item) => (
                    <a key={item.label} href={item.href} className="dropdown__item">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="btn-primary navbar__cta">
          Contact Us
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <div key={link.label}>
            <a
              href={link.href}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
            {link.hasDropdown && (
              <div className="navbar__mobile-submenu">
                {link.submenu.map((item) => (
                  <a key={item.label} href={item.href} className="navbar__mobile-submenu-link" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>
      </div>
    </nav>
  );
}
