import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'PRACHAR MANCH',
    role: 'Forum Lead',
    description: 'Directed 100+ students in a multidisciplinary forum. Organized 3+ industry sessions (AJIO keynote), 5+ workshops, and career trainings; boosted visibility 40% via strategic partnerships.',
    image: '/Prachaar Manch.png',
  },
  {
    title: 'RIDDHI TEA',
    role: 'Brand Strategist',
    description: 'Developed brand identity, positioning, and social media strategy. Designed 15+ promotional creatives and executed integrated marketing plan, increasing engagement 60% and strengthening brand recall.',
    image: '/Riddhi Tea.png',
  },
  {
    title: 'Strategic Execution Consultants Pvt. Ltd.',
    role: 'Strategic Analyst',
    description: 'Conducted 3-year EIC assessments for 9 companies. Identified risks, opportunities, and operational gaps; delivered data-backed recommendations improving leadership decisions and efficiency ~20%.',
    image: '/SEC.png',
  },
];

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ProjectWorkSection() {
  return (
    <section id="project-work" className="py-28 md:py-40 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-[#6e293a] tracking-[0.3em] uppercase text-xs font-medium mb-4">Academic Projects</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16 md:mb-20">
            <motion.span
              className="text-white"
              animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Research &
            </motion.span>
            {' '}
            <motion.span
              animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              strategic thinking
            </motion.span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1} className="h-full">
              <div className="group rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#a6717a] text-xs tracking-wider uppercase mb-1">{project.role}</p>
                  <h3 className="text-lg font-medium text-white tracking-tight mb-3 leading-snug">{project.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light flex-1">{project.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}