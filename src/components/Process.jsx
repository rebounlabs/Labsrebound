import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import '../styles/Process.css';

const steps = [
    {
        icon: <Search size={32} />,
        title: 'Discovery & Strategy',
        description: 'We start by listening. We dig deep into your business goals, target audience, and competition to build a data-driven roadmap for success. No guesswork, just strategy.'
    },
    {
        icon: <PenTool size={32} />,
        title: 'UI/UX Design',
        description: 'We translate your brand identity into a stunning visual language. Our design phase focuses on creating intuitive, user-centric interfaces that engage visitors and drive conversions.'
    },
    {
        icon: <Code2 size={32} />,
        title: 'Development',
        description: 'This is where magic happens. We build your site using the latest tech stack (React, Node.js), ensuring clean, scalable code that performs flawlessly across all devices and browsers.'
    },
    {
        icon: <Rocket size={32} />,
        title: 'Launch & Growth',
        description: 'We don\'t just hand over keys; we launch with confidence. We perform rigorous testing, SEO optimization, and performance tuning to ensure day-one readiness and long-term growth.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};

const Process = () => {
    return (
        <section id="process" className="process-section">
            <div className="process-bg" />

            <div className="process-container">
                <div className="process-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="process-title"
                    >
                        How We Work
                    </motion.h2>
                    <p className="process-subtitle" style={{ color: 'var(--text-secondary)' }}>
                        A proven workflow designed to deliver excellence, on time and on budget.
                    </p>
                </div>

                <div className="process-steps-wrapper">
                    {/* Connector Line (Desktop) */}
                    <div className="process-connector" />

                    <motion.div
                        className="process-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="process-step"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="icon-wrapper">
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Process;
