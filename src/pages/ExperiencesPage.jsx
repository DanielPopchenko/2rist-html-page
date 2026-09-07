import { useMemo, useState } from 'react';
import { ArrowUpRight, Clock, MapPin, SlidersHorizontal, Star } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const trips = [
  { title: 'Aegean under sail', place: 'Cyclades, Greece', type: 'Ocean', days: 6, rating: 4.9, price: 1280, image: '/images/activities-1.jpg' },
  { title: 'Dolomites vertical', place: 'South Tyrol, Italy', type: 'Adventure', days: 5, rating: 4.8, price: 940, image: '/images/activities-2.jpg' },
  { title: 'Powder and onsens', place: 'Hokkaido, Japan', type: 'Winter', days: 8, rating: 4.9, price: 1690, image: '/images/activities-3.jpg' },
  { title: 'Madeira on foot', place: 'Madeira, Portugal', type: 'Nature', days: 7, rating: 4.7, price: 860, image: '/images/activities-4.jpg' },
  { title: 'Island hopping, slowly', place: 'Sporades, Greece', type: 'Ocean', days: 9, rating: 4.8, price: 1540, image: '/images/activities-1.jpg' },
  { title: 'The quiet side of winter', place: 'Tyrol, Austria', type: 'Winter', days: 6, rating: 4.9, price: 1320, image: '/images/activities-3.jpg' },
];

const filters = ['All', 'Ocean', 'Adventure', 'Winter', 'Nature'];

export function ExperiencesPage({ onBook }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleTrips = useMemo(
    () => trips.filter((trip) => activeFilter === 'All' || trip.type === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <PageHero
        eyebrow="Small-group journeys"
        title="Travel that moves you."
        description="Explore flexible itineraries built around remarkable places, trusted local hosts, and enough room to make the trip your own."
      />
      <main className="listing-page container">
        <div className="filter-bar">
          <div className="filter-bar__label"><SlidersHorizontal size={17} /> Filter by feeling</div>
          <div className="filter-bar__options">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <span>{visibleTrips.length} journeys</span>
        </div>

        <div className="trip-grid">
          {visibleTrips.map((trip) => (
            <article className="trip-card" key={trip.title}>
              <div className="trip-card__image">
                <img src={trip.image} alt="" />
                <span>{trip.type}</span>
                <div><Star size={14} fill="currentColor" /> {trip.rating}</div>
              </div>
              <div className="trip-card__body">
                <p><MapPin size={14} /> {trip.place}</p>
                <h2>{trip.title}</h2>
                <div className="trip-card__details">
                  <span><Clock size={14} /> {trip.days} days</span>
                  <strong>From ${trip.price.toLocaleString()}</strong>
                </div>
                <button type="button" onClick={() => onBook(trip.title)}>
                  View journey <ArrowUpRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
