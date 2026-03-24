import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, User, Smartphone, PenTool, ShoppingCart, Palette, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'Personal Branding',
    description: 'Crafting authentic personal brands that resonate and build lasting authority.',
  },
  {
    icon: Smartphone,
    title: 'Digital & Social Media Marketing',
    description: 'Strategic social presence that turns followers into communities and customers.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Growth & Funnels',
    description: 'Growth-focused e-commerce strategy with optimized customer journeys.',
  },
  {
    icon: PenTool,
    title: 'Content Creation & Campaigns',
    description: 'Compelling narratives and campaign execution that move audiences to action.',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Visual systems that communicate your brand essence at every touchpoint.',
  },
  {
    icon: BarChart3,
    title: 'Market Research & Consumer Insights',
    description: 'Data-driven insights that inform smarter decisions and strategic growth.',
  },
];

export default function ServicesSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(services.length / 3);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleServices = () => {
    return services.slice(currentIndex * 3, currentIndex * 3 + 3);
  };

  return (
    <section id="services" className="py-28 md:py-40 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#6e293a] tracking-[0.3em] uppercase text-xs font-medium mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-light tracking-tight"
          >
            <motion.span
              className="text-white"
              animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Services built for
            </motion.span>
            {' '}
            <motion.span
              animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              growth
            </motion.span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {getVisibleServices().map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title + currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group p-8 md:p-10 border border-white/10 hover:border-[#6e293a] rounded-2xl transition-all duration-500 hover:shadow-lg hover:shadow-[#6e293a]/10 bg-[#1a1a1a]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] flex items-center justify-center mb-6 group-hover:bg-[#6e293a] transition-colors duration-500">
                    <Icon size={22} className="text-[#a6717a] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">{service.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#6e293a] hover:bg-[#6e293a] transition-all duration-300 group"
            >
              <ChevronLeft size={20} className="text-white/60 group-hover:text-white transition-colors" />
            </button>
            <span className="text-white/40 text-sm">{currentIndex + 1} / {totalSlides}</span>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#6e293a] hover:bg-[#6e293a] transition-all duration-300 group"
            >
              <ChevronRight size={20} className="text-white/60 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}