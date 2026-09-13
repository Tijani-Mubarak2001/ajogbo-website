import { images } from '../data/images';
import { INSTAGRAM_URL, LINKEDIN_URL } from '../data/content';
import './Footer.css';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Impact', href: '#impact' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get Involved', href: '#get-involved' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={images.logo} alt="Ajogbo Grammar School logo" className="footer__logo-img" />
            <div className="footer__logo-text">
              <span className="footer__logo-top">AJOGBO</span>
              <span className="footer__logo-bottom">FUTURE LEADERS INITIATIVE</span>
            </div>
          </div>
          <p className="footer__tagline">
            Volunteer Mentorship, Career Development &amp; Educational Support Programme
          </p>
          <p className="footer__mission">
            Building stronger pathways from education to opportunity.
          </p>
        </div>

        {/* Nav */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__nav-heading">Navigation</h4>
          <ul className="footer__nav-list" role="list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <button className="footer__nav-link" onClick={() => handleNav(link.href)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Info */}
        <div className="footer__info">
          <h4 className="footer__nav-heading">About</h4>
          <p className="footer__info-text">
            An alumni-led community initiative<br />
            Ajogbo Grammar School<br />
            Ajibode Ota, Ogun State
          </p>

          {(INSTAGRAM_URL || LINKEDIN_URL) && (
            <div className="footer__socials">
              {INSTAGRAM_URL && (
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                  Instagram
                </a>
              )}
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                  LinkedIn
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {year} Ajogbo Future Leaders Initiative. All rights reserved.
          </p>
          <p className="footer__school">
            Ajogbo Grammar School · Ajibode Ota · Ogun State · Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
