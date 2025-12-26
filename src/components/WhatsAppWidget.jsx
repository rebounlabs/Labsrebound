import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronDown, Send, MessageSquare } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const PHONE_NUMBER = "918129829294";
    const PREFILLED_MESSAGE = "Hi Rebound Labs 👋 I’m interested in building a website.";

    // Handle Resize & Scroll Locking
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleOpen = () => setIsOpen(!isOpen);

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

    // Animation Variants
    const desktopVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 }
    };

    const mobileVariants = {
        hidden: { y: "100%" },
        visible: { y: 0 },
        exit: { y: "100%" }
    };

    return (
        <div className="fixed z-[9999] font-sans">
            {/* Backdrop for Mobile */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleOpen}
                        className="fixed inset-0 bg-black/80 z-40"
                    />
                )}
            </AnimatePresence>

            {/* Widget Container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={isMobile ? mobileVariants : desktopVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`
                            fixed bg-slate-950 border-slate-800 shadow-2xl flex flex-col overflow-hidden
                            ${isMobile
                                ? "bottom-0 left-0 right-0 h-[80vh] rounded-t-2xl border-t z-50 w-full"
                                : "bottom-24 right-6 w-96 h-[600px] max-h-[80vh] rounded-2xl border z-50 mb-4"
                            }
                        `}
                    >
                        {/* Sticky Header */}
                        <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center sticky top-0 z-10 shrink-0 select-none">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                                        <MessageSquare size={20} fill="currentColor" className="opacity-95" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-base leading-tight">ReboundLabs Support</h3>
                                    <p className="text-xs text-green-400 font-medium tracking-wide">Typically replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleOpen}
                                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-full transition-all active:scale-90"
                                aria-label="Close chat"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 bg-slate-950">
                            {/* Welcome Message Bubble */}
                            <div className="flex gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 mt-auto">
                                    <MessageCircle size={16} />
                                </div>
                                <div className="bg-slate-900 rounded-2xl rounded-bl-none p-4 text-[15px] text-slate-200 shadow-md border border-slate-800 max-w-[85%] leading-relaxed">
                                    <p>Hello! How can we help you today? 👋</p>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="mb-4">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-1">Frequently Asked Questions</h4>
                                <div className="space-y-3">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden active:scale-[0.99] transition-transform">
                                            <button
                                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                                className="w-full text-left p-4 text-[15px] font-medium text-slate-200 flex justify-between items-center hover:bg-slate-800 transition-colors"
                                            >
                                                {faq.question}
                                                <ChevronDown
                                                    size={18}
                                                    className={`text-slate-500 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openFaqIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="px-4 pb-4 text-sm text-slate-400 leading-relaxed border-t border-slate-800"
                                                    >
                                                        {faq.answer}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Spacer for bottom CTA */}
                            <div className="h-4"></div>
                        </div>

                        {/* Sticky Footer CTA */}
                        <div className="p-4 bg-slate-950 border-t border-slate-800 shrink-0 sticky bottom-0 z-20 pb-safe safe-area-bottom">
                            <motion.a
                                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-bold text-[16px] py-4 rounded-xl shadow-lg shadow-green-600/20 transition-all"
                            >
                                <Send size={20} />
                                <span>Start Chat</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button (Always Visible) */}
            <motion.button
                onClick={toggleOpen}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`
                    fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center 
                    shadow-2xl shadow-green-600/30 transition-all z-50
                    ${isOpen ? 'bg-slate-800 text-slate-200' : 'bg-green-600 text-white hover:bg-green-500'}
                `}
            >
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 hover:opacity-100 transition-opacity" />

                {/* Ping Animation only when closed */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-green-600"></span>
                    </span>
                )}

                <AnimatePresence mode="wait" initial={false}>
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
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
