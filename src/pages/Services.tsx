// import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Code2, Cloud, Smartphone, Layout, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { LampContainer } from "../components/ui/Lamp";
const services = [{
  icon: Brain,
  title: 'AI / Machine Learning Solutions',
  desc: 'Transform your business with intelligent automation, predictive analytics, and cutting-edge machine learning models.',
  features: ['Neural Networks & Deep Learning', 'Computer Vision & NLP', 'Predictive Analytics', 'Process Automation'],
  color: 'from-[#0F2E52] to-[#2098D0]',
  featured: true
}, 
 {
  icon: Code2,
  title: 'Custom Software Development',
  desc: 'End-to-end software engineering for web, mobile, and enterprise platforms built with modern architectures.',
  features: ['Full-Stack Development', 'API & Microservices', 'Cloud-Native Apps', 'DevOps & CI/CD'],
  color: 'from-[#255490] to-[#0F2E52]',
  featured: true
},
{
  icon: Smartphone,
  title: 'Mobile Experiences',
  desc: 'Native and cross-platform solutions that feel fluid and natural.',
  features: ['React Native / Flutter', 'iOS & Android Native', 'Offline-First Design', 'Biometric Security'],
  color: 'from-[#255490] to-[#2098D0]',
  featured: true
},
 {
  icon: Cloud,
  title: 'Cloud Infrastructure',
  desc: 'Resilient infrastructure architecture for global availability and scale.',
  features: ['AWS / Azure / GCP', 'Kubernetes & Docker', 'Serverless Architecture', 'Infrastructure as Code'],
  color: 'from-[#2098D0] to-[#95C1D9]',
  featured: false
},  {
  icon: Layout,
  title: 'UX Engineering',
  desc: 'Data-driven design systems that bridge form and function.',
  features: ['Design Systems', 'User Research & Testing', 'Rapid Prototyping', 'Accessibility (WCAG)'],
  color: 'from-[#255490] to-[#95C1D9]',
  featured: false
}, {
  icon: TrendingUp,
  title: 'Digital Marketing & Growth',
  desc: 'Data-driven marketing strategies that accelerate growth through SEO, performance marketing, and conversion optimization.',
  features: ['SEO & Content Strategy', 'Performance Marketing', 'Analytics & Attribution', 'Growth Engineering'],
  color: 'from-[#2098D0] to-[#95C1D9]',
  featured: false
},];
export function Services() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="min-h-screen bg-[#FEFEFE]">
    {/* Hero Section with Image */}
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div initial={{
        scale: 1.1
      }} animate={{
        scale: 1
      }} transition={{
        duration: 1.5
      }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E52]/80 to-[#FEFEFE] z-10" />
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Technology Services" className="w-full h-full object-cover" />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.8
        }} className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          Our Expertise
        </motion.h1>
        <motion.p initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-xl text-white/90 drop-shadow-lg">
          Comprehensive digital solutions engineered for impact and scale.
        </motion.p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => <motion.div key={index} initial={{
          y: 40,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border overflow-hidden ${service.featured ? 'border-[#2098D0]/30 lg:col-span-1' : 'border-[#0F2E52]/5'} hover:-translate-y-2`}>
          {/* Featured Spotlight Effect */}
          {service.featured && <>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2098D0] to-[#95C1D9] rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            <motion.div animate={{
              boxShadow: ['0 0 0 0 rgba(32, 152, 208, 0)', '0 0 0 6px rgba(32, 152, 208, 0.1)', '0 0 0 0 rgba(32, 152, 208, 0)']
            }} transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }} className="absolute inset-0 rounded-3xl" />
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-[#2098D0] text-white text-xs font-bold uppercase tracking-wider z-10">
              <Sparkles size={12} />
              Featured
            </div>
          </>}

          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

          <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all ${service.featured ? 'bg-gradient-to-br from-[#0F2E52] to-[#2098D0] shadow-lg' : 'bg-[#0F2E52]/5 group-hover:bg-[#2098D0]/10'}`}>
            <service.icon className={`w-7 h-7 transition-colors ${service.featured ? 'text-white' : 'text-[#0F2E52] group-hover:text-[#2098D0]'}`} />
          </div>

          <h3 className="relative text-2xl font-bold text-[#0F2E52] mb-4">
            {service.title}
          </h3>
          <p className="relative text-[#255490]/70 mb-8 leading-relaxed">
            {service.desc}
          </p>

          <ul className="relative space-y-3 mb-8">
            {service.features.map((feature, i) => <li key={i} className="flex items-center gap-3 text-sm text-[#0F2E52]/80">
              <CheckCircle size={16} className="text-[#2098D0] flex-shrink-0" />
              {feature}
            </li>)}
          </ul>

          <div className="relative pt-6 border-t border-[#0F2E52]/10">
            <button className="flex items-center gap-2 text-[#2098D0] font-medium group-hover:gap-3 transition-all">
              Learn more <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>)}
      </div>

      <div className="mt-32 text-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="relative z-10">
          <LampContainer>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-[#95C1D9] text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how our engineering expertise can solve your
              unique challenges.
            </p>
            <MagneticButton className="bg-white text-[#0F2E52] hover:bg-[#95C1D9]">
              Start a Conversation
            </MagneticButton>
          </LampContainer>

        </div>
      </div>
    </div>
  </motion.div>;
}