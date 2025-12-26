import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Globe, Database, Cloud, ShieldCheck, Zap } from 'lucide-react';
import '../styles/Services.css'; // Keeping for any grid specifics, can be migrated if needed

const services = [
    {
        icon: <Code size={32} />,
        color: "text-blue-600",
        bg: "bg-blue-50",
        title: 'Custom Website Development',
        description: 'Blazing fast, SEO-ready code built with React. No template builders, just pure performance.',
    },
    {
        icon: <Layout size={32} />,
        color: "text-purple-600",
        bg: "bg-purple-50",
        title: 'UI/UX Design Strategy',
        description: 'Intuitive wireframes and high-fidelity prototypes that turn visitors into loyal customers.',
    },
    {
        icon: <Globe size={32} />,
        color: "text-teal-600",
        bg: "bg-teal-50",
        title: 'Enterprise Web Apps',
        description: 'Complex, data-driven dashboards and applications tailored to streamline your operations.',
    },
    {
        icon: <Smartphone size={32} />,
        color: "text-pink-600",
        bg: "bg-pink-50",
        title: 'API & Integration',
        description: 'Seamlessly connect with CRMs, payment gateways, and third-party tools.',
    },
    {
        icon: <Database size={32} />,
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: 'CMS Solutions',
        description: 'Headless CMS implementation giving you flexibility without compromising speed.',
    },
    {
        icon: <ShieldCheck size={32} />,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        title: 'Security-Led Engineering',
        description: 'Security is architecture, not an afterthought. We implement strict audits and hardened configurations to protect your users and data from day one.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6 tracking-tight">
                            Engineering Excellence.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We don't just build websites; we build comprehensive digital solutions designed to scale with your ambition.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-2xl p-1 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            {/* Gradient Border Reveal */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[2px]" />

                            <div className="bg-white h-full w-full rounded-xl p-8 border border-slate-100 group-hover:border-transparent transition-colors">
                                <div className={`w-14 h-14 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
