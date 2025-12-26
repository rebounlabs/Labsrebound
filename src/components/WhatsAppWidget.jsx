import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronRight, MessageSquare } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const faqs = [
        "Do you build custom web apps?",
        "What is your typical timeline?",
        "Do you offer maintenance?",
        "Can you redesign my existing site?"
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
                        className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 mb-4 w-80 pointer-events-auto"
                    >
                        <div className="flex justify-between items-center mb-4">
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

                        <div className="space-y-2 mb-4">
                            {faqs.map((question, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 p-2.5 rounded-lg cursor-pointer transition-colors flex justify-between items-center group"
                                    onClick={() => window.open('https://wa.me/1234567890?text=' + encodeURIComponent(question), '_blank')}
                                >
                                    {question}
                                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2.5 rounded-xl transition-colors shadow-lg shadow-green-500/20 text-sm"
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/30 hover:shadow-green-500/40 transition-shadow relative group"
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white rounded-full opacity-20"
                />
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
