import { Globe2, HeartHandshake, Leaf, Users } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const values = [
  { icon: Globe2, title: 'Go deeper', text: 'We favor fewer places, known well, over a checklist of sights.' },
  { icon: HeartHandshake, title: 'Keep it human', text: 'Real local partners and real support, before and during every journey.' },
  { icon: Leaf, title: 'Tread lightly', text: 'Smaller groups and independent stays keep more value in each community.' },
  { icon: Users, title: 'Make room', text: 'Our itineraries have structure, but never so much that discovery disappears.' },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We travel to feel more alive."
        description="2rism is an independent travel studio for people who want to see a place clearly—not rush through it."
      />
      <main className="about-page">
        <section className="about-manifesto container">
          <div>
            <span className="eyebrow">Why we exist</span>
            <h2>A good trip changes the way you see home.</h2>
          </div>
          <div>
            <p>We began around a library table, with too much coffee and one shared frustration: the best travel experiences were often the hardest to find.</p>
            <p>So we built a different kind of travel company—one that starts with people, not packages. Our designers spend time in every region, build lasting relationships with local hosts, and create plans that breathe.</p>
          </div>
        </section>

        <section className="about-photo container">
          <img src="/images/about-us.jpg" alt="The 2rism team working together" />
          <div className="about-photo__quote">
            <span>Our promise</span>
            <blockquote>“We will never send you somewhere we would not be excited to go ourselves.”</blockquote>
          </div>
        </section>

        <section className="values container">
          <span className="eyebrow">How we travel</span>
          <h2>Four things guide every journey.</h2>
          <div className="values__grid">
            {values.map(({ icon: Icon, title, text }, index) => (
              <article key={title}>
                <div><Icon /></div>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
