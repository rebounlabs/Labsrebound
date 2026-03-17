import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: "Evently",
        category: "Web App",
        client: "Evently",
        description: "A comprehensive event management and booking platform built for seamless user experiences.",
        techStack: ["React", "Node.js", "Tailwind"],
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
        link: "http://51.20.142.127:3000/foryou"
    },
    {
        id: 2,
        title: "Smart Advisor Trans",
        category: "Website",
        client: "Smart Advisor",
        description: "A professional corporate website delivering specialized consultancy and advisory services.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        link: "https://smartadvisortrans.com/"
    },
    {
        id: 3,
        title: "Casen",
        category: "E-commerce",
        client: "Casen",
        description: "A modern e-commerce platform offering premium Apple mobile cases and accessories.",
        techStack: ["React", "Tailwind CSS", "Node.js"],
        image: "https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=2070&auto=format&fit=crop",
        link: "https://mujthab.xyz/"
    }
];

const categories = ["All", "Website", "Web App", "E-commerce"];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    useEffect(() => {
        if (activeFilter === "All") {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(projectsData.filter(project => project.category === activeFilter));
        }
    }, [activeFilter]);

    return (
        <section ref={sectionRef} id="projects" className="py-32 md:py-48 bg-bg-dark text-white relative overflow-hidden px-4 md:px-0">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-growaz-orange/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-growaz-yellow/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-growaz-yellow text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Our Portfolio</span>
                        <h2 className="text-[11vw] sm:text-5xl md:text-8xl font-heading font-black leading-tight tracking-tighter mb-4">
                            Selected <span className="font-serif-italic bg-gradient-to-r from-growaz-orange to-growaz-yellow text-transparent bg-clip-text italic">Works</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-body leading-relaxed">
                            A showcase of our recent projects. We craft digital experiences that merge stunning design with flawless engineering.
                        </p>
                    </motion.div>
                </div>

                {/* Filter section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                    className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-gradient-to-r from-growaz-orange to-growaz-yellow text-bg-dark shadow-[0_0_20px_rgba(255,107,43,0.3)]'
                                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="group relative bg-bg-card rounded-[30px] overflow-hidden border border-white/5 hover:border-white/10 transition-colors duration-500"
                            >
                                {/* Glowing background line on top edge */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-growaz-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                                {/* Project Image Container */}
                                <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900 border-b border-white/5">
                                    <div className="absolute inset-0 bg-bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                    
                                    {/* Category tag overlaid on image */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-bg-dark/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                {/* Hover overlay link icon */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-bg-dark/40 backdrop-blur-[2px]">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-growaz-orange text-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-100">
                                            <ExternalLink size={18} className="ml-0.5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8 md:p-14 flex flex-col h-[calc(100%-14rem)] sm:h-[calc(100%-16rem)] flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-2 leading-tight tracking-tight group-hover:text-growaz-yellow transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-widest mt-2">
                                                Client: {project.client}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-body flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.techStack.map((tech) => (
                                                <span 
                                                    key={tech} 
                                                    className="text-[10px] font-bold text-zinc-300 bg-white/5 px-2.5 py-1 rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm md:text-base font-bold text-white group-hover:text-growaz-orange transition-colors duration-300 uppercase tracking-wider"
                                        >
                                            View Case Study 
                                            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* View All Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                    }}
                    className="mt-16 text-center"
                >
                    <a href="#" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-bg-dark font-bold hover:bg-zinc-200 transition-colors duration-300 group">
                        See All Projects
                        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
