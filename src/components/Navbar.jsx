import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { images } from '../data/images';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get Involved', href: '#get-involved' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner container">
          {/* Logo */}
          <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')} aria-label="Ajogbo Future Leaders Initiative — home">
            <img src={images.logo} alt="Ajogbo Grammar School logo" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-top">AJOGBO</span>
              <span className="navbar__logo-bottom">FUTURE LEADERS</span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className="navbar__link"
                  onClick={() => handleNavClick(link.href)}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            className="btn btn--primary navbar__cta"
            onClick={() => handleNavClick('#get-involved')}
          >
            Join the Volunteer Team
          </button>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
          <ul className="navbar__mobile-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  className="navbar__mobile-link"
                  onClick={() => handleNavClick(link.href)}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="btn btn--primary navbar__mobile-cta"
            onClick={() => handleNavClick('#get-involved')}
            tabIndex={menuOpen ? 0 : -1}
          >
            Join the Volunteer Team
          </button>
        </div>
      </nav>
      {/* Spacer so content doesn't hide under fixed nav */}
      <div className="navbar__spacer" aria-hidden="true" />
    </>
  );
}
