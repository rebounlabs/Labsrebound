import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Globe,
  Instagram,
  Layout,
  Linkedin,
  Minus,
  Plus,
  Rocket,
  Send,
  Sparkles,
  Twitter,
} from 'lucide-react';
import logoIcon from '../assets/logo_icon.png';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceCards = [
  {
    icon: Code2,
    title: 'Custom Web Development Kerala',
    description:
      'React, Vite, and Next.js websites built for blazing speed, scalable code, and SEO-ready architecture.',
  },
  {
    icon: Layout,
    title: 'Modern UI/UX Design Kochi',
    description:
      'High-fidelity interfaces, wireframing, and interactive prototypes focused on clarity, trust, and conversion.',
  },
  {
    icon: Globe,
    title: 'Enterprise Web Applications',
    description:
      'Dashboards and SaaS solutions with scalable backend planning, clean UX flows, and production-ready delivery.',
  },
];

const projectCards = [
  {
    title: 'Restaurant Website',
    type: 'Website',
    client: 'Restaurant Brand',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    link: 'https://showcase-web-1.vercel.app/',
  },
  {
    title: 'Evently',
    type: 'Web App',
    client: 'Evently',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    link: 'http://51.20.142.127:3000/foryou',
  },
  {
    title: 'Smart Advisor Trans',
    type: 'Website',
    client: 'Smart Advisor',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    link: 'https://smartadvisortrans.com/',
  },
  {
    title: 'Casen',
    type: 'E-commerce',
    client: 'Casen',
    image:
      'https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=2070&auto=format&fit=crop',
    link: 'https://mujthab.xyz/',
  },
];

const whyReboundCards = [
  {
    title: 'Young & Ambitious',
    description:
      'A team of digital natives who live and breathe modern web technology. No legacy code, just cutting-edge solutions.',
  },
  {
    title: 'Rapid Delivery',
    description:
      "We don't waste time in endless meetings. We ship high-quality code fast, helping you go to market before competition.",
  },
  {
    title: 'Global Standards',
    description:
      'Based in Kochi, Kerala but building for the world. We follow international best practices across design and development.',
  },
  {
    title: 'Launch & Growth',
    description:
      'We launch with confidence using rigorous testing, SEO optimization, and performance tuning for day-one readiness.',
  },
];

const faqs = [
  {
    question: 'Why hire a web development company in Kerala over freelancers?',
    answer:
      'Rebound Labs offers a complete, multi-disciplinary team with UI/UX strategy, scalable architecture, and ongoing optimization for higher reliability and quality.',
  },
  {
    question: 'Do you provide custom website development or use templates?',
    answer:
      'We strictly provide custom website development using modern stacks like React and Next.js, tailored to your brand and business goals.',
  },
  {
    question: 'What is the cost of website development in Kerala?',
    answer:
      'Pricing depends on scope and features. We provide competitive pricing and a clear quote after understanding your project requirements.',
  },
  {
    question: 'Are you based in Kochi? Do you work with global clients?',
    answer:
      'Yes. Our team is based in Kochi, Kerala, and we work with startups and enterprise clients worldwide with high-touch communication.',
  },
];

