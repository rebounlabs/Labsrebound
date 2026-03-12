import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus, Code, Layout, Globe, Smartphone, CircleDashed } from 'lucide-react';

const serviceList = [
    {
        number: "01",
        icon: <Code size={30} />,
        title: "Custom Web Development",
        tags: ["React & Vite", "Next.js", "Blazing Fast", "SEO Architecture"],
        color: "from-blue-500 to-cyan-400"
    },
    {
        number: "02",
        icon: <Layout size={30} />,
        title: "UI/UX Design Strategy",
        tags: ["High-Fidelity", "Wireframing", "User Experience", "Interactive Prototypes"],
        color: "from-growaz-orange to-growaz-yellow"
    },
    {
        number: "03",
        icon: <Globe size={30} />,
        title: "Enterprise Web Apps",
        tags: ["Dashboards", "SaaS Solutions", "Scalable backend", "Data Visualization"],
        color: "from-purple-500 to-pink-500"
    },
    {
        number: "04",
        icon: <Smartphone size={30} />,
        title: "API & Mobile Strategy",
        tags: ["REST APIs", "Integration", "PWA", "Cross-Platform"],
        color: "from-green-400 to-emerald-600"
    }
];

const Card = ({ service, i, progress, range, targetScale }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 40}px)` }}
                className="relative flex flex-col md:flex-row max-w-5xl w-full h-[500px] md:h-[600px] rounded-[40px] p-8 md:p-14 bg-bg-card border border-white/5 overflow-hidden origin-top shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${service.color} opacity-10 blur-[100px] rounded-full pointer-events-none`} />

                <div className="flex flex-col justify-between w-full relative z-10">
                    <div>
                        <div className="flex justify-between items-start mb-10 md:mb-16">
                            <motion.div
                                className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-[20px] flex items-center justify-center text-white shadow-xl shadow-black/20`}
                            >
                                {service.icon}
                            </motion.div>
                            <span className="text-white/10 text-4xl md:text-6xl font-serif-italic font-black italic">{service.number}</span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight tracking-tight text-white">{service.title}</h3>

                        <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-[9px] md:text-xs font-bold text-white/50 border border-white/10 px-4 py-2 md:px-5 md:py-2.5 rounded-full uppercase tracking-widest bg-white/[0.02] backdrop-blur-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Services = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="services" className="bg-bg-dark text-white relative">
            {/* Header intro */}
            <div className="h-[40vh] flex flex-col items-center justify-center sticky top-0 z-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="text-growaz-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Our Expertise</span>
                    <h2 className="text-[11vw] sm:text-5xl md:text-8xl font-heading font-black leading-tight tracking-tighter">
                        Services that <br />
                        <span className="font-serif-italic bg-gradient-to-r from-growaz-orange to-growaz-yellow text-transparent bg-clip-text">Deliver.</span>
                    </h2>
                </motion.div>
            </div>

            {/* Stacked Cards */}
            <div ref={container} className="relative z-10 pb-[20vh]" style={{ marginTop: '10vh' }}>
                {serviceList.map((service, i) => {
                    const targetScale = 1 - ((serviceList.length - i) * 0.05);
                    return (
                        <Card
                            key={i}
                            i={i}
                            service={service}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
