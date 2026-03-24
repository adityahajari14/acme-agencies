import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Khushi joined Riansh as an intern and quickly grew to lead the entire startup. Her strategic mindset, creativity, and data-driven approach played a crucial role in scaling our marketing efforts and strengthening the brand. She is a proactive leader, always bringing innovative ideas and executing them with precision.",
    name: 'Shubham Goyal',
    role: 'Founder & Director, Riansh',
  },
  {
    quote: "One of the most versatile people I have worked with. Khushi comes with a creative marketing background and what I love the most about her is that she is always curious to learn more and seeks more than just the job role itself. Highly recommended.",
    name: 'Kalyani Sankritayayan',
    role: 'CEO, Rainvas',
  },
  {
    quote: "Khushi joined us as a Market Research intern and worked directly under me. Khushi's way of communication is fantastic which makes things easier for her to convey and understand. Khushi is a leader and with the right mentoring and support she can do wonders.",
    name: 'Rishabh Bapna',
    role: 'Director, SEC',
  },
  {
    quote: "Khushi Jain joined us at vivo as a Marketing Intern, and in just two months, she made a solid impact! She's a quick learner, actively contributed to major projects, and even shared some great ideas. Her proactive approach and initiative-taking attitude make her stand out.",
    name: 'Nitya Dikhit',
    role: 'System Business Analyst, VIVO',
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

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 md:py-40 bg-[#6e293a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-[#d4bfa8] tracking-[0.3em] uppercase text-xs font-medium mb-4">Testimonials</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-16 md:mb-20">
            <motion.span
              className="text-white"
              animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Words from our
            </motion.span>
            {' '}
            <motion.span
              animate={{ color: ['#d4bfa8', '#f5f0ec', '#d4bfa8'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              partners
            </motion.span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.15 + i * 0.1}>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                <Quote size={28} className="text-[#d4bfa8] mb-6 flex-shrink-0" />
                <p className="text-white/80 leading-relaxed font-light text-sm flex-1 mb-8">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs mt-1">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}