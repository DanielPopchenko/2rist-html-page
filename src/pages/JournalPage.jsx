import { ArrowRight, Clock } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { stories } from '../data/travelData';

const articles = [
  ...stories,
  { title: 'What to pack when the plan is no plan', excerpt: 'A lighter bag creates space for spontaneous train rides, hidden swimming spots, and the things you bring home.', image: '/images/activities-4.jpg', author: 'Nora Lee', readTime: '5 min read', category: 'Travel well' },
  { title: 'The ritual of arriving by water', excerpt: 'Some places reveal themselves best from the deck of a small boat, when the skyline rises slowly from the horizon.', image: '/images/activities-1.jpg', author: 'Theo Martins', readTime: '7 min read', category: 'Field notes' },
  { title: 'Finding warmth in a winter town', excerpt: 'Beyond the slopes: family-run kitchens, outdoor baths, and the particular hush that follows fresh snow.', image: '/images/activities-3.jpg', author: 'Emi Sato', readTime: '9 min read', category: 'Places' },
];

export function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="The 2rism journal"
        title="Stories for the curious."
        description="Dispatches, useful guides, and quieter observations from people who believe the journey matters as much as the destination."
      />
      <main className="journal-page container">
        <article className="featured-story">
          <img src={featured.image} alt="" />
          <div>
            <span className="eyebrow">{featured.category}</span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="article-meta">By {featured.author} <i /> <Clock size={14} /> {featured.readTime}</div>
            <button type="button">Read the story <ArrowRight size={17} /></button>
          </div>
        </article>

        <div className="journal-intro">
          <h2>Latest stories</h2>
          <p>Ideas to take with you, wherever you go next.</p>
        </div>
        <div className="article-grid">
          {rest.map((article) => (
            <article className="article-card" key={article.title}>
              <img src={article.image} alt="" />
              <span className="eyebrow">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                {article.author} <i /> <Clock size={13} /> {article.readTime}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
