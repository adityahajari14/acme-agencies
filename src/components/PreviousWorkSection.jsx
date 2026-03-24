import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Prachaar Manch',
    url: 'https://www.instagram.com/p/DBYeSheMaZ1/?hl=en',
  },
  {
    title: 'Sobek Naturals',
    url: 'https://www.instagram.com/p/DD4WbklPPYR/?hl=en',
  },
  {
    title: 'Rainvas',
    url: 'https://www.instagram.com/p/C_awwl-oooQ/?hl=en',
  },
  {
    title: 'Riansh',
    url: 'https://www.instagram.com/p/Ctg5tX9Jx14/',
  },
  {
    title: 'KaushikDhwanee',
    url: 'https://www.instagram.com/reel/DTAolV-jIB5/?igsh=dDA5czR6bmFmeWNw',
  },
  {
    title: 'KaushikDhwanee',
    url: 'https://www.instagram.com/reel/DTDJIl8jeHw/?igsh=MTQ5ZThycmJxemVncw%3D%3D',
  },
  {
    title: 'Taare',
    url: 'https://www.instagram.com/reel/DSqXu47gbGR/?igsh=MWR4MHhxcGt0MWxndw%3D%3D',
  },
  {
    title: 'Taare',
    url: 'https://www.instagram.com/reel/DSaVZyYEfoD/?igsh=MXU3enlpdXA5ZHQ2OQ%3D%3D',
  },
];

function getInstagramEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const segments = parsed.pathname.split('/').filter(Boolean);
    const mediaType = segments[0] === 'reel' ? 'reel' : 'p';
    const shortcode = segments[1];

    if (!shortcode) {
      return '';
    }

    return `https://www.instagram.com/${mediaType}/${shortcode}/embed`;
  } catch {
    return '';
  }
}

const photographs = [
  { title: 'Sobek Naturals', src: '/Sobek Naturals 1.png' },
  { title: 'The Serene by Rainvas', src: '/Serene by Rainvas 1.png' },
  { title: 'Taare', src: '/Taare 1.png' },
  { title: 'Sobek Naturals', src: '/Sobek Naturals 2.png' },
  { title: 'The Serene by Rainvas', src: '/Serene by Rainvas 2.png' },
  { title: 'Taare', src: '/Taare 2.png' },
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

export default function PreviousWorkSection() {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <section id="previous-work" className="py-28 md:py-40 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-[#6e293a] tracking-[0.3em] uppercase text-xs font-medium mb-4">Previous Work</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-12">
            <motion.span
              className="text-white"
              animate={{ color: ['#ffffff', '#f5f0ec', '#ffffff'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Our creative
            </motion.span>
            {' '}
            <motion.span
              animate={{ color: ['#a6717a', '#f5f0ec', '#a6717a'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              portfolio
            </motion.span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex gap-4 mb-12 border-b border-white/10">
            <button
              onClick={() => setActiveTab('videos')}
              className={`pb-3 px-2 text-sm tracking-wide transition-all duration-300 border-b-2 ${
                activeTab === 'videos' ? 'border-[#6e293a] text-white' : 'border-transparent text-white/40 hover:text-white/60'
              }`}
            >
              Videos ({videos.length})
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`pb-3 px-2 text-sm tracking-wide transition-all duration-300 border-b-2 ${
                activeTab === 'photos' ? 'border-[#6e293a] text-white' : 'border-transparent text-white/40 hover:text-white/60'
              }`}
            >
              Photographs ({photographs.length})
            </button>
          </div>
        </FadeIn>

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, i) => (
              <FadeIn key={`${video.title}-${i}`} delay={i * 0.05}>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${video.title} reel on Instagram`}
                  className="group relative block aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer bg-[#121212] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-[#a6717a]/50 hover:shadow-[0_16px_42px_rgba(110,41,58,0.32)]"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#6e293a]/20 via-transparent to-black/75" />
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-[#6e293a]/25 via-transparent to-[#a6717a]/20" />

                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      src={getInstagramEmbedUrl(video.url)}
                      title={`${video.title} Instagram preview`}
                      loading="lazy"
                      scrolling="no"
                      allowTransparency={true}
                      className="pointer-events-none absolute left-1/2 top-1/2 w-[190%] h-[170%] -translate-x-1/2 -translate-y-[45%]"
                    />
                  </div>

                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#6e293a]/45 backdrop-blur-md border border-white/45 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm border border-[#a6717a]/35">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#f5f0ec]">Instagram</p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                    <p className="text-white text-sm font-medium tracking-tight mb-0.5">{video.title}</p>
                    <p className="text-[11px] text-white/60 tracking-wide">Watch on Instagram</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photographs.map((photo, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-[#1a1a1a] border border-white/5">
                  <img src={photo.src} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-xs font-light">{photo.title}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}