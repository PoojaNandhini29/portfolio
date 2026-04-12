import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Github, ExternalLink, Blocks } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered CRM System",
    description: "A comprehensive customer relationship management tool built with Laravel and React, featuring automated follow-ups and lead scoring using AI.",
    tech: "Laravel, React, MySQL, OpenAI API",
    live: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Eco-Friendly E-Commerce",
    description: "A full-stack e-commerce platform for sustainable products. Includes secure authentication, payment gateway, and complex CRUD operations.",
    tech: "React, Python Flask, MySQL, Stripe",
    live: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Real-time Chat App",
    description: "A mobile-first messaging application supporting group chats, file sharing, and basic cross-platform support.",
    tech: "React, Firebase, Tailwind",
    live: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1611746435392-d021f6022581?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">Development Projects</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card overflow-hidden !p-0"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(', ').map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary-500/10 text-primary-500 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
