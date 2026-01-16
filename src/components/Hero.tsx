import  { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
const heroImages = [{
  url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  alt: 'Global Digital Network'
}, {
  url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop',
  alt: 'AI Technology Innovation'
}, {
  url: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop',
  alt: 'Digital Transformation'
}, {
  url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
  alt: 'Modern Software Development'
}, {
  url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  alt: 'Technology Innovation Hub'
}];
export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, []);
  return <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Slideshow Background with Ken Burns Effect */}
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="sync">
        <motion.div key={currentSlide} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 1.5,
          ease: 'easeInOut'
        }} className="absolute inset-0">
          {/* Ken Burns Zoom Effect */}
          <motion.div initial={{
            scale: 1
          }} animate={{
            scale: 1.1
          }} transition={{
            duration: 6,
            ease: 'linear'
          }} className="w-full h-full">
            <img src={heroImages[currentSlide].url} alt={heroImages[currentSlide].alt} className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay for Text Readability */}
     {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E52]/60 via-[#0F2E52]/40 to-[#0F2E52]/80 z-10" /> */}

    </div>

    {/* Hero Text Content */}
    <motion.div style={{
      y: yText,
      opacity: opacityText,
      scale: scaleText
    }} className="relative z-20 text-center px-4 max-w-7xl mx-auto">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="mb-6">
        <span className="text-[#95C1D9] font-medium tracking-[0.2em] uppercase text-sm md:text-base drop-shadow-lg">
          Panja Solutions
        </span>
      </motion.div>

      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
        <motion.span className="block" initial={{
          opacity: 0,
          y: 100
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}>
          Engineering
        </motion.span>
        <motion.span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#95C1D9] to-[#2098D0]" initial={{
          opacity: 0,
          y: 100
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}>
          Digital Excellence
        </motion.span>
      </h1>

      <motion.p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }}>
        Crafting future-proof digital ecosystems through precision engineering
        and cinematic design.
      </motion.p>
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }}>
      <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent" />
    </motion.div>

    {/* Slideshow Indicators */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />)}
    </div>
  </section>;
}