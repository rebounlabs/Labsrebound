import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronDown, MessageSquare } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    // Correct Phone Number
    const PHONE_NUMBER = "918129829294";

    const faqs = [
        {
            question: "What is Rebound Labs?",
            answer: "Rebound Labs is a Kerala-based web development startup building modern, high-quality websites.",
        },
        {
            question: "What services do you offer?",
            answer: "Website development, UI/UX design, landing pages, web apps, and website maintenance.",
        },
        {
            question: "Do you build custom websites?",
            answer: "Yes, all websites are designed based on client requirements and brand identity.",
        },
        {
            question: "Are your websites mobile-friendly?",
            answer: "Yes, every website is fully responsive across all devices.",
        },
        {
            question: "How long does a project take?",
            answer: "Usually 1–4 weeks, depending on project scope.",
        },
        {
            question: "How much does a website cost?",
            answer: "Pricing depends on features and complexity. Contact us for a custom quote.",
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 mb-4 w-80 md:w-96 pointer-events-auto max-h-[80vh] flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-4 shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <MessageSquare size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">Quick Answers</h4>
                                    <p className="text-xs text-slate-500">Usually replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleOpen}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-2 mb-4 overflow-y-auto pr-1 flex-1 custom-scrollbar">
                            {faqs.map((item, index) => (
                                <div key={index} className="bg-slate-50 rounded-lg overflow-hidden border border-slate-100">
                                    <button
                                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                        className="w-full text-left p-3 text-xs font-semibold text-slate-700 flex justify-between items-center hover:bg-slate-100 transition-colors"
                                    >
                                        {item.question}
                                        <ChevronDown
                                            size={14}
                                            className={`text-slate-400 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openFaqIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-3 pb-3 text-xs text-slate-500 leading-relaxed"
                                            >
                                                {item.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href={`https://wa.me/${PHONE_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2.5 rounded-xl transition-colors shadow-lg shadow-green-500/20 text-sm shrink-0"
                        >
                            <MessageCircle size={18} />
                            Chat on WhatsApp
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={toggleOpen}
                aria-label="Toggle WhatsApp Chat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/30 hover:shadow-green-500/40 transition-shadow relative group"
            >
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:animate-ping" />
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
