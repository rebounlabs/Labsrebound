import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-bg-dark pt-24 md:pt-32 pb-12 relative overflow-hidden px-4 md:px-0">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="container-custom relative z-10 font-heading">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 mb-20 md:mb-24 text-center md:text-left">

                    {/* Brand Column */}
                    <div className="max-w-xs space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
                        <a href="#" className="text-3xl font-black tracking-tighter flex items-center gap-1 group">
                            <span className="text-white group-hover:text-growaz-orange transition-colors">Rebound</span>
                            <span className="text-growaz-orange">Labs</span>
                        </a>
                        <p className="text-white/30 text-sm md:text-base leading-relaxed font-bold italic">
                            Minimalism. Performance. Impact. <br className="hidden md:block" /> We build digital empires for the bold.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-12 lg:gap-24 w-full md:w-auto">
                        <div className="space-y-6">
                            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/20">Navigation</h4>
                            <ul className="space-y-4">
                                {['Services', 'About', 'Process', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="text-[11px] md:text-sm font-bold text-white/50 hover:text-growaz-orange transition-colors uppercase tracking-widest">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/20">Social</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Twitter', href: 'https://x.com/rebound_labs' },
                                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rebound-labs-725248395/' },
                                    { name: 'Instagram', href: 'https://www.instagram.com/rebound.labs' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[11px] md:text-sm font-bold text-white/50 hover:text-growaz-yellow transition-colors uppercase tracking-widest">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:text-white hover:border-white/10 transition-all shadow-2xl"
                    >
                        <ArrowUp size={20} md:size={24} />
                    </motion.button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 md:pt-12 border-t border-white/5 gap-8">
                    <p className="text-[8px] md:text-[10px] font-bold text-white/10 uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} Rebound Labs. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[8px] md:text-[10px] font-bold text-white/10 uppercase tracking-[0.4em] hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[8px] md:text-[10px] font-bold text-white/10 uppercase tracking-[0.4em] hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
