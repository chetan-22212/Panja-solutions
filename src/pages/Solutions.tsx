import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, ShoppingBag, Stethoscope, LineChart, Server } from 'lucide-react';

const industries = [{
  id: 'fintech',
  name: 'FinTech',
  icon: LineChart,
  title: 'Secure Financial Infrastructure',
  desc: 'Building the next generation of banking and payment systems with bank-grade security and real-time processing capabilities.',
  stats: ['99.99% Uptime', '<50ms Latency', 'PCI DSS Compliant'],
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  caseStudy: 'We partnered with a leading neobank to build a cloud-native core banking platform from the ground up. The solution features real-time payment processing with sub-50ms latency, automated compliance checks using machine learning, and a robust API ecosystem for third-party integrations. Since launch, the platform has processed over $2 billion in transactions, maintained 99.99% uptime, and scaled seamlessly to handle 1 million concurrent users during peak promotional events.'
}, {
  id: 'health',
  name: 'Healthcare',
  icon: Stethoscope,
  title: 'Digital Health Ecosystems',
  desc: 'HIPAA-compliant platforms connecting patients, providers, and payers for better health outcomes.',
  stats: ['HIPAA Compliant', 'HL7/FHIR Ready', 'Telehealth Integration'],
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
  caseStudy: 'For a regional healthcare network, we developed an integrated telehealth platform that connects patients with providers across 50+ clinics. The system includes secure video consultations, real-time electronic health record (EHR) integration using HL7/FHIR standards, and AI-powered symptom checkers. The result was a 40% reduction in patient intake time, 30% increase in appointment adherence, and full HIPAA compliance, enabling the network to expand virtual care services during the pandemic.'
}, {
  id: 'enterprise',
  name: 'Enterprise',
  icon: Building2,
  title: 'Digital Transformation',
  desc: 'Modernizing legacy systems and automating workflows for global organizations.',
  stats: ['Legacy Migration', 'Process Automation', 'Enterprise Security'],
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  caseStudy: 'We led a digital transformation initiative for a global manufacturing company with a 20-year-old legacy ERP system. Our team migrated the monolithic system to a microservices architecture running on Kubernetes, implemented AI-driven demand forecasting models, and automated supply chain workflows. This modernization reduced IT operational costs by 30%, improved system reliability with 99.95% uptime, and enabled real-time visibility across 15 manufacturing plants worldwide.'
}, {
  id: 'ecommerce',
  name: 'E-commerce',
  icon: ShoppingBag,
  title: 'Scalable Commerce',
  desc: 'High-conversion shopping experiences capable of handling flash-sale traffic spikes.',
  stats: ['Headless Commerce', 'Global Payments', 'Inventory Sync'],
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
  caseStudy: 'We engineered a headless commerce solution for a fast-growing fashion retailer to support their omnichannel strategy. The platform decouples the frontend from backend services, allowing for rapid iteration and personalized shopping experiences. It handles flash sales with 10x normal traffic spikes, processes over 500,000 orders per day, and synchronizes inventory in real-time across web, mobile, and physical stores. Since implementation, the client has seen a 25% increase in conversion rates and a 40% reduction in cart abandonment.'
}, {
  id: 'saas',
  name: 'SaaS',
  icon: Server,
  title: 'Product Engineering',
  desc: 'End-to-end product development for startups and scale-ups.',
  stats: ['MVP to Scale', 'Multi-tenant', 'Subscription Billing'],
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
  caseStudy: 'We partnered with a B2B SaaS startup to take their product from MVP to enterprise scale. We designed a multi-tenant architecture with isolated databases for data security, implemented usage-based billing with Stripe, and built advanced analytics dashboards. Today, the platform serves over 200 enterprise customers, handles 50 million API requests daily, and has achieved a 99.9% uptime SLA, enabling the startup to secure Series B funding.'
}];
export function Solutions() {
  const [activeTab, setActiveTab] = useState(industries[0]);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(false);

  const handleTabChange = (industry: typeof industries[0]) => {
    setActiveTab(industry);
    setExpandedCaseStudy(false); // collapse case study when switching tabs
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 min-h-screen bg-[#FEFEFE]"
    >
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
          {industries.map(industry => (
            <button
              key={industry.id}
              onClick={() => handleTabChange(industry)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab.id === industry.id
                  ? 'bg-[#0F2E52] text-white shadow-lg scale-105'
                  : 'bg-white text-[#255490] border border-[#0F2E52]/10 hover:border-[#2098D0]/50'
              }`}
            >
              <industry.icon size={16} />
              {industry.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
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
                {activeTab.stats.map((stat, i) => (
                  <div key={i} className="bg-[#F8FAFC] p-4 rounded-xl border border-[#0F2E52]/5">
                    <div className="w-2 h-2 rounded-full bg-[#2098D0] mb-3" />
                    <span className="font-medium text-[#0F2E52]">{stat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setExpandedCaseStudy(!expandedCaseStudy)}
                className="flex items-center gap-2 text-[#2098D0] font-bold hover:gap-4 transition-all group mb-6"
              >
                View Case Study{' '}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Expanded Case Study Details */}
              <AnimatePresence>
                {expandedCaseStudy && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#F0F7FF] border-l-4 border-[#2098D0] p-6 rounded-xl text-[#0F2E52]"
                  >
                    <p className="text-base leading-relaxed">{activeTab.caseStudy}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#0F2E52]/20 mix-blend-multiply z-10" />
              <img
                src={activeTab.image}
                alt={activeTab.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Floating Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl z-20 shadow-lg border border-white/50"
              >
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
    </motion.div>
  );
}