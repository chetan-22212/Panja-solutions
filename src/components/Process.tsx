import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Palette, Code, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    desc: 'Deep dive into ecosystem requirements',
    details: 'Research, competitor analysis, stakeholder interviews'
  },
  {
    icon: Palette,
    title: 'Design',
    desc: 'Architecting the visual and technical blueprint',
    details: 'Wireframes, prototypes, design systems'
  },
  {
    icon: Code,
    title: 'Build',
    desc: 'Precision engineering with modern stacks',
    details: 'Agile development, code reviews, testing'
  },
  {
    icon: Rocket,
    title: 'Launch',
    desc: 'Seamless deployment and market entry',
    details: 'Deployment, monitoring, performance optimization'
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    desc: 'Optimization for global growth',
    details: 'Analytics, iteration, continuous improvement'
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#FEFEFE] via-[#FAFCFE] to-[#F8FBFD] relative overflow-hidden">
      {/* Background Elements - More Subtle */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#2098D0]/3 to-transparent rounded-full" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#95C1D9]/3 to-transparent rounded-full" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-[#0F2E52] rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border-2 border-[#0F2E52] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header - More Elegant */}
        <div className="mb-20 md:mb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#0F2E52] font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Methodical Excellence
            </p>
            <h2 className="text-5xl md:text-7xl font-light text-[#0F2E52] mb-6">
              Our <span className="font-serif italic">Process</span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#0F2E52] to-transparent mx-auto mb-8" />
            <p className="text-[#255490]/80 text-xl max-w-2xl mx-auto font-light">
              A refined methodology for transforming vision into exceptional digital experiences
            </p>
          </motion.div>
        </div>

        {/* Desktop Version - Elegant Timeline */}
        <div ref={containerRef} className="relative hidden md:block">
          {/* Subtle Background Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0F2E52]/20 to-transparent -translate-x-1/2" />
          
          {/* Animated Progress Line with Glow */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-[#0F2E52] via-[#2098D0] to-[#95C1D9] -translate-x-1/2 shadow-[0_0_20px_rgba(32,152,208,0.3)]"
          />

          {/* Floating Ornaments */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="absolute left-1/2 w-2 h-2 bg-white border border-[#0F2E52]/30 rounded-full -translate-x-1/2"
              style={{ top: `${20 + i * 20}%` }}
            />
          ))}

          <div className="space-y-36">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Decorative Connector Line */}
                  <div className={`absolute top-1/2 w-28 h-px bg-gradient-to-r ${
                    index % 2 === 0 
                      ? 'left-1/2 ml-4 from-[#0F2E52]/30 via-[#2098D0]/50 to-transparent' 
                      : 'right-1/2 mr-4 from-transparent via-[#2098D0]/50 to-[#0F2E52]/30'
                  }`} />

                  <div className={`flex items-center gap-28 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Content Card - More Sophisticated */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block ${index % 2 === 0 ? 'mr-12' : 'ml-12'}`}>
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 border border-[#0F2E52]/10 hover:border-[#0F2E52]/20 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                          {/* Subtle Background Pattern */}
                          <div className="absolute inset-0 opacity-5">
                            <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#0F2E52] rounded-full" />
                          </div>
                          
                          {/* Animated Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2E52]/0 via-[#2098D0]/0 to-[#0F2E52]/0 group-hover:from-[#0F2E52]/5 group-hover:via-[#2098D0]/3 group-hover:to-[#0F2E52]/5 transition-all duration-700 rounded-3xl" />
                          
                          {/* Icon with Elegant Background */}
                          <div className="relative mb-6">
                            <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${
                              index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                            }`}>
                              <div className="relative">
                                <Icon className="w-10 h-10 text-[#0F2E52]" />
                                <div className="absolute inset-0 bg-[#2098D0]/10 blur-xl rounded-full" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Title with Decorative Line */}
                          <div className={`relative mb-4 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                            <div className={`absolute top-1/2 w-6 h-px bg-gradient-to-r ${
                              index % 2 === 0 
                                ? 'right-0 from-[#0F2E52]/50 to-transparent' 
                                : 'left-0 from-transparent to-[#0F2E52]/50'
                            }`} />
                            <h3 className="text-2xl font-semibold text-[#0F2E52] tracking-wide">
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className="relative text-[#255490] text-lg mb-3 leading-relaxed">
                            {step.desc}
                          </p>
                          <p className="relative text-[#255490]/70 text-sm font-light tracking-wide">
                            {step.details}
                          </p>
                          
                          {/* Subtle Indicator */}
                          <div className={`absolute bottom-6 w-16 h-px bg-gradient-to-r ${
                            index % 2 === 0 
                              ? 'right-6 from-[#2098D0] to-transparent' 
                              : 'left-6 from-transparent to-[#2098D0]'
                          } group-hover:w-24 transition-all duration-500`} />
                        </div>
                      </div>
                    </div>

                    {/* Center Node - More Refined */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.3, ease: "backOut" }}
                        className="relative"
                      >
                        {/* Outer Ring */}
                        <div className="w-20 h-20 rounded-full border-2 border-[#0F2E52]/20 flex items-center justify-center">
                          {/* Inner Circle */}
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0F2E52] to-[#255490] shadow-lg flex items-center justify-center">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Floating Particles */}
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0"
                        >
                          <div className="absolute -top-2 left-1/2 w-1 h-1 bg-[#2098D0] rounded-full -translate-x-1/2" />
                          <div className="absolute top-1/2 -right-2 w-1 h-1 bg-[#2098D0] rounded-full -translate-y-1/2" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Version - Elegant Cards */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Vertical Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-9 top-20 bottom-0 w-px bg-gradient-to-b from-[#0F2E52]/30 via-[#2098D0]/50 to-transparent -translate-x-1/2" />
                )}

                <div className="flex gap-6">
                  {/* Icon Badge - Elegant */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-[#0F2E52] to-[#255490] p-0.5 shadow-lg">
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[#0F2E52]" />
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl border border-[#0F2E52]/20" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#0F2E52]/10 hover:border-[#0F2E52]/20 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    {/* Subtle Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F2E52]/0 via-[#2098D0]/0 to-[#0F2E52]/0 group-hover:from-[#0F2E52]/5 group-hover:via-[#2098D0]/3 group-hover:to-[#0F2E52]/5 transition-all duration-500" />
                    
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-px bg-gradient-to-r from-[#0F2E52]/50 to-transparent" />
                        <h3 className="text-xl font-semibold text-[#0F2E52]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[#255490] mb-3 leading-relaxed">
                        {step.desc}
                      </p>
                      <p className="text-[#255490]/70 text-sm mb-4 font-light">
                        {step.details}
                      </p>
                      
                      {/* Elegant Arrow */}
                      <div className="inline-flex items-center gap-2 text-[#0F2E52]/60 group-hover:text-[#2098D0] transition-colors duration-300">
                        <span className="text-sm tracking-wide">Explore</span>
                        <div className="w-4 h-px bg-current" />
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - More Sophisticated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 md:mt-32 text-center"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0F2E52]/10 via-transparent to-[#2098D0]/10 blur-sm" />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-[#0F2E52]/10 p-10 hover:border-[#0F2E52]/20 hover:shadow-2xl transition-all duration-500">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-light text-[#0F2E52] mb-3">
                    Begin Your <span className="font-serif italic">Journey</span>
                  </h4>
                  <p className="text-[#255490]/70">
                    Let's collaborate to create something extraordinary
                  </p>
                </div>
                
                <button className="group relative px-10 py-4 bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2098D0] to-[#0F2E52] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-3">
                    Initiate Collaboration
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}