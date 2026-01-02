import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Search, Layout } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const yBackground = useTransform(scrollY, [0, 500], [0, 200]);
    const yCards = useTransform(scrollY, [0, 500], [0, -50]);

    // Stagger container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-bg-primary">
            {/* Background Texture & Parallax Decor */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0" />

            <motion.div style={{ y: yBackground }} className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-blue-50 via-indigo-50/50 to-transparent opacity-60 -z-10" />
            <motion.div style={{ y: yBackground }} className="absolute top-20 right-20 w-96 h-96 bg-accent-glow rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={itemVariants}>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-accent font-bold text-xs tracking-wider uppercase mb-8 shadow-sm">
                                    🚀 Kerala's Best Web Development
                                </span>
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-text-primary leading-[1.1] mb-6 tracking-tight">
                                Build Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Digital Empire.</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl font-medium">
                                We craft high-performance websites and digital experiences that drive growth, build trust, and set you apart from the competition.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
                                <motion.a
                                    href="mailto:labsrebound@gmail.com?subject=Interest%20in%20Working%20Together&body=Hi%20ReboundLabs%20Team,%0D%0A%0D%0AI'm%20interested%20in%20starting%20a%20project%20with%20you.%20Here%20are%20some%20details:"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                                >
                                    Start Your Project
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </motion.a>
                            </motion.div>

                            {/* Trust Signals */}
                            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-8 border-t border-slate-200/60">
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Zap size={20} className="text-accent" />
                                    <span className="text-sm font-bold">Fast Speed</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Search size={20} className="text-accent" />
                                    <span className="text-sm font-bold">SEO Ready</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Shield size={20} className="text-accent" />
                                    <span className="text-sm font-bold">Secure</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Layout size={20} className="text-accent" />
                                    <span className="text-sm font-bold">Scalable</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="w-full lg:w-1/2 relative perspective-1000">
                        <motion.div
                            style={{ y: yCards }}
                            initial={{ opacity: 0, rotateX: 10, rotateY: -10 }}
                            animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            {/* Abstract Floating UI Cards */}
                            <div className="relative w-full aspect-square md:aspect-[4/3]">
                                {/* Main Dashboard Card Mockup */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                    className="absolute top-10 left-10 right-0 bottom-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-200/50 border border-white/50 overflow-hidden"
                                >
                                    <div className="h-full w-full flex flex-col p-6">
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-violet-500 shadow-lg shadow-blue-500/30" />
                                            <div className="space-y-3">
                                                <div className="h-4 w-32 bg-slate-200 rounded-full" />
                                                <div className="h-3 w-20 bg-slate-100 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div className="h-28 w-full bg-slate-50 rounded-xl border border-slate-100 p-4">
                                                <div className="flex gap-2 mb-3">
                                                    <div className="h-2 w-full bg-slate-200 rounded-full opacity-60"></div>
                                                    <div className="h-2 w-1/3 bg-blue-500 rounded-full"></div>
                                                </div>
                                                <div className="h-full w-full bg-white rounded-lg border border-slate-100 shadow-sm"></div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-20 w-full bg-slate-50 rounded-xl border border-slate-100" />
                                                <div className="h-20 w-full bg-slate-50 rounded-xl border border-slate-100" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Badge 1 - Performance */}
                                <motion.div
                                    initial={{ scale: 0, x: 20 }}
                                    animate={{ scale: 1, x: 0 }}
                                    transition={{ delay: 0.6, type: "spring" }}
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute top-0 right-10 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 cursor-default"
                                >
                                    <div className="bg-green-50 p-3 rounded-xl text-green-600">
                                        <Zap size={24} fill="currentColor" className="opacity-100" />
                                    </div>
                                    <div className="pr-2">
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Performance</p>
                                        <p className="text-lg font-bold text-slate-900">100%</p>
                                    </div>
                                </motion.div>

                                {/* Floating Badge 2 - Responsive */}
                                <motion.div
                                    initial={{ scale: 0, x: -20 }}
                                    animate={{ scale: 1, x: 0 }}
                                    transition={{ delay: 0.8, type: "spring" }}
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute bottom-5 left-0 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-4 cursor-default"
                                >
                                    <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
                                        <Layout size={24} />
                                    </div>
                                    <div className="pr-2">
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Responsive</p>
                                        <p className="text-lg font-bold text-slate-900">100% Mobile</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
