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

                        <p className="text-zinc-300 text-[13px] md:text-lg leading-relaxed mb-12 md:mb-16 max-w-md font-medium text-center md:text-left mx-auto md:mx-0">
                            Looking for the best web development agency in Kerala? We'd love to hear about your project. Send us a message and our Kochi team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8 md:space-y-10 mb-16 lg:mb-0" itemScope itemType="https://schema.org/LocalBusiness">
                            <meta itemProp="name" content="Rebound Labs" />
                            <meta itemProp="address" content="Kochi, Kerala, India" />

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group text-center md:text-left">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-growaz-orange group-hover:bg-growaz-orange group-hover:text-white transition-all shadow-xl shadow-growaz-orange/10 shrink-0">
                                    <Mail size={20} md:size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">Email Us</p>
                                    <a itemProp="email" href="mailto:labsrebound@gmail.com" className="text-lg md:text-xl font-heading font-black hover:text-growaz-orange transition-colors break-all">labsrebound@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group text-center md:text-left">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-growaz-yellow group-hover:bg-growaz-yellow group-hover:text-black transition-all shadow-xl shadow-growaz-yellow/10 shrink-0">
                                    <Phone size={20} md:size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">Call Us</p>
                                    <a itemProp="telephone" href="tel:+918129829294" className="text-lg md:text-xl font-heading font-black hover:text-growaz-yellow transition-colors">+91 81298 29294</a>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[40px] flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-sm backdrop-blur-md mx-auto md:mx-0 shadow-xl shadow-black/20">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center text-zinc-300">
                                    <Clock size={18} md:size={20} />
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-zinc-300 text-xs md:text-sm font-bold">Mon - Sat, 9AM - 6PM</p>
                                    <p className="text-zinc-400 text-[8px] md:text-xs font-medium uppercase tracking-widest mt-1">Based in Kochi, Kerala. Global Ops.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative lg:pl-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
                            <div className="space-y-4">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-growaz-orange">01. What's your name?</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe *"
                                    className="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-6 text-white text-2xl md:text-4xl font-heading font-black placeholder-white/10 focus:outline-none focus:border-growaz-orange transition-colors rounded-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-growaz-yellow">02. Your Email Address?</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com *"
                                    className="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-6 text-white text-2xl md:text-4xl font-heading font-black placeholder-white/10 focus:outline-none focus:border-growaz-yellow transition-colors rounded-none"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-growaz-orange">03. What are you looking for?</label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formState.service}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-6 text-white text-2xl md:text-4xl font-heading font-black focus:outline-none focus:border-growaz-orange transition-colors appearance-none rounded-none cursor-pointer"
                                    >
                                        <option value="Web Development" className="bg-bg-dark text-lg">Web Development</option>
                                        <option value="UI/UX Design" className="bg-bg-dark text-lg">UI/UX Design</option>
                                        <option value="Enterprise Apps" className="bg-bg-dark text-lg">Enterprise Apps</option>
                                        <option value="Other" className="bg-bg-dark text-lg">Other</option>
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                        <Plus size={32} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-300">04. Tell us about your project</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="1"
                                    placeholder="Project details... *"
                                    className="w-full bg-transparent border-b-2 border-white/10 py-4 md:py-6 text-white text-2xl md:text-4xl font-heading font-black placeholder-white/10 focus:outline-none focus:border-white transition-colors resize-y min-h-[100px] rounded-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={status === 'submitting'}
                                className="w-full md:w-auto px-12 md:px-20 py-6 md:py-8 bg-white text-black rounded-full font-black uppercase tracking-[0.3em] text-xs md:text-sm flex items-center justify-center gap-4 group disabled:opacity-50 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] hover:bg-gradient-to-r hover:from-growaz-orange hover:to-growaz-yellow transition-all duration-500"
                            >
                                {status === 'submitting' ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                                            <Send size={16} md:size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-black" />
                                        </div>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
