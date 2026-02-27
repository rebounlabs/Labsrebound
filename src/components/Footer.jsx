import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-bg-dark pt-32 pb-12 relative overflow-hidden">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="max-w-xs space-y-8">
                        <a href="#" className="text-3xl font-heading font-black tracking-tighter flex items-center gap-1 group">
                            <span className="text-white group-hover:text-growaz-orange transition-colors">Rebound</span>
                            <span className="text-growaz-orange">Labs</span>
                        </a>
                        <p className="text-white/30 text-base leading-relaxed font-medium italic">
                            Minimalism. Performance. Impact. We build digital empires for the bold.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/20">Navigation</h4>
                            <ul className="space-y-4">
                                {['Services', 'About', 'Process', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="text-sm font-bold text-white/50 hover:text-growaz-orange transition-colors uppercase tracking-widest">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/20">Social</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Twitter', href: 'https://x.com/rebound_labs' },
                                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rebound-labs-725248395/' },
                                    { name: 'Instagram', href: 'https://www.instagram.com/rebound.labs' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white/50 hover:text-growaz-yellow transition-colors uppercase tracking-widest">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.9 }}
                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-colors"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
                    <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} Rebound Labs. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em] hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[10px] font-bold text-white/10 uppercase tracking-[0.4em] hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
