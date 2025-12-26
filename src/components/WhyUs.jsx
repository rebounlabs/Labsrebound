import { motion } from 'framer-motion';
import { Users, Zap, Globe } from 'lucide-react';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

const WhyUs = () => {
    return (
        <section className="py-20 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <h2 className="sr-only">Why Choose Rebound Labs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={itemVariants}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:shadow-lg hover:border-blue-100 transition-all group"
                    >
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 text-blue-600 group-hover:text-blue-500 group-hover:scale-110 transition-all">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">Young & Ambitious</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We are a team of digital natives who live and breathe modern web technology. No legacy code, just cutting-edge solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={itemVariants}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:shadow-lg hover:border-purple-100 transition-all group"
                    >
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 text-purple-600 group-hover:text-purple-500 group-hover:scale-110 transition-all">
                            <Zap size={28} />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">Rapid Delivery</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We don't waste time in endless meetings. We ship high-quality code fast, helping you go to market before your competition.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={itemVariants}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100/50 hover:shadow-lg hover:border-teal-100 transition-all group"
                    >
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 text-teal-600 group-hover:text-teal-500 group-hover:scale-110 transition-all">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-slate-800 mb-2">Global Standards</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Based in Kerala, building for the world. We adhere to international best practices for performance, accessibility, and SEO.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
