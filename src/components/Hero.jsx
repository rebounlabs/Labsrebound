import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Search, Layout } from 'lucide-react';

const Hero = () => {
    const iconVariants = {
        animate: (i) => ({
            y: [0, -10, 0], // Reduced for mobile
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
            transition: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
            }
        })
    };

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-28 md:pt-20 overflow-hidden px-4">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[800px] h-[280px] md:h-[500px] bg-growaz-orange/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none" />

            {/* Floating Icons - Subtle on Mobile */}
            <motion.div custom={1} variants={iconVariants} animate="animate" className="absolute top-[12%] left-[8%] md:left-[15%] text-growaz-orange/20 opacity-30 md:opacity-100">
                <Zap className="w-10 h-10 md:w-20 md:h-20" strokeWidth={1} />
            </motion.div>
            <motion.div custom={2} variants={iconVariants} animate="animate" className="absolute top-[18%] right-[8%] md:right-[15%] text-growaz-yellow/20 opacity-30 md:opacity-100">
                <Shield className="w-12 h-12 md:w-24 md:h-24" strokeWidth={1} />
            </motion.div>

            <div className="container-custom relative z-10 text-center">
                <div className="flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 md:mb-8"
                    >
                        <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-growaz-orange font-bold text-[8px] md:text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm">
                            🚀 Kerala's Elite Web Engineering Studio
                        </span>
                    </motion.div>

                    {/* Main Hero Box */}
                    <div className="relative border border-white/10 rounded-[40px] md:rounded-[48px] px-6 py-14 md:px-8 md:py-24 bg-white/[0.01] backdrop-blur-[2px] max-w-5xl w-full">

                        {/* Corner Markers */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 w-1 md:w-1.5 h-1 md:h-1.5 bg-growaz-orange/40 rounded-full" />
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-1 md:w-1.5 h-1 md:h-1.5 bg-growaz-orange/40 rounded-full" />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-1 md:w-1.5 h-1 md:h-1.5 bg-growaz-orange/40 rounded-full" />
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-1 md:w-1.5 h-1 md:h-1.5 bg-growaz-orange/40 rounded-full" />

                        {/* Badges - Repositioned and Visible on Mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-2 md:-right-8 top-[50%] md:top-[52%] flex items-center gap-2 bg-growaz-orange px-4 py-2 md:px-6 md:py-3 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white shadow-2xl shadow-growaz-orange/20 z-20"
                        >
                            <div className="w-0 h-0 border-t-[4px] md:border-t-[6px] border-t-transparent border-r-[6px] md:border-r-[10px] border-r-growaz-orange border-b-[4px] md:border-b-[6px] border-b-transparent absolute -left-1.5 md:-left-2" />
                            Engineering
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 }}
                            className="absolute -left-2 md:-left-8 top-[30%] md:top-[32%] flex items-center gap-2 bg-growaz-yellow px-4 py-2 md:px-6 md:py-3 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black shadow-2xl shadow-growaz-yellow/20 z-20"
                        >
                            Strategic
                            <div className="w-0 h-0 border-t-[4px] md:border-t-[6px] border-t-transparent border-l-[6px] md:border-l-[10px] border-l-growaz-yellow border-b-[4px] md:border-b-[6px] border-b-transparent absolute -right-1.5 md:-right-2" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.9] mb-8 md:mb-10 tracking-tighter"
                        >
                            Build Your <br />
                            <span className="font-serif-italic opacity-80 text-growaz-orange">Empire.</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto mb-10 md:mb-16 font-medium leading-relaxed italic"
                        >
                            We craft high-performance digital experiences that drive growth, build trust, and set you apart.
                        </motion.p>
                    </div>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 md:mt-16"
                    >
                        <a href="#contact" className="inline-block">
                            <button className="btn-growaz group py-4 px-10 md:py-5 md:px-12 text-[10px] md:text-sm tracking-widest uppercase font-black overflow-hidden relative shadow-2xl shadow-growaz-orange/20">
                                <span className="relative z-10 flex items-center gap-3">
                                    <span className="btn-icon">
                                        <ArrowRight size={14} md:size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    Get Started
                                </span>
                                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-10" />
                            </button>
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-48 bg-gradient-to-t from-bg-dark to-transparent" />
        </section>
    );
};

export default Hero;
