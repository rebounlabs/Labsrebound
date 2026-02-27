import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Phone, Clock, Plus } from 'lucide-react';
import Toast from './Toast';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        service: 'Web Development',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState({ type: 'success', text: '' });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/meejylwj", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formState),
            });

            if (response.ok) {
                setStatus('idle');
                setFormState({ name: '', email: '', service: 'Web Development', message: '' });
                setToastMessage({
                    type: 'success',
                    text: 'Your message has been sent successfully. We will get back to you within 24 hours.'
                });
                setShowToast(true);
            } else {
                setStatus('idle');
                setToastMessage({
                    type: 'error',
                    text: 'Something went wrong. Please try again later.'
                });
                setShowToast(true);
            }
        } catch (error) {
            setStatus('idle');
            setToastMessage({
                type: 'error',
                text: 'Network error. Please check your connection.'
            });
            setShowToast(true);
        }
    };

    return (
        <section id="contact" className="py-24 md:py-40 bg-bg-dark text-white relative overflow-hidden border-t border-white/5 px-4 md:px-0">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-growaz-orange/5 blur-[120px] rounded-full pointer-events-none" />

            <AnimatePresence>
                {showToast && (
                    <Toast
                        message={toastMessage.text}
                        type={toastMessage.type}
                        onClose={() => setShowToast(false)}
                    />
                )}
            </AnimatePresence>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-growaz-orange text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block text-center md:text-left">Get in Touch</span>
                        <h2 className="text-5xl md:text-8xl font-heading font-black leading-tight md:leading-[0.9] tracking-tighter mb-8 md:mb-12 text-center md:text-left">
                            Ready to <br />
                            <span className="font-serif-italic opacity-80 text-growaz-orange">build together?</span>
                        </h2>

                        <p className="text-white/40 text-[13px] md:text-lg leading-relaxed mb-12 md:mb-16 max-w-md font-medium text-center md:text-left mx-auto md:mx-0">
                            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                        </p>

                        <div className="space-y-8 md:space-y-10 mb-16 lg:mb-0">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group text-center md:text-left">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-growaz-orange group-hover:bg-growaz-orange group-hover:text-white transition-all shadow-xl shadow-growaz-orange/10 shrink-0">
                                    <Mail size={20} md:size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Email Us</p>
                                    <a href="mailto:labsrebound@gmail.com" className="text-lg md:text-xl font-heading font-black hover:text-growaz-orange transition-colors break-all">labsrebound@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group text-center md:text-left">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-growaz-yellow group-hover:bg-growaz-yellow group-hover:text-black transition-all shadow-xl shadow-growaz-yellow/10 shrink-0">
                                    <Phone size={20} md:size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest">Call Us</p>
                                    <a href="tel:+918129829294" className="text-lg md:text-xl font-heading font-black hover:text-growaz-yellow transition-colors">+91 81298 29294</a>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[40px] flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-sm backdrop-blur-md mx-auto md:mx-0 shadow-xl shadow-black/20">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center text-white/40">
                                    <Clock size={18} md:size={20} />
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-white/60 text-xs md:text-sm font-bold">Mon - Sat, 9AM - 6PM</p>
                                    <p className="text-white/20 text-[8px] md:text-xs font-medium uppercase tracking-widest mt-1">Available Internationally</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Box Decoration */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-growaz-orange/10 to-transparent blur-2xl rounded-[60px] opacity-30" />

                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 md:p-14 rounded-[32px] md:rounded-[56px] relative shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-4 text-white text-sm md:text-base placeholder-white/20 focus:outline-none focus:border-growaz-orange transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-4 text-white text-sm md:text-base placeholder-white/20 focus:outline-none focus:border-growaz-orange transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Select Service</label>
                                    <div className="relative">
                                        <select
                                            name="service"
                                            value={formState.service}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-4 text-white text-sm md:text-base focus:outline-none focus:border-growaz-orange transition-all font-medium appearance-none"
                                        >
                                            <option value="Web Development" className="bg-bg-dark">Web Development</option>
                                            <option value="UI/UX Design" className="bg-bg-dark">UI/UX Design</option>
                                            <option value="Enterprise Apps" className="bg-bg-dark">Enterprise Apps</option>
                                            <option value="Other" className="bg-bg-dark">Other</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                            <Plus size={18} md:size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-2">Project Details</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        placeholder="Tell us about your goals..."
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl px-5 md:px-6 py-4 md:py-4 text-white text-sm md:text-base placeholder-white/20 focus:outline-none focus:border-growaz-orange transition-all font-medium resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === 'submitting'}
                                    className="w-full bg-white text-black py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-3 group disabled:opacity-50 shadow-xl shadow-white/5"
                                >
                                    {status === 'submitting' ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={14} md:size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
