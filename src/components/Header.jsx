import { CalendarDays, Compass, MapPin, Search, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiteNav } from './SiteNav';

export function Header({ onSearch }) {
  return (
    <header className="hero" id="home">
      <SiteNav />

      <div className="hero__content container">
        <div className="eyebrow eyebrow--light">
          <Sparkles size={15} />
          Journeys, thoughtfully made
        </div>
        <h1>Go somewhere that <em>stays with you.</em></h1>
        <p>
          Handpicked places, meaningful experiences, and the freedom to travel at your own pace.
        </p>
        <Link className="hero__link" to="/experiences">
          <Compass size={19} />
          Explore this season
        </Link>
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
