import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Code2, Palette, Settings, Cpu } from 'lucide-react';

const SkillBar = ({ name, level, delay }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-semibold dark:text-white">{name}</span>
      <span className="text-primary-500 font-bold">{level}%</span>
    </div>
    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, delay }}
        className="h-full bg-gradient-to-r from-primary-500 to-creative rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"
      />
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: <Code2 className="text-primary-500" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Laravel (PHP)", level: 85 },
        { name: "Python Flask", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "REST APIs & JS", level: 90 },
      ]
    },
    {
      title: "Graphic Design",
      icon: <Palette className="text-creative" />,
      skills: [
        { name: "Poster Design", level: 95 },
        { name: "Packaging Design", level: 90 },
        { name: "Branding", level: 85 },
        { name: "Typography", level: 80 },
      ]
    },
    {
      title: "Tools & Tech",
      icon: <Settings className="text-yellow-500" />,
      skills: [
        { name: "AI Tools (Copilot/GPT)", level: 95 },
        { name: "Figma & Canva", level: 90 },
        { name: "Git & GitHub", level: 85 },
        { name: "Mobile App Basics", level: 75 },
      ]
    }
  ];

  return (
    <Section id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">My Expertise</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="glass-card flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold dark:text-white">{cat.title}</h3>
              </div>
              <div className="flex-grow">
                {cat.skills.map((skill, si) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={i * 0.2 + si * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
