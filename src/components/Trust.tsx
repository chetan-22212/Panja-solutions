import React from 'react';
import { motion } from 'framer-motion';
const testimonials = [{
  quote: "Panja Technologies didn't just build a platform; they engineered a digital legacy for our brand.",
  author: 'Sarah Chen',
  role: 'CTO, Horizon Finance'
}, {
  quote: 'The level of precision and cinematic quality in their work is unmatched in the industry.',
  author: 'Marcus Thorne',
  role: 'Director, Thorne Aerospace'
}, {
  quote: 'A true partnership that transformed our complex requirements into an elegant user experience.',
  author: 'Elena Rodriguez',
  role: 'VP Product, EcoSystems'
}];
export function Trust() {
  return <section className="py-32 px-4 bg-[#FEFEFE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-sm font-bold tracking-[0.2em] text-[#2098D0] uppercase mb-20">
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="relative p-8 rounded-3xl bg-[#f8fafc] border border-[#0F2E52]/5 hover:border-[#2098D0]/20 transition-colors">
              <div className="text-4xl text-[#2098D0] font-serif mb-6">"</div>
              <p className="text-xl text-[#0F2E52] leading-relaxed mb-8 font-light">
                {item.quote}
              </p>
              <div>
                <div className="font-bold text-[#0F2E52]">{item.author}</div>
                <div className="text-sm text-[#255490]/70">{item.role}</div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}