import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const storyText = "Rebound Labs wasn't built in a boardroom; it was born from a shared obsession with perfect code and pixel-perfect design. We are a Kerala-based collective of digital artisans who believe that a website is your most powerful employee. In a digital landscape cluttered with templates and generic solutions, we cut through the noise. We specialize in crafting bespoke, high-speed, and accessible web experiences that not only tell your story but actively drive your business goals forward.";

    return (
        <section id="about" ref={sectionRef} className="py-40 bg-bg-dark relative overflow-hidden">
            <div className="container-custom relative z-10 text-center">
                <motion.div
                    style={{ opacity, scale }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.span
                        initial={{ opacity: 0, tracking: '0.5em' }}
                        whileInView={{ opacity: 0.4, tracking: '0.3em' }}
                        className="text-white text-xs font-bold uppercase mb-12 block"
                    >
                        The Rebound Labs Story
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.1] mb-12 md:mb-16 tracking-tight">
                        Driven by Passion, <br />
                        <span className="font-serif-italic text-growaz-orange">Defined by Quality.</span>
                    </h2>

                    <div className="relative">
                        <motion.div
                            className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-8 md:p-16 lg:p-20 rounded-[40px] md:rounded-[64px] relative group overflow-hidden shadow-2xl shadow-black/50"
                            whileHover={{ borderColor: 'rgba(255,107,0,0.2)' }}
                        >
                            {/* Decorative Background Glows */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-growaz-orange/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-growaz-orange/30 transition-all duration-700" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-growaz-yellow/10 blur-[100px] rounded-full pointer-events-none" />

                            <p className="text-lg md:text-3xl text-white/70 leading-relaxed font-medium text-left mb-16 relative z-10">
                                {storyText.split(' ').map((word, i) => (
                                    <motion.span
                                        key={word + i}
                                        initial={{ opacity: 0.1, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.012, duration: 0.5 }}
                                        viewport={{ once: false, margin: "-50px" }}
                                        className="inline-block mr-[0.3em] hover:text-white transition-colors cursor-default"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5 pt-12 relative z-10"
                            >
                                <div className="flex gap-16 items-center">
                                    <motion.div whileHover={{ scale: 1.05 }} className="group/stat cursor-default">
                                        <h4 className="text-white font-black text-4xl md:text-5xl mb-2 italic group-hover:text-growaz-orange transition-colors">100%</h4>
                                        <p className="text-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">Satisfaction</p>
                                    </motion.div>
                                    <div className="w-px h-12 bg-white/5" />
                                    <motion.div whileHover={{ scale: 1.05 }} className="group/stat cursor-default">
                                        <h4 className="text-white font-black text-4xl md:text-5xl mb-2 italic group-hover:text-growaz-yellow transition-colors">3X</h4>
                                        <p className="text-white/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">Faster Results</p>
                                    </motion.div>
                                </div>

                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-6 bg-white text-black pl-8 pr-2 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] group/btn hover:bg-growaz-orange hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
                                >
                                    Work With Us
                                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                                        <ArrowRight size={20} />
                                    </div>
                                </motion.a>
                            </motion.div>

                            {/* Border Highlight Effect */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
