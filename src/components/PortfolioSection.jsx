import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const brandsBuiltWith = [
  'Brihans Natural Products', 'Unjha Pharmacy', 'Appeline Cosmetics', 'Parakh Foods',
  'Donear Textiles', 'Indore Dugdh Sangh', 'Bajaj Tempo', 'Hipolin Marketing',
  'Hygienewear International', 'M.P. Khadi Board', 'Riansh Store', 'Rainvas', 'Urbantap.io',
];

const currentPartners = [
  {
    name: 'Taare',
    category: 'Fashion & Lifestyle',
    image: '/clients/11.png',
  },
  {
    name: 'KaushikDhwanee',
    category: 'Creative Art Academy',
    image: '/clients/12.png',
  },
  {
    name: 'The Zephyr Travels',
    category: 'Travel',
    image: '/clients/13.png',
  },
  {
    name: 'Techmonkey.space',
    category: 'IT & Consultancy',
    image: '/clients/14.png',
  },
  {
    name: 'FundNexus',
    category: 'Investment & PE',
    image: '/clients/15.png',
  },
  {
    name: 'Mellow Apparels',
    category: 'Fashion & Lifestyle',
    image: '/clients/16.png',
  },
  {
    name: 'Trishula India EATmee',
    category: 'Food & Beverage',
    image: '/clients/17.png',
  },
];

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 md:py-40 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-[#6e293a] tracking-[0.3em] uppercase text-xs font-medium mb-4">Portfolio</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-20">
            <motion.span
              className="text-white"
              animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Brands we
            </motion.span>
            {' '}
            <motion.span
              animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              grow with
            </motion.span>
          </h2>
        </FadeIn>

        {/* Brands We've Built With — Infinite Scroll Marquee */}
        <FadeIn delay={0.2}>
          <div className="mb-20 overflow-hidden">
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-8">Brands We've Built With</p>
            <div className="relative overflow-hidden">
              <div className="marquee-track animate-scroll-brands">
                {[0, 1].map((copyIndex) => (
                  <div key={copyIndex} className="marquee-group" aria-hidden={copyIndex === 1}>
                    {brandsBuiltWith.map((brand) => (
                      <div
                        key={`${copyIndex}-${brand}`}
                        className="flex-shrink-0 px-4 py-2 border border-white/20 rounded-full text-xs text-white/80 font-light whitespace-nowrap bg-white/5"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Currently Partnered With — Visual grid with names */}
        <FadeIn delay={0.3}>
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-8">Currently Partnered With</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPartners.map((partner, i) => (
            <FadeIn key={partner.name} delay={0.3 + i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer bg-[#0f0f0f] border border-white/5">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-medium text-base mb-1">{partner.name}</p>
                  <p className="text-white/60 text-xs font-light">{partner.category}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-brands {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .marquee-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-right: 0.75rem;
          flex-shrink: 0;
        }
        .animate-scroll-brands {
          animation: scroll-brands 28s linear infinite;
        }
        .animate-scroll-brands:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}