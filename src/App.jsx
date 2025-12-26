import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (e.g., assets, fonts)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s snappy delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-wrapper bg-white relative">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <main>
            <Navbar />
            <Hero />
            <WhyUs />
            <About />
            <Services />
            <Process />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
