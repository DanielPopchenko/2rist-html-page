import { SiteNav } from './SiteNav';

export function PageHero({ eyebrow, title, description }) {
  return (
    <header className="page-hero">
      <SiteNav light />
      <div className="page-hero__content container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
