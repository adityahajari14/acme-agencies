import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, User, Smartphone, PenTool, ShoppingCart, Palette, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Brand Strategy',
    description: 'Defining your positioning, voice, and market direction with clarity and purpose.',
  },
  {
    icon: User,
    title: 'Personal Branding',
    description: 'Crafting authentic personal brands that resonate and build lasting authority.',
  },
  {
    icon: Smartphone,
    title: 'Digital & Social Media',
    description: 'Strategic social presence that turns followers into communities and customers.',
  },
  {
    icon: PenTool,
    title: 'Content & Campaigns',
    description: 'Compelling narratives and campaign execution that move audiences to action.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Funnels',
    description: 'Growth-focused e-commerce strategy with optimized customer journeys.',
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design',
    description: 'Visual systems that communicate your brand essence at every touchpoint.',
  },
  {
    icon: BarChart3,
    title: 'Market Research',
    description: 'Data-driven insights that inform smarter decisions and strategic growth.',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
      className="group p-8 md:p-10 border border-black/5 hover:border-[#d4bfa8] rounded-2xl transition-all duration-500 hover:shadow-lg hover:shadow-[#d4bfa8]/10 bg-white"
    >
      <div className="w-12 h-12 rounded-xl bg-[#f5f0ec] flex items-center justify-center mb-6 group-hover:bg-[#6e293a] transition-colors duration-500">
        <Icon size={22} className="text-[#6e293a] group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-lg font-medium text-black mb-3 tracking-tight">{service.title}</h3>
      <p className="text-sm text-black/50 leading-relaxed font-light">{service.description}</p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-28 md:py-40 bg-[#f5f0ec]">
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
            className="text-3xl md:text-5xl font-light tracking-tight text-black"
          >
            Services built for growth
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}