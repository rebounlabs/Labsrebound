import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronDown, Send, MessageSquare, Phone } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const PHONE_NUMBER = "918129829294";
    const PREFILLED_MESSAGE = "Hi Rebound Labs 👋 I’m interested in building a website.";

    // Device detection & Scroll Lock
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (isOpen && isMobile) {
            document.body.style.overflow = 'hidden';
            // Prevent touch move on background to stop rubber-banding
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.touchAction = 'auto';
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
            document.body.style.overflow = 'unset';
            document.body.style.touchAction = 'auto';
        };
    }, [isOpen, isMobile]);

    const toggleOpen = () => setIsOpen(!isOpen);

    const faqs = [
        {
            question: "What services do you provide?",
            answer: "We specialize in high-performance websites, web apps, and UI/UX design.",
        },
        {
            question: "Do you offer custom designs?",
            answer: "Yes! Every project is custom-designed to match your brand identity.",
        },
        {
            question: "What is your turnaround time?",
            answer: "Most standard websites are launched within 2-4 weeks.",
        },
    ];

    return (
        <div className="fixed z-[9999] font-sans text-base antialiased">
            {/* Backdrop (Mobile Only) */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleOpen}
                        className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Widget Container */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.9, y: 20 }}
                        animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
                        exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`
                            fixed bg-black border border-zinc-900 shadow-2xl flex flex-col overflow-hidden z-50
                            ${isMobile
                                ? "bottom-0 inset-x-0 h-[85vh] rounded-t-[2rem] w-full"
                                : "bottom-24 right-6 w-[380px] h-[600px] max-h-[80vh] rounded-2xl"
                            }
                        `}
                    >
                        {/* Header */}
                        <div className="bg-black p-5 border-b border-zinc-900 flex justify-between items-center sticky top-0 z-10 shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                                        <MessageSquare size={22} className="text-white" fill="currentColor" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-black rounded-full" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">ReboundLabs</h3>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                                        <p className="text-xs text-zinc-400 font-medium">Typically replies instantly</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={toggleOpen}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body - Chat Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-black p-5">
                            {/* Brand Message */}
                            <div className="flex gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 shrink-0 mt-auto border border-zinc-800">
                                    <MessageCircle size={16} />
                                </div>
                                <div className="bg-zinc-900 p-4 rounded-2xl rounded-bl-none border border-zinc-800 shadow-sm max-w-[85%]">
                                    <p className="text-zinc-200 leading-relaxed">
                                        Hello! 👋 <br />
                                        How can we help you build your digital empire today?
                                    </p>
                                </div>
                            </div>

                            {/* FAQ Accordion */}
                            <div>
                                <h4 className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-4 px-1">Quick Replies</h4>
                                <div className="space-y-3">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="group rounded-xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                                className="w-full text-left p-4 flex justify-between items-center text-zinc-200 font-medium text-[15px] group-hover:bg-zinc-900 transition-colors"
                                            >
                                                {faq.question}
                                                <ChevronDown
                                                    size={18}
                                                    className={`text-zinc-500 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openFaqIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="border-t border-zinc-800/50"
                                                    >
                                                        <div className="p-4 pt-2 text-sm text-zinc-400 leading-relaxed bg-zinc-900/30">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Padding for Scroll */}
                            <div className="h-6" />
                        </div>

                        {/* Sticky Footer */}
                        <div className="p-4 bg-black border-t border-zinc-900 sticky bottom-0 z-20 pb-safe">
                            <motion.a
                                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-[16px] py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all group"
                            >
                                <Phone size={20} className="fill-black/10 stroke-[2.5]" />
                                <span>Start WhatsApp Chat</span>
                            </motion.a>
                            <p className="text-center text-[10px] text-zinc-600 mt-2">
                                Powered by <span className="text-zinc-500 font-medium">ReboundLabs Support</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                onClick={toggleOpen}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                    fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center 
                    shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-50 transition-colors duration-300
                    ${isOpen ? 'bg-zinc-800 text-white' : 'bg-[#25D366] text-black'}
                `}
                aria-label={isOpen ? "Close widget" : "Open chat widget"}
            >
                <div className={`absolute inset-0 rounded-full ${!isOpen ? 'animate-ping opacity-20 bg-[#25D366]' : ''}`} />
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={26} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <MessageCircle size={28} className="stroke-[2.5]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
