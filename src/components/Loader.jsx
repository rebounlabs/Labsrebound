import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-dark overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-growaz-orange/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 overflow-hidden mb-12">
                    <motion.div
                        initial={{ y: 80, skewY: 10 }}
                        animate={{ y: 0, skewY: 0 }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="text-5xl md:text-7xl font-heading font-black tracking-tighter flex items-center gap-2"
                    >
                        <span className="text-white">Rebound</span>
                        <span className="text-growaz-orange italic font-serif-italic">Labs</span>
                    </motion.div>
                </div>

                <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden mx-auto">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-growaz-orange to-growaz-yellow"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <span className="text-[10px] uppercase font-black tracking-[0.5em] text-white/20">
                        Engineering Excellence
                    </span>
                </motion.div>
            </div>

            {/* Corner Markers for Premium Feel */}
            <div className="absolute top-10 left-10 w-1.5 h-1.5 bg-growaz-orange/20 rounded-full" />
            <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-growaz-orange/20 rounded-full" />
            <div className="absolute bottom-10 left-10 w-1.5 h-1.5 bg-growaz-orange/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-growaz-orange/20 rounded-full" />
        </motion.div>
    );
};

export default Loader;
