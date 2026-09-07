import { ArrowRight, Check } from 'lucide-react';

export function About() {
  return (
    <section className="section container about" id="about">
      <div className="about__image">
        <img src="/images/about-us.jpg" alt="The 2rism team planning a journey" />
        <div className="about__stat">
          <strong>4.9</strong>
          <span>average traveler rating</span>
        </div>
      </div>
      <div className="about__content">
        <span className="eyebrow">Travel with people who care</span>
        <h2>Less planning.<br />More being there.</h2>
        <p>
          We started 2rism to make meaningful travel feel simple. Every place is visited, every
          host is known, and every itinerary leaves room for the unexpected.
        </p>
        <ul>
          <li><Check size={17} />Independent stays and local hosts</li>
          <li><Check size={17} />Flexible plans, built around you</li>
          <li><Check size={17} />Human support from start to finish</li>
        </ul>
        <a className="text-link" href="#newsletter">
          Meet our travel designers <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
