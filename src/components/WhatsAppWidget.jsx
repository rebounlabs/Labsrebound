import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronDown, Send, MessageSquare } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    const PHONE_NUMBER = "918129829294";
    const PREFILLED_MESSAGE = "Hi Rebound Labs 👋 I’m interested in building a website.";

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "Custom website development, UI/UX design, web applications, and ongoing maintenance.",
        },
        {
            question: "How much does a project cost?",
            answer: "Pricing depends on complexity. We offer startup-friendly packages. Chat with us for a quote!",
        },
        {
            question: "Do you provide support after launch?",
            answer: "Yes! We offer free support for 30 days and optional long-term maintenance plans.",
        },
        {
            question: "How long does a project take?",
            answer: "Typically 2–4 weeks for a standard website, depending on the scope.",
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-slate-900 rounded-2xl shadow-2xl shadow-black/20 border border-slate-800 w-[340px] md:w-96 pointer-events-auto overflow-hidden flex flex-col mb-4"
                    >
                        {/* Header */}
                        <div className="bg-slate-800/50 p-5 border-b border-slate-700/50 flex justify-between items-center backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                                        <MessageSquare size={20} fill="currentColor" className="opacity-90" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-base leading-tight">ReboundLabs Support</h3>
                                    <p className="text-xs text-green-400 font-medium">Typically replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleOpen}
                                className="text-slate-400 hover:text-white hover:bg-slate-700/50 p-2 rounded-full transition-all"
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-5 bg-slate-900 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {/* Welcome Message */}
                            <div className="mb-6 flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                                    <MessageCircle size={16} />
                                </div>
                                <div className="bg-slate-800 rounded-2xl rounded-tl-none p-3.5 text-sm text-slate-200 shadow-sm border border-slate-700/50 max-w-[85%]">
                                    <p>Hello! How can we help you today? 👋</p>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="mb-4">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-1">Frequently Asked Questions</h4>
                                <div className="space-y-2">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="rounded-xl bg-slate-800/50 border border-slate-700/30 overflow-hidden">
                                            <button
                                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                                className="w-full text-left p-3.5 text-sm font-medium text-slate-200 flex justify-between items-center hover:bg-slate-800 transition-colors"
                                            >
                                                {faq.question}
                                                <ChevronDown
                                                    size={16}
                                                    className={`text-slate-500 transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openFaqIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="px-3.5 pb-3.5 text-xs text-slate-400 leading-relaxed border-t border-slate-700/30"
                                                    >
                                                        {faq.answer}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer / CTA */}
                        <div className="p-4 bg-slate-900 border-t border-slate-800">
                            <motion.a
                                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02, backgroundColor: "#22c55e" }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-2.5 w-full bg-green-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-600/20 hover:shadow-green-600/30 transition-all"
                            >
                                <Send size={18} />
                                <span>Start Chat</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={toggleOpen}
                aria-label="Toggle Support Chat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-600/30 hover:bg-green-500 hover:shadow-green-500/40 transition-all relative group"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-green-400 rounded-full -z-10"
                />
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare size={28} fill="currentColor" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
