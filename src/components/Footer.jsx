import { ArrowRight, Instagram, Mail } from 'lucide-react';

export function Footer({ onSubscribe, subscriptionMessage }) {
  return (
    <footer className="footer" id="newsletter">
      <div className="container">
        <div className="newsletter">
          <div>
            <span className="eyebrow eyebrow--light">A little escape, by email</span>
            <h2>Stories worth traveling for.</h2>
            <p>Fresh places, honest guides, and one beautiful idea for your next trip.</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubscribe(new FormData(event.currentTarget).get('email'));
              event.currentTarget.reset();
            }}
          >
            <label>
              <Mail size={18} />
              <input name="email" type="email" required placeholder="Your email address" />
            </label>
            <button type="submit" aria-label="Subscribe">
              <span>Join us</span><ArrowRight />
            </button>
          </form>
          {subscriptionMessage && <p className="form-message" role="status">{subscriptionMessage}</p>}
        </div>

        <div className="footer__bottom">
          <div className="footer__brand">
            <img src="/images/logo.svg" alt="2rism" />
            <p>Travel far. Feel at home.</p>
          </div>
          <div className="footer__links">
            <a href="#experiences">Experiences</a>
            <a href="#stories">Journal</a>
            <a href="#about">Our story</a>
          </div>
          <div className="footer__social">
            <a href="mailto:hello@2rism.travel" aria-label="Email 2rism"><Mail /></a>
            <a href="#home" aria-label="2rism on Instagram"><Instagram /></a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} 2rism. Made for curious people.</p>
      </div>
    </footer>
  );
}
