import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-bg-dark/80 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8'
        }`}
    >
      {/* Subtle Bottom Border Gradient */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-heading tracking-tighter flex items-center gap-1 group"
        >
          <span className="text-white group-hover:text-growaz-orange transition-colors">Rebound</span>
          <span className="text-growaz-orange">Labs</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors py-2 overflow-hidden group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-growaz-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-growaz-orange hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Get a Quote
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="md:hidden fixed inset-0 w-full h-screen bg-bg-dark z-[100] flex flex-col items-center justify-center space-y-8 p-10"
          >
            {/* Header in menu */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center border-b border-white/5">
              <div className="text-2xl font-bold font-heading tracking-tighter flex items-center gap-1">
                <span className="text-white">Rebound</span>
                <span className="text-growaz-orange">Labs</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center space-y-8 w-full">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                  className="text-4xl md:text-5xl font-heading font-black text-white hover:text-growaz-orange transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-xs bg-white text-black text-center py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Your Project
            </motion.a>

            {/* Footer markers in menu */}
            <div className="absolute bottom-10 flex gap-6 text-white/20 text-[10px] font-black uppercase tracking-widest">
              <span>Kerala, India</span>
              <span className="w-1 h-1 bg-white/10 rounded-full my-auto" />
              <span>Global Ops</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
