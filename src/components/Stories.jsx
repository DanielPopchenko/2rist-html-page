import { ArrowUpRight, Clock } from 'lucide-react';
import { stories } from '../data/travelData';
import { SectionHeading } from './SectionHeading';

export function Stories() {
  return (
    <section className="section section--tint" id="stories">
      <div className="container">
        <SectionHeading
          eyebrow="Travel journal"
          title="Notes from the road"
          description="Practical ideas and personal stories for people who travel with curiosity."
          action="Read the journal"
        />
        <div className="story-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <div className="story-card__image">
                <img src={story.image} alt="" />
                <span>{story.category}</span>
              </div>
              <div className="story-card__body">
                <div className="story-card__meta">
                  <span>By {story.author}</span>
                  <span>
                    <Clock size={14} />
                    {story.readTime}
                  </span>
                </div>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <a href="#newsletter" aria-label={`Read ${story.title}`}>
                  Read story <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
