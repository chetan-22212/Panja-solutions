import  { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Smartphone, Cloud, Cpu, Layout, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Web Platforms',
    description: 'Enterprise-grade web applications built for scale and performance.',
    icon: Globe,
    number: '01',
    tags: ['React', 'Node.js', 'AWS'],
    stat: '200+',
    statLabel: 'Projects Deployed'
  },
  {
    title: 'Mobile Experiences',
    description: 'Native and cross-platform solutions that feel fluid and natural.',
    icon: Smartphone,
    number: '02',
    tags: ['iOS', 'Android', 'Flutter'],
    stat: '50M+',
    statLabel: 'Active Users'
  },
  {
    title: 'Cloud Systems',
    description: 'Resilient infrastructure architecture for global availability.',
    icon: Cloud,
    number: '03',
    tags: ['Kubernetes', 'Docker', 'Terraform'],
    stat: '99.9%',
    statLabel: 'Uptime SLA'
  },
  {
    title: 'AI Automation',
    description: 'Intelligent workflows that optimize business operations.',
    icon: Cpu,
    number: '04',
    tags: ['TensorFlow', 'PyTorch', 'GPT'],
    stat: '10x',
    statLabel: 'Efficiency Gain'
  },
  {
    title: 'UX Engineering',
    description: 'Data-driven design systems that bridge form and function.',
    icon: Layout,
    number: '05',
    tags: ['Figma', 'Design Systems', 'A/B Testing'],
    stat: '85%',
    statLabel: 'User Satisfaction'
  }
];

export default function Capabilities() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gradient-to-b from-[#FEFEFE] via-[#F8F9FA] to-[#FEFEFE]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0F2E52 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#2098D0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#95C1D9]/10 rounded-full blur-[120px]" />

        {/* Fixed Header */}
        <div className="absolute top-12 left-8 md:left-16 z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="flex items-center gap-3 mb-4"> */}
              {/* <div className="h-[2px] w-12 bg-[#2098D0]" /> */}
              {/* <p className="text-[#2098D0] font-bold tracking-widest uppercase text-xs"> */}
                {/* Full Spectrum */}
              {/* </p> */}
            {/* </div> */}
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F2E52] mb-3 leading-tight">
              Our Technical Arsenal
            </h2>
            <p className="text-[#255490]/60 text-sm">
              {/* Scroll to explore → */}
            </p>
          </motion.div>
        </div>

        {/* Scrolling Cards */}
        <motion.div 
          style={{ x }} 
          className="flex gap-5 px-8 md:px-16 pt-48 md:pt-32"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[50vh] w-[70vw] md:w-[25vw] flex-shrink-0"
            >
              {/* Main Card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-[#0F2E52]/10 hover:border-[#2098D0]/30 transition-all duration-500">
                
                {/* Animated Gradient Border Glow */}
                <div className="absolute -inset-[2px] bg-gradient-to-br from-[#2098D0] via-[#95C1D9] to-[#255490] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Top Section - Number & Icon */}
                <div className="relative bg-[#0F2E52] p-6 pb-20">
                  {/* Mesh Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#255490]/50 to-transparent" />
                  
                  <div className="relative flex justify-between items-start mb-6">
                    <span className="text-[#95C1D9]/40 font-bold text-5xl">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#2098D0] transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 inline-block">
                    <div className="text-3xl font-bold text-white mb-1">
                      {service.stat}
                    </div>
                    <div className="text-[#95C1D9] text-xs font-medium uppercase tracking-wider">
                      {service.statLabel}
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Content */}
                <div className="relative p-6 flex flex-col justify-between" style={{ height: 'calc(100% - 180px)' }}>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F2E52] mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#255490]/70 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#0F2E52]/5 text-[#0F2E52] text-xs font-semibold rounded-lg border border-[#0F2E52]/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="group/btn w-full py-3 px-4 bg-[#0F2E52] text-white rounded-xl font-semibold flex items-center justify-between hover:bg-[#255490] transition-all duration-300">
                    <span className="text-sm">View Projects</span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                  <service.icon className="w-full h-full text-[#0F2E52]" strokeWidth={0.5} />
                </div>
              </div>

              {/* Floating Index Number */}
              <div className="absolute -top-6 -left-4 text-8xl font-bold text-[#0F2E52]/5 pointer-events-none select-none">
                {service.number}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}