const ShowcaseHome = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-dark text-white">
      <div className="pointer-events-none absolute -left-24 top-44 h-64 w-64 rounded-full bg-growaz-orange/30 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-[38rem] h-64 w-64 rounded-full bg-growaz-orange/25 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-[76rem] h-72 w-72 -translate-x-1/2 rounded-full bg-growaz-yellow/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="sticky top-3 z-40 rounded-full border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-xl sm:px-6"
        >
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoIcon} alt="Rebound Labs" className="h-7 w-7 rounded-full object-cover" />
              <span className="text-xs font-semibold tracking-wide text-white">
                Rebound <span className="text-growaz-orange">Labs</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-5 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/blogs"
                className="text-[11px] uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-white"
              >
                Blogs
              </Link>
            </nav>

            <a
              href="#contact"
              className="rounded-full bg-growaz-orange px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-500"
            >
              Start
            </a>
          </div>
        </motion.header>

        <section id="home" className="border-b border-white/5 pb-14 pt-20 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-zinc-300">
                <Sparkles size={12} className="text-growaz-orange" />
                Elevate Your Digital Presence
              </span>
              <img src={logoIcon} alt="Rebound Labs" className="h-10 w-10 rounded-full border border-white/20 object-cover" />
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              Crafting Premium
              <br />
              Digital Experiences.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400">
              Experience the best web development and design services in Kerala. Rebound Labs creates high-performance,
              visually stunning digital solutions for businesses in Kochi and worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-growaz-orange px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-orange-500"
              >
                Explore Our Work
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-200 transition hover:border-growaz-orange/60 hover:text-white"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </section>

        <section id="services" className="border-b border-white/5 py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-bg-card/90 p-5"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-growaz-orange/40 bg-black/30 p-2.5 text-growaz-orange">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.description}</p>
                </motion.article>
              );
            })}
          </div>

          <div id="about" className="mt-12 grid gap-6 border-t border-white/5 pt-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Driven by passion,
              <br />
              defined by quality.
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Rebound Labs was not built in a boardroom. It was born from a shared obsession with perfect code and
              pixel-perfect design. We craft bespoke, high-speed web experiences that actively drive business goals
              forward in Kochi and beyond.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
              100% Satisfaction
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
              3X Faster Results
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
              50+ Clients Worldwide
            </span>
          </div>
        </section>

        <section id="projects" className="border-b border-white/5 py-12">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Our Portfolio</p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Selected projects</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projectCards.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-bg-card/90"
              >
                <div className="h-44 overflow-hidden sm:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">{project.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {project.type} | {project.client}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-growaz-orange px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-orange-500"
                  >
                    Visit
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="feedback" className="border-b border-white/5 py-12">
          <h2 className="mb-7 text-center text-2xl font-semibold text-white sm:text-3xl">Why clients choose us</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyReboundCards.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-bg-card/90 p-5"
              >
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="faq" className="border-b border-white/5 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Common queries</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Curious mind?</h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                Transparent communication from discovery to launch. Here are the questions we get most from new
                clients.
              </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <button
                    key={faq.question}
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full rounded-xl border border-white/10 bg-bg-card/80 px-4 py-3 text-left"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm text-zinc-200">{faq.question}</span>
                      {isOpen ? <Minus size={16} className="text-growaz-orange" /> : <Plus size={16} className="text-zinc-400" />}
                    </span>
                    {isOpen && <p className="mt-3 text-sm leading-relaxed text-zinc-400">{faq.answer}</p>}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <form
              action="https://formspree.io/f/meejylwj"
              method="POST"
              className="rounded-2xl border border-white/10 bg-bg-card/90 p-5"
            >
              <div className="space-y-3">
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-white/10 bg-black/35 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-growaz-orange/50"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-white/10 bg-black/35 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-growaz-orange/50"
                  required
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project"
                  className="w-full rounded-lg border border-white/10 bg-black/35 px-3 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-growaz-orange/50"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-growaz-orange px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-500"
              >
                Send
                <Send size={14} />
              </button>
            </form>

            <div className="rounded-2xl border border-white/10 bg-bg-card/90 p-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Get in touch</p>
              <h2 className="mt-3 max-w-sm text-3xl font-semibold leading-tight text-white">
                Ready to build
                <br />
                together?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Looking for the best web development agency in Kerala? We will get back to you within 24 hours.
              </p>

              <div className="mt-5 space-y-2 text-sm text-zinc-300">
                <p>labsrebound@gmail.com</p>
                <p>+91 81298 29294</p>
                <p>Mon - Sat, 9AM - 6PM</p>
              </div>

              <div className="mt-6 flex items-center gap-4 text-zinc-400">
                <a href="https://x.com/rebound_labs" target="_blank" rel="noreferrer" className="transition hover:text-growaz-orange">
                  <Twitter size={16} />
                </a>
                <a
                  href="https://www.instagram.com/rebound.labs"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-growaz-orange"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rebound-labs-725248395/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-growaz-orange"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 pt-8 text-xs text-zinc-500">
          <div className="grid gap-4 sm:grid-cols-4">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-zinc-300">Rebound Labs</p>
              <p className="mt-2 text-[11px] text-zinc-500">
                Top web development and design agency in Kochi, Kerala.
              </p>
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-zinc-400">Services</p>
              <p className="mt-2 text-[11px] text-zinc-500">Web Development</p>
              <p className="text-[11px] text-zinc-500">UI/UX Design</p>
              <p className="text-[11px] text-zinc-500">Enterprise Apps</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-zinc-400">Location</p>
              <p className="mt-2 text-[11px] text-zinc-500">Kochi, Kerala</p>
              <p className="text-[11px] text-zinc-500">Global Ops</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-zinc-400">Contact</p>
              <p className="mt-2 text-[11px] text-zinc-500">labsrebound@gmail.com</p>
              <p className="text-[11px] text-zinc-500">+91 81298 29294</p>
            </div>
          </div>
          <p className="mt-8 border-t border-white/5 pt-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            © {new Date().getFullYear()} Rebound Labs. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ShowcaseHome;
