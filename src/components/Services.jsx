import { motion } from 'framer-motion';
import { Plus, Code, Layout, Globe, Smartphone, Database, ShieldCheck } from 'lucide-react';

const serviceList = [
    {
        number: "01",
        icon: <Code size={24} />,
        title: "Custom Web Development",
        tags: ["React & Vite", "Next.js", "Blazing Fast", "SEO Architecture"]
    },
    {
        number: "02",
        icon: <Layout size={24} />,
        title: "UI/UX Design Strategy",
        tags: ["High-Fidelity", "Wireframing", "User Experience", "Interactive Prototypes"]
    },
    {
        number: "03",
        icon: <Globe size={24} />,
        title: "Enterprise Web Apps",
        tags: ["Dashboards", "SaaS Solutions", "Scalable backend", "Data Visualization"]
    },
    {
        number: "04",
        icon: <Smartphone size={24} />,
        title: "API & Mobile Strategy",
        tags: ["REST APIs", "Integration", "PWA", "Cross-Platform"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-40 bg-bg-dark text-white relative overflow-hidden px-4 md:px-0">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-growaz-yellow/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-growaz-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-growaz-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Our Expertise</span>
                        <h2 className="text-5xl md:text-8xl font-heading font-black leading-tight md:leading-[0.9] tracking-tighter">
                            Services that <br />
                            <span className="font-serif-italic opacity-80 text-growaz-orange">are tailored</span>
                        </h2>
                    </motion.div>

                    <a href="#contact">
                        <motion.button
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="btn-growaz group px-10 py-5 w-full md:w-auto justify-center"
                        >
                            <div className="btn-icon">
                                <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                            </div>
                            Explore Work
                        </motion.button>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {serviceList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[32px] md:rounded-[48px] p-6 md:p-10 flex flex-col justify-between group hover:border-growaz-orange/30 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-8 md:mb-12">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-[18px] md:rounded-2xl flex items-center justify-center text-growaz-orange group-hover:scale-110 group-hover:bg-growaz-orange group-hover:text-white transition-all duration-500 shadow-xl">
                                        {service.icon}
                                    </div>
                                    <span className="text-white/10 text-base md:text-lg font-serif-italic font-black italic">{service.number}</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-heading font-black mb-6 md:mb-8 leading-tight tracking-tight group-hover:text-growaz-orange transition-colors">{service.title}</h3>

                                <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
                                    {service.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[8px] md:text-[9px] font-bold text-white/30 border border-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest group-hover:border-white/10 group-hover:text-white/50 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-start">
                                <a href="#contact">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center text-white/20 group-hover:bg-growaz-orange group-hover:text-white group-hover:border-growaz-orange transition-all duration-500"
                                    >
                                        <Plus size={18} />
                                    </motion.button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
