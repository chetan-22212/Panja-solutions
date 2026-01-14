import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Smartphone, Cloud, Cpu, Layout } from 'lucide-react';
const services = [{
  title: 'Web Platforms',
  description: 'Enterprise-grade web applications built for scale and performance.',
  icon: Globe,
  color: 'from-[#0F2E52] to-[#255490]'
}, {
  title: 'Mobile Experiences',
  description: 'Native and cross-platform solutions that feel fluid and natural.',
  icon: Smartphone,
  color: 'from-[#255490] to-[#2098D0]'
}, {
  title: 'Cloud Systems',
  description: 'Resilient infrastructure architecture for global availability.',
  icon: Cloud,
  color: 'from-[#2098D0] to-[#95C1D9]'
}, {
  title: 'AI Automation',
  description: 'Intelligent workflows that optimize business operations.',
  icon: Cpu,
  color: 'from-[#0F2E52] to-[#2098D0]'
}, {
  title: 'UX Engineering',
  description: 'Data-driven design systems that bridge form and function.',
  icon: Layout,
  color: 'from-[#255490] to-[#95C1D9]'
}];
export function Capabilities() {
  const targetRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: targetRef
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  return <section ref={targetRef} className="relative h-[300vh] bg-[#FEFEFE]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-8 md:left-20 z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F2E52] mb-4">
            Capabilities
          </h2>
          <div className="h-1 w-20 bg-[#2098D0]" />
        </div>

        <motion.div style={{
        x
      }} className="flex gap-8 px-8 md:px-20 pt-20">
          {services.map((service, index) => <div key={index} className="group relative h-[60vh] w-[85vw] md:w-[30vw] flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative h-full flex flex-col justify-between p-8 md:p-12">
                <div className="w-16 h-16 rounded-2xl bg-[#0F2E52]/5 flex items-center justify-center mb-8 group-hover:bg-[#2098D0]/10 transition-colors">
                  <service.icon className="w-8 h-8 text-[#0F2E52] group-hover:text-[#2098D0] transition-colors" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#0F2E52] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#255490]/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-[#0F2E52]/10 mt-8 group-hover:bg-[#2098D0]/30 transition-colors" />
              </div>
            </div>)}
        </motion.div>
      </div>
    </section>;
}