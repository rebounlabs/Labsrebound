import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Loader from './components/Loader';
import './styles/App.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <About />
      <Services />
      <Projects />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
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
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
            <WhatsAppWidget />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
