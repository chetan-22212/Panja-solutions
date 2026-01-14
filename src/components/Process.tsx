import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const steps = [{
  title: 'Discover',
  desc: 'Deep dive into ecosystem requirements'
}, {
  title: 'Design',
  desc: 'Architecting the visual and technical blueprint'
}, {
  title: 'Build',
  desc: 'Precision engineering with modern stacks'
}, {
  title: 'Launch',
  desc: 'Seamless deployment and market entry'
}, {
  title: 'Scale',
  desc: 'Optimization for global growth'
}];
export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });
  return <section className="py-32 px-4 bg-[#FEFEFE] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2E52] mb-6">
            The Process
          </h2>
          <p className="text-[#255490] max-w-2xl mx-auto">
            A systematic approach to digital evolution.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0F2E52]/10 -translate-x-1/2" />

          <motion.div style={{
          scaleY: scrollYProgress
        }} className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#2098D0] -translate-x-1/2 origin-top" />

          <div className="space-y-24">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.6
          }} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-3xl font-bold text-[#0F2E52] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#255490]/80 text-lg">{step.desc}</p>
                </div>

                {/* Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#FEFEFE] border-4 border-[#2098D0] shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#0F2E52]" />
                  </div>
                </div>

                {/* Spacer for layout balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}