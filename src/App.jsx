import { useState } from 'react';
import { About } from './components/About';
import { ExperienceGrid } from './components/ExperienceGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Stories } from './components/Stories';

function App() {
  const [notice, setNotice] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 3200);
  };

  return (
    <>
      <Header
        onSearch={() => {
          document.querySelector('#experiences')?.scrollIntoView({ behavior: 'smooth' });
          showNotice('We found four handpicked ideas for you.');
        }}
      />
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
