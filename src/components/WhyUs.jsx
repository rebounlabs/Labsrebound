import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Zap, Globe, Star } from 'lucide-react';
import { useRef } from 'react';

const reasons = [
    {
        icon: <Users size={32} />,
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        glow: "bg-blue-500/10",
        title: 'Young & Ambitious',
        description: 'A team of digital natives who live and breathe modern web technology. No legacy code, just cutting-edge solutions.'
    },
    {
        icon: <Zap size={32} />,
        color: "bg-growaz-orange/10 text-growaz-orange border-growaz-orange/20",
        glow: "bg-growaz-orange/10",
        title: 'Rapid Delivery',
        description: "We don't waste time in endless meetings. We ship high-quality code fast, helping you go to market before competition."
    },
    {
        icon: <Globe size={32} />,
        color: "bg-growaz-yellow/10 text-growaz-yellow border-growaz-yellow/20",
        glow: "bg-growaz-yellow/10",
        title: 'Global Standards',
        description: 'Based in Kochi, Kerala but building for the world. As a top web development agency, we adhere to international best practices.'
    }
];

const textVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
};

const WhyUs = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const headerY = useTransform(scrollYProgress, [0, 0.8], [100, 0]);

    return (
        <section ref={sectionRef} className="py-32 md:py-48 bg-bg-dark text-white relative overflow-hidden border-t border-white/5 px-4 md:px-0">
            <div className="container-custom relative z-10">
                <div className="flex flex-col xl:flex-row items-center justify-between mb-24 md:mb-32 text-center xl:text-left gap-12 xl:gap-20">
                    <motion.div style={{ opacity: headerOpacity, y: headerY }} className="max-w-4xl">
                        <span className="text-zinc-300 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-8 block">
                            Why Partner With Us
                        </span>
                        <h2 className="text-[12vw] sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-[0.85] tracking-tighter">
                            Engineering <br />
                            <span className="font-serif-italic bg-gradient-to-r from-growaz-yellow to-growaz-orange text-transparent bg-clip-text">for the Future.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full xl:w-auto"
                    >
                        <div className="flex items-center justify-center xl:justify-start gap-6 bg-white/5 border border-white/10 px-8 py-6 rounded-[2rem] backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="w-12 h-12 bg-growaz-orange/20 rounded-full flex items-center justify-center">
                                <Star className="text-growaz-orange fill-growaz-orange" size={24} />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-black tracking-widest uppercase text-white">50+ Clients</span>
                                <span className="text-[10px] text-zinc-300 tracking-widest uppercase">Worldwide Trust</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 50 }}
                            className="relative p-10 md:p-14 rounded-[40px] md:rounded-[60px] bg-bg-card border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-700 group overflow-hidden shadow-2xl"
                        >
                            {/* Card Glow */}
                            <div className={`absolute -top-20 -right-20 w-64 h-64 ${reason.glow} blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:scale-150`} />

                            <div className={`w-16 h-16 md:w-20 md:h-20 ${reason.color} border rounded-[24px] md:rounded-[28px] flex items-center justify-center mb-10 md:mb-14 group-hover:scale-110 transition-transform duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3)]`}>
                                {reason.icon}
                            </div>

                            <motion.h3
                                variants={textVariants}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                                className="text-3xl md:text-4xl font-heading font-black mb-6 tracking-tight text-white group-hover:text-growaz-orange transition-colors"
                            >
                                {reason.title}
                            </motion.h3>
                            <motion.p
                                variants={textVariants}
                                initial="initial"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                                className="text-zinc-300 text-base md:text-lg leading-relaxed font-body"
                            >
                                {reason.description}
                            </motion.p>

                            <div className="mt-12 md:mt-16 w-12 h-1.5 bg-white/5 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-growaz-orange group-hover:to-growaz-yellow transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
