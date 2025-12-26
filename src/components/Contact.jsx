import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, AlertCircle } from 'lucide-react';
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
        <section id="contact" className="py-16 md:py-20 bg-bg-primary relative overflow-hidden">
            <AnimatePresence>
                {showToast && (
                    <Toast
                        message={toastMessage.text}
                        type={toastMessage.type}
                        onClose={() => setShowToast(false)}
                    />
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10 md:mb-14">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4"
                        >
                            Ready to Start?
                        </motion.h2>
                        <p className="text-slate-500 text-lg">
                            Tell us about your project, and we'll get back to you within 24 hours.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
                        {/* Contact Info (Left - 2cols) */}
                        <div className="md:col-span-2 space-y-6 md:space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-4">Contact Details</h3>
                                <div className="space-y-4">
                                    <a href="mailto:labsrebound@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-accent transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                            <Mail size={18} />
                                        </div>
                                        <span>labsrebound@gmail.com</span>
                                    </a>
                                    <a href="tel:+918129829294" className="flex items-center gap-3 text-slate-600 hover:text-accent transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        </div>
                                        <span>+91 81298 29294</span>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                <h4 className="font-semibold text-accent mb-2">Office Hours</h4>
                                <p className="text-sm text-slate-600 mb-1">Monday - Saturday</p>
                                <p className="text-sm text-slate-900 font-medium">9:00 AM - 6:00 PM IST</p>
                            </div>
                        </div>

                        {/* Contact Form (Right - 3cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-3 bg-white p-8 rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 relative"
                        >
                            <form
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-900">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all hover:bg-slate-100"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-900">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all hover:bg-slate-100"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-semibold text-slate-900">Service</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formState.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all hover:bg-slate-100 appearance-none"
                                    >
                                        <option value="Web Development">Web Development</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Web Application">Web Application</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-900">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                        placeholder="Tell us about your project..."
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all hover:bg-slate-100 resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
