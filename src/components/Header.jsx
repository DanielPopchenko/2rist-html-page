import { useState } from 'react';
import { CalendarDays, Compass, MapPin, Menu, Search, Sparkles, Users, X } from 'lucide-react';

const navItems = [
  ['Experiences', '#experiences'],
  ['Stories', '#stories'],
  ['About', '#about'],
];

export function Header({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hero" id="home">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="2rism home">
          <img src="/images/logo.svg" alt="2rism" />
        </a>

        <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav__cta" href="#newsletter" onClick={() => setMenuOpen(false)}>
            Plan a trip
          </a>
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

      <div className="hero__content container">
        <div className="eyebrow eyebrow--light">
          <Sparkles size={15} />
          Journeys, thoughtfully made
        </div>
        <h1>Go somewhere that <em>stays with you.</em></h1>
        <p>
          Handpicked places, meaningful experiences, and the freedom to travel at your own pace.
        </p>
        <a className="hero__link" href="#experiences">
          <Compass size={19} />
          Explore this season
        </a>
      </div>

      <form
        className="trip-search container"
        onSubmit={(event) => {
          event.preventDefault();
          onSearch();
        }}
      >
        <label className="search-field">
          <MapPin />
          <span>
            <small>Where</small>
            <input aria-label="Destination" placeholder="Try Madeira" />
          </span>
        </label>
        <label className="search-field">
          <CalendarDays />
          <span>
            <small>When</small>
            <input aria-label="Travel date" type="date" />
          </span>
        </label>
        <label className="search-field">
          <Users />
          <span>
            <small>Travelers</small>
            <select aria-label="Number of travelers" defaultValue="2">
              <option value="1">1 traveler</option>
              <option value="2">2 travelers</option>
              <option value="3">3 travelers</option>
              <option value="4">4+ travelers</option>
            </select>
          </span>
        </label>
        <button className="search-button" type="submit" aria-label="Search trips">
          <Search />
          <span>Find a trip</span>
        </button>
      </form>
    </header>
  );
}
