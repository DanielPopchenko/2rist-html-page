import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  ['Experiences', '/experiences'],
  ['Journal', '/journal'],
  ['Our story', '/about'],
];

export function SiteNav({ light = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`nav container ${light ? 'nav--light' : ''}`} aria-label="Main navigation">
      <Link className="brand" to="/" aria-label="2rism home">
        <img src={light ? '/images/black-logo.svg' : '/images/logo.svg'} alt="2rism" />
      </Link>

      <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {navItems.map(([label, path]) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <Link className="nav__cta" to="/experiences" onClick={() => setMenuOpen(false)}>
          Plan a trip
        </Link>
      </div>

      <button
        className="nav__toggle"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
