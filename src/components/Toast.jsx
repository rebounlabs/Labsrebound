import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 8000 }) => {
    const [progress, setProgress] = useState(100);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const startTime = Date.now();
        const endTime = startTime + (duration * (progress / 100));

        const timer = setInterval(() => {
            const now = Date.now();
            const remaining = endTime - now;
            const newProgress = (remaining / duration) * 100;

            if (remaining <= 0) {
                clearInterval(timer);
                setProgress(0);
                onClose();
            } else {
                setProgress(newProgress);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [isPaused, duration, onClose, progress]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="fixed top-24 right-6 z-[60] max-w-sm w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className={`relative overflow-hidden rounded-xl shadow-2xl border ${type === 'success' ? 'bg-white border-green-100' : 'bg-white border-red-100'
                }`}>
                <div className="p-4 flex items-start gap-3">
                    <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                        {type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    </div>

                    <div className="flex-1 pr-6">
                        <h4 className={`font-bold text-sm mb-1 ${type === 'success' ? 'text-slate-900' : 'text-red-900'
                            }`}>
                            {type === 'success' ? 'Success!' : 'Error'}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {message}
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                        aria-label="Close notification"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-slate-100">
                    <motion.div
                        className={`h-full ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Toast;
