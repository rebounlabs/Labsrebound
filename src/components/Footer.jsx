import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12 md:py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand Section */}
                    <div className="text-center md:text-left space-y-4">
                        <a href="#" className="text-2xl font-bold font-heading text-slate-900 tracking-tight block">
                            Rebound<span className="text-accent">Labs</span>
                        </a>
                        <p className="text-slate-500 font-medium text-sm md:text-base">
                            Minimalism. Performance. Impact.
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                            © {new Date().getFullYear()} Rebound Labs. All rights reserved.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        <motion.a
                            href="https://x.com/rebound_labs"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: '#1DA1F2' }}
                            className="text-slate-400 hover:text-blue-400 transition-colors p-2"
                            aria-label="Twitter (X)"
                        >
                            <Twitter size={24} strokeWidth={1.5} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/rebound-labs-725248395/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: '#0A66C2' }}
                            className="text-slate-400 hover:text-blue-700 transition-colors p-2"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} strokeWidth={1.5} />
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/rebound.labs"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: '#E1306C' }}
                            className="text-slate-400 hover:text-pink-600 transition-colors p-2"
                            aria-label="Instagram"
                        >
                            <Instagram size={24} strokeWidth={1.5} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
