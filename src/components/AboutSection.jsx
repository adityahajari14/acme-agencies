import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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

function CountingNumber({ end, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <motion.p
      ref={ref}
      className="text-3xl md:text-4xl font-light"
      animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {count}{suffix}
    </motion.p>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-40 bg-[#1a1a1a] relative overflow-hidden">
      {/* Elegant flowing waves background */}
      <div className="absolute inset-0 opacity-50">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6e293a', stopOpacity: 0.4 }} />
              <stop offset="50%" style={{ stopColor: '#a6717a', stopOpacity: 0.3 }} />
              <stop offset="75%" style={{ stopColor: '#f5f0ec', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#d4bfa8', stopOpacity: 0.2 }} />
            </linearGradient>
            <linearGradient id="grad2b" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f5f0ec', stopOpacity: 0.25 }} />
              <stop offset="30%" style={{ stopColor: '#d4bfa8', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#a6717a', stopOpacity: 0.25 }} />
              <stop offset="100%" style={{ stopColor: '#6e293a', stopOpacity: 0.35 }} />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ d: "M0,200 C400,100 800,300 1200,200 C1360,150 1440,180 1440,180 L1440,0 L0,0 Z" }}
            animate={{
              d: [
                "M0,200 C400,100 800,300 1200,200 C1360,150 1440,180 1440,180 L1440,0 L0,0 Z",
                "M0,250 C400,150 800,350 1200,250 C1360,200 1440,230 1440,230 L1440,0 L0,0 Z",
                "M0,180 C400,80 800,280 1200,180 C1360,130 1440,160 1440,160 L1440,0 L0,0 Z",
                "M0,200 C400,100 800,300 1200,200 C1360,150 1440,180 1440,180 L1440,0 L0,0 Z"
              ]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#grad2)"
          />
          <motion.path
            initial={{ d: "M0,600 C480,520 960,680 1440,600 L1440,800 L0,800 Z" }}
            animate={{
              d: [
                "M0,600 C480,520 960,680 1440,600 L1440,800 L0,800 Z",
                "M0,630 C480,550 960,710 1440,630 L1440,800 L0,800 Z",
                "M0,580 C480,500 960,660 1440,580 L1440,800 L0,800 Z",
                "M0,600 C480,520 960,680 1440,600 L1440,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            fill="url(#grad2b)"
            opacity="0.6"
          />
          <motion.path
            initial={{ d: "M0,380 C360,320 720,440 1080,380 C1280,340 1440,360 1440,360 L1440,0 L0,0 Z" }}
            animate={{
              d: [
                "M0,380 C360,320 720,440 1080,380 C1280,340 1440,360 1440,360 L1440,0 L0,0 Z",
                "M0,410 C360,350 720,470 1080,410 C1280,370 1440,390 1440,390 L1440,0 L0,0 Z",
                "M0,380 C360,320 720,440 1080,380 C1280,340 1440,360 1440,360 L1440,0 L0,0 Z"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            fill="url(#grad2)"
            opacity="0.3"
          />
        </svg>
      </div>
      
      {/* Ambient light effects */}
      <motion.div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-[#6e293a]/15 to-transparent blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-[#a6717a]/15 to-transparent blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <FadeIn>
              <p className="text-[#6e293a] tracking-[0.3em] uppercase text-xs font-medium mb-4">Our Story</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] mb-6">
                <motion.span
                  className="text-white"
                  animate={{ opacity: [1, 0.8, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Heritage meets
                </motion.span>
                <br />
                <motion.span
                  className="text-[#a6717a]"
                  animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  modern vision
                </motion.span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="w-16 h-px bg-[#d4bfa8] mb-8" />
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-white/60 leading-relaxed text-base md:text-lg font-light">
                Acme Agencies was born from a 25+ year business legacy — a foundation of trust, 
                relationships, and sharp commercial instinct built by a father — Mr. Sharad Jain 
                who understood the power of connection in business.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-white/60 leading-relaxed text-base md:text-lg font-light">
                Now reimagined by his daughter — Ms. Khushi Jain — into a contemporary marketing 
                and strategy studio. Acme brings together the warmth of heritage with the precision 
                of modern brand thinking. We believe great brands are built with direction — not noise.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-white/60 leading-relaxed text-base md:text-lg font-light">
                From strategy to storytelling, we partner with brands that value clarity, 
                consistency, and meaningful growth. Every project is personal. Every strategy 
                is intentional.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/10">
                <div>
                  <CountingNumber end={25} suffix="+" duration={2} />
                  <p className="text-xs tracking-wider uppercase text-white/40 mt-1">Years of Legacy</p>
                </div>
                <div>
                  <CountingNumber end={50} suffix="+" duration={2.2} />
                  <p className="text-xs tracking-wider uppercase text-white/40 mt-1">Brands Served</p>
                </div>
                <div>
                  <motion.p
                    className="text-3xl md:text-4xl font-light"
                    animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    ∞
                  </motion.p>
                  <p className="text-xs tracking-wider uppercase text-white/40 mt-1">Stories Told</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Portrait Image Section */}
        <FadeIn delay={0.6}>
          <div className="mt-24 md:mt-32 grid md:grid-cols-3 gap-8 md:gap-8 items-center">
            <div className="md:col-span-1 max-w-sm mx-auto md:max-w-none">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6e293a]/30 to-[#a6717a]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src="/10.png" 
                    alt="Heritage and Vision" 
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              <p className="text-white/70 leading-relaxed text-base md:text-lg font-light italic">
                "Building a brand isn't about following trends — it's about creating a foundation 
                that stands the test of time. That's the legacy I inherited, and the vision I carry forward."
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-px bg-[#a6717a]" />
                <div>
                  <p className="text-white font-medium text-sm">Khushi Jain, CEO & Strategist</p>
                  <p className="text-white/40 text-xs tracking-wider uppercase mt-1">Second Generation Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}