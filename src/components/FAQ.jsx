import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Why hire a web development company in Kerala over freelancers?",
        answer: "As an established web design company in Kerala, Rebound Labs offers a complete, multi-disciplinary team. We provide end-to-end solutions including UI/UX strategy, scalable enterprise architecture, and ongoing SEO optimization—guaranteeing much higher reliability and quality than a single freelancer."
    },
    {
        question: "Do you provide custom website development or use templates?",
        answer: "We strictly provide custom website development in Kerala. We build every project perfectly tailored to your brand using modern, blazing-fast stacks like React and Next.js. We never use generic, bloated WordPress templates."
    },
    {
        question: "What is the cost of website development in Kerala?",
        answer: "The cost depends heavily on the features (e.g., a simple landing page vs. complex ecommerce website development). We provide highly competitive pricing for world-class quality. Contact us for a free, exact quote tailored to your project requirements."
    },
    {
        question: "Are you based in Kochi? Do you work with global clients?",
        answer: "Yes, our core engineering team is a top web development agency based in Kochi, Kerala. However, we actively work with startups and enterprise clients worldwide, delivering the same high-touch communication and global standards."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 md:py-32 bg-bg-dark text-white relative border-t border-white/5 px-4 md:px-0">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-growaz-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Common Queries</span>
                    <h2 className="text-[10vw] sm:text-5xl md:text-7xl font-heading font-black leading-tight tracking-tighter">
                        Frequently Asked <br />
                        <span className="font-serif-italic bg-gradient-to-r from-growaz-orange to-growaz-yellow text-transparent bg-clip-text">Questions.</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-growaz-orange/30 transition-colors"
                                itemScope
                                itemProp="mainEntity"
                                itemType="https://schema.org/Question"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <h3 itemProp="name" className="text-lg md:text-xl font-heading font-bold pr-8">{faq.question}</h3>
                                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-growaz-orange text-white border-none' : 'border border-white/10'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            id={`faq-answer-${index}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                        >
                                            <div className="px-6 md:px-8 pb-6 text-white/50 leading-relaxed pt-2 border-t border-white/5 font-body">
                                                <p itemProp="text">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
