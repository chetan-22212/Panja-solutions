import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, ShoppingBag, Stethoscope, LineChart, Server } from 'lucide-react';
const industries = [{
  id: 'fintech',
  name: 'FinTech',
  icon: LineChart,
  title: 'Secure Financial Infrastructure',
  desc: 'Building the next generation of banking and payment systems with bank-grade security and real-time processing capabilities.',
  stats: ['99.99% Uptime', '<50ms Latency', 'PCI DSS Compliant'],
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
}, {
  id: 'health',
  name: 'Healthcare',
  icon: Stethoscope,
  title: 'Digital Health Ecosystems',
  desc: 'HIPAA-compliant platforms connecting patients, providers, and payers for better health outcomes.',
  stats: ['HIPAA Compliant', 'HL7/FHIR Ready', 'Telehealth Integration'],
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
}, {
  id: 'enterprise',
  name: 'Enterprise',
  icon: Building2,
  title: 'Digital Transformation',
  desc: 'Modernizing legacy systems and automating workflows for global organizations.',
  stats: ['Legacy Migration', 'Process Automation', 'Enterprise Security'],
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
}, {
  id: 'ecommerce',
  name: 'E-commerce',
  icon: ShoppingBag,
  title: 'Scalable Commerce',
  desc: 'High-conversion shopping experiences capable of handling flash-sale traffic spikes.',
  stats: ['Headless Commerce', 'Global Payments', 'Inventory Sync'],
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop'
}, {
  id: 'saas',
  name: 'SaaS',
  icon: Server,
  title: 'Product Engineering',
  desc: 'End-to-end product development for startups and scale-ups.',
  stats: ['MVP to Scale', 'Multi-tenant', 'Subscription Billing'],
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
}];
export function Solutions() {
  const [activeTab, setActiveTab] = useState(industries[0]);
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="pt-32 pb-20 min-h-screen bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0F2E52] mb-6">
            Solutions by Industry
          </h1>
          <p className="text-xl text-[#255490]/80 max-w-2xl mx-auto">
            Tailored technology strategies for sector-specific challenges.
          </p>
        </div>

        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map(industry => <button key={industry.id} onClick={() => setActiveTab(industry)} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab.id === industry.id ? 'bg-[#0F2E52] text-white shadow-lg scale-105' : 'bg-white text-[#255490] border border-[#0F2E52]/10 hover:border-[#2098D0]/50'}`}>
              <industry.icon size={16} />
              {industry.name}
            </button>)}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.5
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2098D0]/10 text-[#2098D0] text-sm font-bold uppercase tracking-wider mb-6">
                <activeTab.icon size={14} />
                {activeTab.name}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2E52] mb-6 leading-tight">
                {activeTab.title}
              </h2>
              <p className="text-lg text-[#255490]/80 mb-8 leading-relaxed">
                {activeTab.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {activeTab.stats.map((stat, i) => <div key={i} className="bg-[#F8FAFC] p-4 rounded-xl border border-[#0F2E52]/5">
                    <div className="w-2 h-2 rounded-full bg-[#2098D0] mb-3" />
                    <span className="font-medium text-[#0F2E52]">{stat}</span>
                  </div>)}
              </div>

              <button className="flex items-center gap-2 text-[#2098D0] font-bold hover:gap-4 transition-all group">
                View Case Study{' '}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#0F2E52]/20 mix-blend-multiply z-10" />
              <img src={activeTab.image} alt={activeTab.title} className="w-full h-full object-cover" />

              {/* Floating Card */}
              <motion.div initial={{
              y: 50,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.3
            }} className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl z-20 shadow-lg border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#2098D0] uppercase tracking-wider mb-1">
                      Impact
                    </div>
                    <div className="text-[#0F2E52] font-medium">
                      Accelerated digital adoption by 300%
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0F2E52] flex items-center justify-center text-white">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>;
}