import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Sparkles, Zap, Palette } from 'lucide-react';

const AboutMe = () => {
  const highlights = [
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Full Stack Development",
      desc: "1 year of hands-on experience building robust web applications with Laravel and React."
    },
    {
      icon: <Sparkles className="text-blue-500" />,
      title: "AI-Assisted Workflow",
      desc: "Leveraging state-of-the-art AI tools to accelerate development and deliver smart features."
    },
    {
      icon: <Palette className="text-purple-500" />,
      title: "Creative Design",
      desc: "Specialized in high-impact poster and packaging designs that tell a brand's story."
    }
  ];

  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-slate-600 dark:text-slate-400"
          >
            <p>
              Hello! I'm a passionate developer and designer with a unique blend of technical and creative skills. 
              Over the past year, I've immersed myself in real-time projects, mastering the art of building 
              seamless digital experiences.
            </p>
            <p>
              My expertise lies in <span className="text-primary-500 font-semibold">Full Stack Development</span>, 
              where I use Laravel, React, and Flask to build scalable applications. I'm also deeply invested in 
              the <span className="text-primary-500 font-semibold">AI-assisted coding</span> ecosystem, using AI 
              to optimize my workflows and build smarter solutions faster.
            </p>
            <p>
              Beyond the terminal, I'm a <span className="text-primary-500 font-semibold">Graphic Designer</span>. 
              I love creating visually stunning posters and packaging that capture attention and communicate effectively.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card flex items-start gap-4"
              >
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl dark:text-white mb-1">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
