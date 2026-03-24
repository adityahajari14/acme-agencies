import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-[#1a1a1a] overflow-hidden">
      {/* Elegant flowing waves background */}
      <div className="absolute inset-0 opacity-60">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6e293a', stopOpacity: 0.6 }} />
              <stop offset="40%" style={{ stopColor: '#a6717a', stopOpacity: 0.4 }} />
              <stop offset="70%" style={{ stopColor: '#f5f0ec', stopOpacity: 0.25 }} />
              <stop offset="100%" style={{ stopColor: '#d4bfa8', stopOpacity: 0.3 }} />
            </linearGradient>
            <linearGradient id="grad1b" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f5f0ec', stopOpacity: 0.3 }} />
              <stop offset="40%" style={{ stopColor: '#d4bfa8', stopOpacity: 0.4 }} />
              <stop offset="60%" style={{ stopColor: '#a6717a', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#6e293a', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ d: "M0,300 C360,200 720,400 1080,300 C1320,220 1440,280 1440,280 L1440,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,300 C360,200 720,400 1080,300 C1320,220 1440,280 1440,280 L1440,800 L0,800 Z",
                "M0,350 C360,250 720,450 1080,350 C1320,270 1440,330 1440,330 L1440,800 L0,800 Z",
                "M0,280 C360,180 720,380 1080,280 C1320,200 1440,260 1440,260 L1440,800 L0,800 Z",
                "M0,300 C360,200 720,400 1080,300 C1320,220 1440,280 1440,280 L1440,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#grad1)"
          />
          <motion.path
            initial={{ d: "M0,450 C400,350 800,550 1200,450 C1360,400 1440,430 1440,430 L1440,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,450 C400,350 800,550 1200,450 C1360,400 1440,430 1440,430 L1440,800 L0,800 Z",
                "M0,420 C400,320 800,520 1200,420 C1360,370 1440,400 1440,400 L1440,800 L0,800 Z",
                "M0,480 C400,380 800,580 1200,480 C1360,430 1440,460 1440,460 L1440,800 L0,800 Z",
                "M0,450 C400,350 800,550 1200,450 C1360,400 1440,430 1440,430 L1440,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            fill="url(#grad1b)"
            opacity="0.7"
          />
          <motion.path
            initial={{ d: "M0,550 C480,480 960,620 1440,550 L1440,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,550 C480,480 960,620 1440,550 L1440,800 L0,800 Z",
                "M0,580 C480,510 960,650 1440,580 L1440,800 L0,800 Z",
                "M0,520 C480,450 960,590 1440,520 L1440,800 L0,800 Z",
                "M0,550 C480,480 960,620 1440,550 L1440,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            fill="url(#grad1)"
            opacity="0.4"
          />
        </svg>
      </div>
      
      {/* Sophisticated glow accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#6e293a]/20 via-[#a6717a]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#d4bfa8]/20 via-[#a6717a]/15 to-transparent blur-3xl" />
      <motion.div 
        className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-[#6e293a]/10 blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#6e293a] tracking-[0.2em] uppercase text-xs font-medium mb-8 whitespace-nowrap"
        >
          A Modern Marketing & Strategy Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-8 whitespace-nowrap"
        >
          <motion.span
            animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Strategy
          </motion.span>
          {' '}
          <span className="text-[#a6717a]">•</span>
          {' '}
          <motion.span
            animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
          >
            Storytelling
          </motion.span>
          {' '}
          <span className="text-[#a6717a]">•</span>
          {' '}
          <motion.span
            animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.6 }}
          >
            Growth
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          We help brands simplify marketing and grow with direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-[#6e293a] text-white rounded-full text-sm tracking-wide hover:bg-[#5a2130] transition-all duration-300"
          >
            Start a Project
          </button>
          <button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 border border-white/20 text-white rounded-full text-sm tracking-wide hover:border-[#6e293a] hover:text-[#6e293a] transition-all duration-300"
          >
            View Our Work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}