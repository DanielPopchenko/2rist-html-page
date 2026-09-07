import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About';
import { ExperienceGrid } from './components/ExperienceGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SiteNav } from './components/SiteNav';
import { Stories } from './components/Stories';
import { AboutPage } from './pages/AboutPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { JournalPage } from './pages/JournalPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage({ onSearch }) {
  return (
    <>
      <Header onSearch={onSearch} />
      <main>
        <div className="trust-strip">
          <div className="container">
            <span>Curated, never crowded</span>
            <span>Local experts</span>
            <span>Flexible by design</span>
            <span>Support, wherever you are</span>
          </div>
        </div>
        <ExperienceGrid />
        <Stories />
        <About />
      </main>
    </>
  );
}

function App() {
  const [notice, setNotice] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const navigate = useNavigate();

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 3200);
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onSearch={() => {
                navigate('/experiences');
                showNotice('We found six handpicked ideas for you.');
              }}
            />
          }
        />
        <Route path="/experiences" element={<ExperiencesPage onBook={(trip) => showNotice(`${trip} added to your shortlist.`)} />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={
            <main className="not-found">
              <SiteNav light />
              <div><span className="eyebrow">404</span><h1>That path wandered off.</h1><Link to="/">Back to 2rism</Link></div>
            </main>
          }
        />
      </Routes>
      <Footer
        subscriptionMessage={subscriptionMessage}
        onSubscribe={(email) => {
          setSubscriptionMessage(`Welcome aboard — your first note is heading to ${email}.`);
        }}
      />
      {notice && <div className="toast" role="status">{notice}</div>}
    </>
  );
}

export default App;
