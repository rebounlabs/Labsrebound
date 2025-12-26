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

        if (isOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, isMobile]);

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
    ];

    // Animation Variants
    const variants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 }
    };

    return (
        <div className="fixed z-[9999] font-sans">
            {/* Backdrop for Mobile Focus */}
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
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                        className={`
                            fixed flex flex-col overflow-hidden shadow-2xl z-50
                            bg-[#0a0a0a] border border-[#2a2a2a]
                            /* Mobile: Floating Card Style */
                            ${isMobile
                                ? "bottom-6 left-1/2 -translate-x-1/2 w-[92%] h-[75vh] rounded-2xl"
                                : "bottom-24 right-6 w-96 h-[600px] max-h-[80vh] rounded-2xl"
                            }
                        `}
                    >
                        {/* Header: Dark Teal */}
                        <div className="bg-[#0f2e2e] p-5 border-b border-[#1f4a4a] flex justify-between items-center sticky top-0 z-10 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white border border-[#2a5a5a]">
                                        <MessageSquare size={18} className="text-teal-400" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0f2e2e] rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-[15px] leading-tight">ReboundLabs</h3>
                                    <p className="text-xs text-teal-200/80 font-medium mt-0.5">Support Team</p>
                                </div>
                            </div>
                            <button
                                onClick={toggleOpen}
                                className="text-teal-200/60 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all"
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body: Deep Black */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 bg-[#0a0a0a]">
                            {/* Greeting */}
                            <div className="flex flex-col gap-2 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-slate-500 shrink-0 mt-auto border border-[#2a2a2a]">
                                        <MessageCircle size={14} />
                                    </div>
                                    <div className="bg-[#1a1a1a] rounded-2xl rounded-bl-sm p-4 text-[15px] text-slate-200 border border-[#2a2a2a] max-w-[85%] leading-relaxed">
                                        <p>Hello! 👋 <br />How can we help you today?</p>
                                    </div>
                                </div>
                                <span className="text-[10px] text-slate-600 ml-12">Just now</span>
                            </div>

                            {/* FAQ Section */}
                            <div className="mb-4">
                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Frequently Asked Questions</h4>
                                <div className="space-y-2">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="rounded-lg bg-[#111111] border border-[#222] overflow-hidden">
                                            <button
                                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                                className="w-full text-left p-4 text-[14px] font-medium text-slate-300 flex justify-between items-center hover:bg-[#1a1a1a] transition-colors"
                                            >
                                                {faq.question}
                                                <ChevronDown
                                                    size={16}
                                                    className={`text-slate-500 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openFaqIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="px-4 pb-4 text-sm text-slate-400 leading-relaxed border-t border-[#222]"
                                                    >
                                                        {faq.answer}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-6"></div>
                        </div>

                        {/* Footer: Sticky */}
                        <div className="p-4 bg-[#0a0a0a] border-t border-[#1a1a1a] shrink-0 sticky bottom-0 z-20">
                            <motion.a
                                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[16px] py-3.5 rounded-full shadow-lg shadow-green-900/20 transition-all"
                            >
                                <Send size={18} />
                                <span>Start Chat</span>
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={toggleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                    fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center 
                    shadow-2xl z-50 transition-all
                    ${isOpen ? 'bg-[#1a1a1a] text-white border border-[#333]' : 'bg-[#25D366] text-white shadow-green-900/40'}
                `}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <MessageSquare size={26} fill="currentColor" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
