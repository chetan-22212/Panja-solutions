import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Brain, Bug, Code2, ArrowUpRight, Zap } from 'lucide-react';

const coreServices = [
  {
    icon: Brain,
    number: '01',
    title: 'AI & Machine Learning',
    desc: 'Intelligent automation and predictive analytics that transform data into competitive advantage.',
    features: ['Neural Networks', 'Computer Vision', 'NLP & LLMs', 'Predictive Models'],
    color: '#2098D0'
  },
  {
    icon: Bug,
    number: '02',
    title: 'QA Automation',
    desc: 'Robust automated testing solutions to ensure quality, reliability, and faster releases.',
    features: ['Selenium & Playwright', 'API Automation', 'CI/CD Integration', 'Performance Testing'],
    color: '#95C1D9'
  },
  {
    icon: Code2,
    number: '03',
    title: 'Software Development',
    desc: 'Enterprise-grade applications built with modern architectures and engineering excellence.',
    features: ['Full-Stack Dev', 'API Design', 'Cloud Native', 'DevOps & CI/CD'],
    color: '#255490'
  }
];

export default function FeaturedServices() {
  const [activeService, setActiveService] = useState(0);

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  }, []);

  const service = coreServices[activeService];

  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 bg-[#0F2E52] overflow-hidden">

      {/* LIGHT background grid (no animation, no blur) */}
      {!isMobile && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(#2098D0 1px, transparent 1px), linear-gradient(90deg, #2098D0 1px, transparent 1px)',
            backgroundSize: '120px 120px'
          }}
        />
      )}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-[#2098D0]" />
                <p className="text-[#95C1D9] font-bold tracking-widest uppercase text-sm">
                  Core Capabilities
                </p>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                What We<br />Excel At
              </h2>

              <p className="text-[#95C1D9] text-xl mb-12 leading-relaxed">
                Three pillars of innovation, engineered to propel your business forward.
              </p>
            </motion.div>

            {/* SERVICE SELECTOR */}
            <div className="space-y-4">
              {coreServices.map((s, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left transition-all duration-300 ${
                    activeService === index ? 'scale-[1.02]' : ''
                  }`}
                >
                  <div
                    className={`pl-8 pr-6 py-6 border-l-4 transition-all duration-300 ${
                      activeService === index
                        ? 'border-[#2098D0] bg-[#2098D0]/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-5xl font-bold ${
                          activeService === index ? 'text-[#2098D0]' : 'text-white/30'
                        }`}
                      >
                        {s.number}
                      </span>

                      <h3
                        className={`text-xl font-bold flex-1 ${
                          activeService === index ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        {s.title}
                      </h3>

                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform ${
                          activeService === index ? 'rotate-0 text-[#2098D0]' : '-rotate-45 text-white/40'
                        }`}
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — SERVICE CARD */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-xl">

              {/* ICON */}
              <div className="mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: service.color }}
                >
                  {React.createElement(service.icon, {
                    className: 'w-10 h-10 text-white'
                  })}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#0F2E52] mb-6">
                {service.title}
              </h3>

              <p className="text-[#255490] text-lg mb-8 leading-relaxed">
                {service.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="text-[#0F2E52] font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: service.color }}
              >
                Explore Solutions
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
