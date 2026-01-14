import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Panja Technologies didn't just build a platform; they engineered a digital legacy for our brand.",
    author: 'Sarah Chen',
    role: 'CTO, Horizon Finance',
    image: 'SC',
    rating: 5,
    color: '#2098D0'
  },
  {
    quote: 'The level of precision and cinematic quality in their work is unmatched in the industry.',
    author: 'Marcus Thorne',
    role: 'Director, Thorne Aerospace',
    image: 'MT',
    rating: 5,
    color: '#255490'
  },
  {
    quote: 'A true partnership that transformed our complex requirements into an elegant user experience.',
    author: 'Elena Rodriguez',
    role: 'VP Product, EcoSystems',
    image: 'ER',
    rating: 5,
    color: '#95C1D9'
  }
];

export default function Trust() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-[#F8FBFD] via-[#EDF5FA] to-[#F8FBFD] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2098D0]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#95C1D9]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0F2E52 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#2098D0] text-[#2098D0]" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2E52] mb-3">
            Client Success Stories
          </h2>
          <p className="text-[#255490]/70 text-lg">
            Transforming visions into reality, one partnership at a time
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          {/* Large Quote Mark Background */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[200px] md:text-[300px] font-serif text-[#0F2E52]/5 leading-none pointer-events-none select-none">
            "
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="max-w-4xl mx-auto text-center px-4 md:px-12">
                  {/* Quote */}
                  <div className="mb-12">
                    <p className="text-2xl md:text-4xl text-[#0F2E52] leading-relaxed font-light italic">
                      "{testimonials[activeIndex].quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-6">
                    {/* Avatar */}
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg"
                      style={{ backgroundColor: testimonials[activeIndex].color }}
                    >
                      {testimonials[activeIndex].image}
                    </div>

                    {/* Divider */}
                    <div className="h-12 w-[1px] bg-[#0F2E52]/20" />

                    {/* Details */}
                    <div className="text-left">
                      <div className="font-bold text-lg md:text-xl text-[#0F2E52]">
                        {testimonials[activeIndex].author}
                      </div>
                      <div className="text-sm md:text-base text-[#255490]/70">
                        {testimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="group w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#0F2E52]/20 flex items-center justify-center hover:border-[#2098D0] hover:bg-[#2098D0] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-[#0F2E52] group-hover:text-white transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-[#2098D0]'
                      : 'w-2 h-2 bg-[#0F2E52]/20 hover:bg-[#0F2E52]/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="group w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#0F2E52]/20 flex items-center justify-center hover:border-[#2098D0] hover:bg-[#2098D0] transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#0F2E52] group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Bottom Stats/Trust Indicators */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Industry Awards' },
            { number: '15+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#95C1D9] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}