import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <section className="relative min-h-screen flex items-center py-20 px-6 bg-[#0F2E52] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#2098D0 1px, transparent 1px), linear-gradient(90deg, #2098D0 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#2098D0]/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#95C1D9]/20 rounded-full blur-[120px]"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Service Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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

            {/* Service Selector */}
            <div className="space-y-4">
              {coreServices.map((service, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left group relative overflow-hidden transition-all duration-300 ${
                    activeService === index ? 'scale-105' : ''
                  }`}
                >
                  {/* Active Indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2098D0] to-[#95C1D9] transition-all duration-300 ${
                    activeService === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  <div className={`pl-8 pr-6 py-6 border-l-4 transition-all duration-300 ${
                    activeService === index 
                      ? 'border-[#2098D0] bg-[#2098D0]/10' 
                      : 'border-white/10 hover:border-white/30'
                  }`}>
                    <div className="flex items-center gap-4">
                      <span className={`text-6xl font-bold transition-all duration-300 ${
                        activeService === index 
                          ? 'text-[#2098D0]' 
                          : 'text-white/20 group-hover:text-white/40'
                      }`}>
                        {service.number}
                      </span>
                      
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                          activeService === index 
                            ? 'text-white' 
                            : 'text-white/60 group-hover:text-white/80'
                        }`}>
                          {service.title}
                        </h3>
                      </div>

                      <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${
                        activeService === index 
                          ? 'text-[#2098D0] rotate-0' 
                          : 'text-white/40 -rotate-45 group-hover:rotate-0'
                      }`} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Side - Active Service Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Glowing Card */}
                <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-2xl">
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-[#2098D0] via-[#95C1D9] to-[#255490] rounded-3xl -z-10 opacity-50 blur-sm" />
                  
                  {/* Icon with Animated Background */}
                  <div className="relative mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-br from-[#2098D0]/20 to-[#95C1D9]/20 rounded-2xl blur-xl"
                      style={{ width: '80px', height: '80px' }}
                    />
                    <div 
                      className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: coreServices[activeService].color }}
                    >
                      {React.createElement(coreServices[activeService].icon, {
                        className: "w-10 h-10 text-white"
                      })}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#0F2E52] mb-6">
                    {coreServices[activeService].title}
                  </h3>

                  <p className="text-[#255490] text-lg mb-8 leading-relaxed">
                    {coreServices[activeService].desc}
                  </p>

                  {/* Features with Stagger Animation */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {coreServices[activeService].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: coreServices[activeService].color }}
                        />
                        <span className="text-[#0F2E52] font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button 
                    className="w-full py-4 rounded-xl font-bold text-white relative overflow-hidden group"
                    style={{ backgroundColor: coreServices[activeService].color }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Explore Solutions
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>

                {/* Floating Number */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  className="absolute -top-8 -right-8 text-[12rem] font-bold text-[#2098D0] pointer-events-none select-none"
                >
                  {coreServices[activeService].number}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}