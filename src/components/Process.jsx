import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, Plus } from 'lucide-react';

const steps = [
    {
        icon: <Search size={24} />,
        title: 'Discovery & Strategy',
        description: 'We start by listening. We dig deep into your business goals, target audience, and competition to build a data-driven roadmap for success.'
    },
    {
        icon: <PenTool size={24} />,
        title: 'UI/UX Design',
        description: 'We translate your brand identity into a stunning visual language, focusing on intuitive, user-centric interfaces that engage visitors.'
    },
    {
        icon: <Code2 size={24} />,
        title: 'Development',
        description: 'We build your site using the latest tech stack, ensuring clean, scalable code that performs flawlessly across all devices.'
    },
    {
        icon: <Rocket size={24} />,
        title: 'Launch & Growth',
        description: 'We launch with confidence, performing rigorous testing, SEO optimization, and performance tuning to ensure day-one readiness.'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-40 bg-bg-dark text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-20 md:mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-growaz-yellow text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
                    >
                        How We Deliver
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-heading font-black leading-[1.1] md:leading-[0.9] tracking-tighter"
                    >
                        A Workflow <br />
                        <span className="font-serif-italic opacity-80">for Excellence.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="absolute top-[4.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative flex flex-col items-center lg:items-start group"
                            >
                                {/* Step Indicator */}
                                <div className="relative mb-10 md:mb-12">
                                    <div className="w-20 h-20 bg-white/[0.03] border border-white/5 rounded-[24px] flex items-center justify-center text-white/40 group-hover:bg-growaz-yellow group-hover:text-black group-hover:border-growaz-yellow transition-all duration-500 z-10 relative">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-bg-dark border border-white/10 flex items-center justify-center text-[10px] font-black text-white/20 group-hover:text-growaz-yellow transition-colors backdrop-blur-md">
                                        0{index + 1}
                                    </div>
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-growaz-yellow/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                <h3 className="text-2xl font-heading font-black mb-6 text-center lg:text-left group-hover:text-growaz-yellow transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed font-medium text-center lg:text-left max-w-[280px]">
                                    {step.description}
                                </p>

                                {/* Mobile Connector */}
                                {index !== steps.length - 1 && (
                                    <div className="h-16 md:h-20 w-px bg-gradient-to-b from-white/10 to-transparent mt-10 md:mt-12 mb-4 lg:hidden" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
