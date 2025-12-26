const CountUp = ({ to, suffix = '', duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10px" });
    const motionValue = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(motionValue, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (value) => {
                    setDisplayValue(Math.floor(value));
                }
            });
            return () => controls.stop();
        }
    }, [inView, motionValue, to, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {displayValue}{suffix}
        </span>
    );
};

const About = () => {
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
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom easing
        }
    };

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Visual Accent: Subtle Grid/Noise Background (Optional) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
            <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    {/* Left Column: Heading & Sticky */}
                    <div className="lg:w-5/12 lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="block text-sm font-bold tracking-[0.2em] text-accent mb-6 uppercase">
                                About Rebound Labs
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 leading-[1.15] mb-8">
                                Driven by Passion, <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-600 animate-gradient-x">
                                    Defined by Quality.
                                </span>
                            </h2>
                            <div className="h-1 w-20 bg-accent rounded-full" />
                        </motion.div>
                    </div>

                    {/* Right Column: Content & Stats */}
                    <div className="lg:w-7/12">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-10"
                        >
                            <motion.div variants={itemVariants} className="space-y-6 max-w-[65ch]">
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    Rebound Labs wasn't built in a boardroom; it was born from a shared obsession with perfect code and pixel-perfect design. We are a Kerala-based collective of digital artisans who believe that a website is your most powerful employee.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    In a digital landscape cluttered with templates and generic solutions, <strong className="text-slate-900 font-semibold">we cut through the noise.</strong> We specialize in crafting bespoke, high-speed, and accessible web experiences that not only tell your story but actively drive your business goals forward.
                                </p>
                            </motion.div>

                            {/* Core Differentiator Block */}
                            <motion.div
                                variants={itemVariants}
                                className="pl-6 border-l-4 border-accent/20 my-10 py-2"
                            >
                                <p className="text-2xl font-heading text-slate-900 italic">
                                    "Minimalism meets Performance."
                                </p>
                                <p className="text-sm text-slate-500 mt-2">
                                    Our core philosophy for building the future.
                                </p>
                            </motion.div>

                            {/* Stats Grid */}
                            <motion.div
                                variants={itemVariants}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10 border-t border-slate-100"
                            >
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-2 whitespace-nowrap">
                                        QUALITY
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assured</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-slate-900 mb-2 tabular-nums">
                                        <CountUp to={100} suffix="%" />
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Satisfaction</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-slate-900 mb-2 tabular-nums">
                                        24/7
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Support</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-slate-900 mb-2 tabular-nums">
                                        <CountUp to={3} suffix="X" />
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Faster</p>
                                </div>
                            </motion.div>

                            {/* Soft CTA */}
                            <motion.div variants={itemVariants}>
                                <a href="#contact" className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-accent transition-colors group text-lg">
                                    Contact Us
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
