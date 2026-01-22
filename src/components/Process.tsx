import  { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Deep dive into ecosystem requirements',
    details: 'Research, competitor analysis, stakeholder interviews'
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Architecting the visual and technical blueprint',
    details: 'Wireframes, prototypes, design systems'
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Precision engineering with modern stacks',
    details: 'Agile development, code reviews, testing'
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'Seamless deployment and market entry',
    details: 'Deployment, monitoring, performance optimization'
  },
  {
    number: '05',
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
    <section className="py-10 md:py-15 px-4 bg-gradient-to-b from-[#FEFEFE] to-[#F8FBFD] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#2098D0]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#95C1D9]/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-[#2098D0]" />
              <p className="text-[#2098D0] font-bold tracking-widest uppercase text-xs">
                Our Approach
              </p>
              <div className="h-[2px] w-8 bg-[#2098D0]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F2E52] mb-4">
              The Journey
            </h2>
            <p className="text-[#255490]/70 text-lg max-w-2xl mx-auto">
              A systematic approach to transforming ideas into impactful digital experiences
            </p>
          </motion.div>
        </div>

        {/* Desktop Version - Zigzag Timeline */}
        <div ref={containerRef} className="relative hidden md:block">
          {/* Background Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#0F2E52]/10 -translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#0F2E52] to-[#255490] -translate-x-1/2"
          />

          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line to Center */}
                <div className={`absolute top-1/2 w-24 h-[2px] bg-[#0F2E52]/10 ${index % 2 === 0 ? 'right-1/2 mr-5' : 'left-1/2 ml-5'
                  }`} />

                <div className={`flex items-center gap-24 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block">
                      <div className="relative bg-white border-2 border-[#0F2E52]/10 rounded-2xl p-8 hover:border-[#0F2E52]/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                        {/* Gradient Overlay on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2E52]/0 via-[#255490]/0 to-[#0F2E52]/0 group-hover:from-[#0F2E52]/5 group-hover:via-[#255490]/5 group-hover:to-[#0F2E52]/5 transition-all duration-500 rounded-2xl" />

                        {/* Corner Accent */}
                        <div className={`absolute top-0 w-20 h-20 bg-gradient-to-br from-[#0F2E52]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index % 2 === 0 ? 'right-0' : 'left-0 rotate-90'
                          }`} />

                        <div className={`relative flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                          }`}>
                          <div className="text-5xl font-bold text-[#0F2E52]/20 group-hover:text-[#0F2E52]/30 transition-colors duration-300">
                            {step.number}
                          </div>
                          <div className="h-12 w-[2px] bg-[#0F2E52]/20 group-hover:bg-[#0F2E52]/40 transition-colors duration-300" />
                          <h3 className="text-3xl font-bold text-[#0F2E52]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="relative text-[#255490] text-lg mb-3">
                          {step.desc}
                        </p>
                        <p className="relative text-[#255490]/60 text-sm">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-[#0F2E52] shadow-lg flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-[#0F2E52]" />
                      </div>
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-full border-4 border-[#0F2E52] animate-ping opacity-20" />
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Version - Vertical Cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-[2px] bg-gradient-to-b from-[#0F2E52] to-[#255490]/20 -translate-x-1/2" />
              )}

              <div className="flex gap-4">
                {/* Number Badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#0F2E52] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 relative bg-white border-2 border-[#0F2E52]/10 rounded-2xl p-6 hover:border-[#0F2E52]/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F2E52]/0 to-[#255490]/0 group-hover:from-[#0F2E52]/5 group-hover:to-[#255490]/5 transition-all duration-500" />

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0F2E52]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-[#0F2E52] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#255490] mb-3">
                      {step.desc}
                    </p>
                    <p className="text-[#255490]/60 text-sm mb-4">
                      {step.details}
                    </p>

                    {/* Arrow Indicator */}
                    <div className="flex items-center gap-2 text-[#0F2E52] text-sm font-semibold group-hover:text-[#255490] transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white border-2 border-[#0F2E52]/10 rounded-2xl p-8 hover:border-[#2098D0]/30 transition-colors duration-300">
            <div className="text-left">
              <h4 className="text-xl font-bold text-[#0F2E52] mb-2">
                Ready to start your journey?
              </h4>
              <p className="text-[#255490]/70">
                Let's discuss how we can bring your vision to life
              </p>
            </div>
            <button className="px-8 py-4 bg-[#0F2E52] text-white font-semibold rounded-xl hover:bg-[#255490] transition-colors duration-300 flex items-center gap-2 whitespace-nowrap">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}