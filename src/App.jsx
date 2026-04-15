import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Loader from './components/Loader';
import ShowcaseHome from './components/ShowcaseHome';
import './styles/App.css';

const HomePage = () => {
  return <ShowcaseHome />;
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <div className="app-wrapper bg-bg-dark relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/blogs"
                element={
                  <>
                    <Navbar />
                    <Blogs />
                    <Footer />
                  </>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <WhatsAppWidget />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
