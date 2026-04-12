import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { MousePointer2, ExternalLink, Brush, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-creative/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-semibold text-primary-600 dark:text-primary-400 border border-primary-500/20"
        >
          Available for new opportunities 🚀
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 dark:text-white"
        >
          Hi, I'm <span className="gradient-text">Pooja Nandhini</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-medium mb-8 text-slate-700 dark:text-slate-300 h-10"
        >
          I'm a{' '}
          <span className="text-primary-500 underline decoration-primary-500/30">
            <Typewriter
              words={['Full Stack Developer', 'AI-Assisted Builder', 'Graphic Designer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
        >
          I build smart applications and create visually impactful designs that bring ideas to life. 
          Bridging the gap between robust code and creative aesthetics.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
            <Code size={20} /> View Projects
          </a>
          <a href="#design" className="px-8 py-4 glass dark:bg-white/5 hover:bg-white/10 dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 border border-white/20 transition-all hover:-translate-y-1">
            <Brush size={20} /> View Designs
          </a>
          <a href="#contact" className="px-8 py-4 group flex items-center justify-center gap-2 font-bold dark:text-white transition-colors hover:text-primary-500">
            Contact Me <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
