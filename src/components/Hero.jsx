import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-28 md:pt-32 overflow-hidden px-4 md:px-8">
            {/* Animated Aurora Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square pointer-events-none opacity-40 mix-blend-screen">
                <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 rounded-full bg-growaz-orange/30 blur-[100px] animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-3/4 h-3/4 rounded-full bg-growaz-yellow/30 blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full bg-growaz-orange/40 blur-[80px] animate-slow-spin" />
            </div>

            <motion.div
                style={{ y: y1, scale }}
                className="container-custom relative z-10 text-center"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center max-w-5xl mx-auto"
                >
                    {/* Top Badge */}
                    <motion.div variants={itemVariants} className="mb-8 md:mb-12">
                        <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] backdrop-blur-md shadow-[0_0_20px_rgba(255,107,43,0.15)]">
                            <Sparkles size={14} className="text-growaz-orange" />
                            Elevate Your Digital Presence
                        </span>
                    </motion.div>

                    {/* Main Massive Heading */}
                    <motion.h1
                        className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-heading font-black text-white leading-[0.85] tracking-tighter mb-8 md:mb-12"
                    >
                        <motion.div variants={itemVariants} className="overflow-hidden">
                            <span className="block">Crafting</span>
                        </motion.div>
                        <motion.div variants={itemVariants} className="overflow-hidden flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                            <span className="block italic font-serif-italic font-normal text-growaz-orange pr-2">Premium</span>
                            <span className="block">Digital</span>
                        </motion.div>
                        <motion.div variants={itemVariants} className="overflow-hidden">
                            <span className="block">Experiences.</span>
                        </motion.div>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        className="text-white/50 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 md:mb-16 font-body font-normal leading-relaxed"
                    >
                        We are a highly specialized web studio transforming bold ideas into high-performance, visually stunning realities.
                    </motion.p>

                    {/* CTA Group */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
                        <a href="#services">
                            <button className="relative group px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-sm overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-105 active:scale-95">
                                <span className="relative z-10 flex items-center gap-3">
                                    Explore Our Work
                                    <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-growaz-orange to-growaz-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Floating abstract geometrical shapes (desktop only) */}
            <motion.div
                style={{ y: y2 }}
                className="hidden lg:block absolute bottom-[10%] left-[10%] w-32 h-32 border border-white/5 rounded-[40px] rotate-12 backdrop-blur-sm"
            />
            <motion.div
                style={{ y: y1 }}
                className="hidden lg:block absolute top-[20%] right-[10%] w-24 h-24 border border-growaz-orange/20 rounded-full backdrop-blur-sm"
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
