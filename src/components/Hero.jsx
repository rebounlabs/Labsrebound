import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Search, Layout } from 'lucide-react';

const Hero = () => {
    const iconVariants = {
        animate: (i) => ({
            y: [0, -20, 0],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
            transition: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
            }
        })
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden px-4">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-growaz-orange/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            {/* Floating 3D Icons - Optimized for Mobile */}
            <motion.div custom={1} variants={iconVariants} animate="animate" className="absolute top-[15%] left-[5%] md:left-[15%] text-growaz-orange/20 opacity-40 md:opacity-100">
                <Zap className="w-12 h-12 md:w-20 md:h-20" strokeWidth={1} />
            </motion.div>
            <motion.div custom={2} variants={iconVariants} animate="animate" className="absolute top-[20%] right-[5%] md:right-[15%] text-growaz-yellow/20 opacity-40 md:opacity-100">
                <Shield className="w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />
            </motion.div>
            <motion.div custom={3} variants={iconVariants} animate="animate" className="absolute bottom-[15%] left-[10%] md:left-[20%] text-white/10 opacity-30 md:opacity-100">
                <Search className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1} />
            </motion.div>
            <motion.div custom={4} variants={iconVariants} animate="animate" className="absolute bottom-[20%] right-[10%] md:right-[20%] text-growaz-orange/10 opacity-30 md:opacity-100">
                <Layout className="w-14 h-14 md:w-20 md:h-20" strokeWidth={1} />
            </motion.div>

            <div className="container-custom relative z-10 text-center">
                <div className="flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 border border-white/10 text-growaz-orange font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] backdrop-blur-sm">
                            🚀 Kerala's Elite Web Engineering Studio
                        </span>
                    </motion.div>

                    {/* Main Hero Box */}
                    <div className="relative border border-white/10 rounded-[32px] md:rounded-[48px] px-6 py-16 md:px-8 md:py-24 bg-white/[0.01] backdrop-blur-[2px] max-w-5xl w-full">

                        {/* Corner Markers */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 w-1 h-1 md:w-1.5 md:h-1.5 bg-growaz-orange/40 rounded-full" />
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-1 h-1 md:w-1.5 md:h-1.5 bg-growaz-orange/40 rounded-full" />
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-1 h-1 md:w-1.5 md:h-1.5 bg-growaz-orange/40 rounded-full" />
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-1 h-1 md:w-1.5 md:h-1.5 bg-growaz-orange/40 rounded-full" />

                        {/* Badges - Repositioned for better visual flow */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-8 top-[65%] hidden xl:flex items-center gap-2 bg-growaz-orange px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-2xl shadow-growaz-orange/20"
                        >
                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-growaz-orange border-b-[6px] border-b-transparent absolute -left-2" />
                            Engineering
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="absolute -left-8 top-[25%] hidden xl:flex items-center gap-2 bg-growaz-yellow px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-black shadow-2xl shadow-growaz-yellow/20"
                        >
                            Strategic
                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-growaz-yellow border-b-[6px] border-b-transparent absolute -right-2" />
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.95] md:leading-[0.9] mb-8 md:mb-10 tracking-tighter"
                        >
                            Build Your <br />
                            <span className="font-serif-italic opacity-80">Digital Empire.</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/40 text-xs md:text-lg max-w-3xl mx-auto mb-12 md:mb-16 font-medium leading-relaxed italic"
                        >
                            We craft high-performance websites and digital experiences that drive growth, build trust, and set you apart from the competition.
                        </motion.p>
                    </div>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 md:mt-16"
                    >
                        <a href="#contact" className="inline-block">
                            <button className="btn-growaz group py-4 px-8 md:py-5 md:px-10 text-xs md:text-sm tracking-widest uppercase font-black overflow-hidden relative">
                                <span className="relative z-10 flex items-center gap-3">
                                    <span className="btn-icon">
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    Start Your Project
                                </span>
                                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-10" />
                            </button>
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-gradient-to-t from-bg-dark to-transparent" />
        </section>
    );
};

export default Hero;
