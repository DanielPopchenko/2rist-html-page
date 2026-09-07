import { ArrowUpRight } from 'lucide-react';

export function SectionHeading({ eyebrow, title, description, action = 'See all' }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <a href="#newsletter">
        {action}
        <ArrowUpRight size={17} />
      </a>
    </div>
  );
}
