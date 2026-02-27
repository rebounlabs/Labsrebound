import { motion } from 'framer-motion';
import { Users, Zap, Globe, Star } from 'lucide-react';

const reasons = [
    {
        icon: <Users size={24} />,
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        glow: "bg-blue-500/5",
        title: 'Young & Ambitious',
        description: 'A team of digital natives who live and breathe modern web technology. No legacy code, just cutting-edge solutions.'
    },
    {
        icon: <Zap size={24} />,
        color: "bg-growaz-orange/10 text-growaz-orange border-growaz-orange/20",
        glow: "bg-growaz-orange/5",
        title: 'Rapid Delivery',
        description: "We don't waste time in endless meetings. We ship high-quality code fast, helping you go to market before competition."
    },
    {
        icon: <Globe size={24} />,
        color: "bg-growaz-yellow/10 text-growaz-yellow border-growaz-yellow/20",
        glow: "bg-growaz-yellow/5",
        title: 'Global Standards',
        description: 'Based in Kerala, building for the world. We adhere to international best practices for performance and SEO.'
    }
];

const WhyUs = () => {
    return (
        <section className="py-24 md:py-40 bg-bg-dark text-white relative overflow-hidden border-t border-white/5 px-4 md:px-0">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 text-center md:text-left gap-10 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Why Partner With Us</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight md:leading-[1] tracking-tighter">
                            Engineering <br />
                            <span className="font-serif-italic text-growaz-yellow">for the Future.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-auto"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-4 bg-white/5 border border-white/10 px-6 py-4 md:px-8 md:py-4 rounded-full backdrop-blur-md shadow-xl shadow-black/20">
                            <Star className="text-growaz-orange fill-growaz-orange" size={18} md:size={20} />
                            <span className="text-[10px] md:text-sm font-black tracking-widest uppercase text-white/80">Trusted by 50+ Clients</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-6 md:p-12 rounded-[32px] md:rounded-[52px] bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-500 group overflow-hidden"
                        >
                            {/* Card Glow */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${reason.glow} blur-[60px] rounded-full pointer-events-none`} />

                            <div className={`w-12 h-12 md:w-16 md:h-16 ${reason.color} border rounded-[18px] md:rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-black/50`}>
                                {reason.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-heading font-black mb-4 md:mb-6 tracking-tight group-hover:text-white transition-colors">{reason.title}</h3>
                            <p className="text-white/40 text-[13px] md:text-sm leading-relaxed font-medium">
                                {reason.description}
                            </p>

                            <div className="mt-10 md:mt-12 w-8 h-1 bg-white/5 rounded-full group-hover:w-16 group-hover:bg-growaz-orange transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
