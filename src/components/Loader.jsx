import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="relative flex items-center gap-2 overflow-hidden">
                <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight"
                >
                    Rebound
                </motion.span>
                <motion.span
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold font-heading text-accent tracking-tight"
                >
                    Labs
                </motion.span>
            </div>

            <motion.div
                className="mt-8 h-1 w-48 bg-slate-100 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                />
            </motion.div>
        </motion.div>
    );
};

export default Loader;
