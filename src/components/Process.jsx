import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    {
        icon: <Search size={32} />,
        title: 'Discovery & Strategy',
        description: 'We start by listening. We dig deep into your business goals, target audience, and competition to build a data-driven roadmap for success.',
        color: 'from-blue-500 to-cyan-400'
    },
    {
        icon: <PenTool size={32} />,
        title: 'UI/UX Design',
        description: 'We translate your brand identity into a stunning visual language, focusing on intuitive, user-centric interfaces that engage visitors.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: <Code2 size={32} />,
        title: 'Development',
        description: 'We build your site using the latest tech stack, ensuring clean, scalable code that performs flawlessly across all devices.',
        color: 'from-growaz-orange to-growaz-yellow'
    },
    {
        icon: <Rocket size={32} />,
        title: 'Launch & Growth',
        description: 'We launch with confidence, performing rigorous testing, SEO optimization, and performance tuning to ensure day-one readiness.',
        color: 'from-green-400 to-emerald-500'
    }
];

const Process = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section id="process" className="py-32 md:py-48 bg-bg-dark text-white relative overflow-hidden px-4 md:px-0" ref={containerRef}>
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none" />

            <motion.div style={{ scale, opacity }} className="container-custom relative z-10">
                <div className="text-center mb-24 md:mb-40">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-growaz-yellow text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] mb-8 block"
                    >
                        Our Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-9xl font-heading font-black leading-[0.85] tracking-tighter"
                    >
                        A Workflow <br />
                        <span className="font-serif-italic opacity-90 bg-gradient-to-r from-growaz-yellow to-growaz-orange text-transparent bg-clip-text">for Excellence.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Glowing Connector Line Desktop */}
                    <div className="absolute top-[5rem] left-0 w-full h-1 bg-white/5 hidden lg:block rounded-full">
                        <motion.div
                            className="h-full bg-gradient-to-r from-growaz-orange to-growaz-yellow rounded-full shadow-[0_0_20px_rgba(255,107,43,0.5)]"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="relative flex flex-col items-center lg:items-start group"
                            >
                                {/* Step Indicator */}
                                <div className="relative mb-12">
                                    <div className={`w-20 h-20 md:w-24 md:h-24 bg-bg-card border border-white/10 rounded-[28px] flex items-center justify-center text-white/50 group-hover:scale-110 transition-transform duration-500 z-10 relative shadow-2xl`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 rounded-[28px] transition-opacity duration-500`} />
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-bg-dark border border-white/20 flex items-center justify-center text-xs font-black text-white group-hover:text-growaz-yellow transition-colors backdrop-blur-xl shadow-xl z-20">
                                        0{index + 1}
                                    </div>
                                    {/* Abstract glow behind the icon */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-full`} />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-heading font-black mb-6 text-center lg:text-left group-hover:text-white transition-colors tracking-tight text-white/80">
                                    {step.title}
                                </h3>
                                <p className="text-white/40 text-sm md:text-base leading-relaxed font-body text-center lg:text-left max-w-[300px]">
                                    {step.description}
                                </p>

                                {/* Mobile Connector */}
                                {index !== steps.length - 1 && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: 80 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="w-1 bg-gradient-to-b from-growaz-orange to-transparent mt-12 mb-4 lg:hidden rounded-full shadow-[0_0_10px_rgba(255,107,43,0.3)]"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Process;
