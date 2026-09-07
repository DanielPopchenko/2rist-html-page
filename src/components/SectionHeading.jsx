import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SectionHeading({ eyebrow, title, description, action = 'See all', actionTo = '/experiences' }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <Link to={actionTo}>
        {action}
        <ArrowUpRight size={17} />
      </Link>
    </div>
  );
}
