import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Code2, Sparkles } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
const coreServices = [{
  icon: Brain,
  title: 'AI / Machine Learning',
  desc: 'Transform your business with intelligent automation, predictive analytics, and cutting-edge machine learning models that drive measurable results.',
  features: ['Neural Networks', 'Computer Vision', 'NLP & LLMs', 'Predictive Models'],
  gradient: 'from-[#0F2E52] via-[#255490] to-[#2098D0]'
}, {
  icon: TrendingUp,
  title: 'Digital Marketing & Growth',
  desc: 'Data-driven marketing strategies that accelerate growth through SEO, performance marketing, analytics, and conversion optimization.',
  features: ['SEO Strategy', 'Performance Ads', 'Analytics & BI', 'Growth Hacking'],
  gradient: 'from-[#2098D0] via-[#95C1D9] to-[#2098D0]'
}, {
  icon: Code2,
  title: 'Custom Software Development',
  desc: 'End-to-end software engineering for web, mobile, and enterprise platforms built with modern architectures and best practices.',
  features: ['Full-Stack Dev', 'API Design', 'Cloud Native', 'DevOps & CI/CD'],
  gradient: 'from-[#255490] via-[#0F2E52] to-[#255490]'
}];
export function FeaturedServices() {
  return <section className="relative py-32 px-6 bg-[#FEFEFE] overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2098D0]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#95C1D9]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2098D0]/10 text-[#2098D0] font-bold uppercase tracking-wider text-sm mb-6">
            <Sparkles size={16} />
            Core Services
          </motion.div>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl md:text-6xl font-bold text-[#0F2E52] mb-6">
            Powering Digital Transformation
          </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-xl text-[#255490]/80 max-w-3xl mx-auto">
            Our flagship services combining cutting-edge technology with
            strategic execution to accelerate your business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.15
        }} className="group relative">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2098D0] to-[#95C1D9] rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              {/* Pulsing Border Animation */}
              <motion.div animate={{
            boxShadow: ['0 0 0 0 rgba(32, 152, 208, 0)', '0 0 0 8px rgba(32, 152, 208, 0.1)', '0 0 0 0 rgba(32, 152, 208, 0)']
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="absolute inset-0 rounded-3xl" />

              {/* Card Content */}
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#0F2E52]/10 overflow-hidden">
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2098D0] text-white text-xs font-bold uppercase tracking-wider">
                  Featured
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon */}
                <motion.div whileHover={{
              scale: 1.1,
              rotate: 5
            }} transition={{
              type: 'spring',
              stiffness: 300
            }} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F2E52] to-[#2098D0] flex items-center justify-center mb-8 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#0F2E52] mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-[#255490]/80 mb-8 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, i) => <div key={i} className="flex items-center gap-2 text-sm text-[#0F2E52]/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2098D0]" />
                      {feature}
                    </div>)}
                </div>

                <MagneticButton className="w-full bg-[#0F2E52] text-white hover:bg-[#255490]">
                  Explore Solutions
                </MagneticButton>
              </div>
            </motion.div>)}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="text-center mt-16">
          <p className="text-[#255490]/60 text-lg">
            Need a custom solution?{' '}
            <a href="/contact" className="text-[#2098D0] font-bold hover:underline">
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>;
}