import { ArrowRight, MapPin } from 'lucide-react';
import { activities } from '../data/travelData';
import { SectionHeading } from './SectionHeading';

export function ExperienceGrid() {
  return (
    <section className="section container" id="experiences">
      <SectionHeading
        eyebrow="Find your element"
        title="Choose how you want to feel"
        description="Small groups, remarkable guides, and experiences that put you inside the story."
      />
      <div className="experience-grid">
        {activities.map((activity, index) => (
          <article className={`experience-card experience-card--${index + 1}`} key={activity.title}>
            <img src={activity.image} alt="" />
            <div className="experience-card__shade" />
            <div className="experience-card__content">
              <span>{activity.tag}</span>
              <h3>{activity.title}</h3>
              <p>
                <MapPin size={14} />
                {activity.location}
              </p>
            </div>
            <button type="button" aria-label={`Explore ${activity.title}`}>
              <ArrowRight />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
