import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Target, Zap, Award } from 'lucide-react';
const stats = [{
  label: 'Years of Excellence',
  value: '10+'
}, {
  label: 'Team Members',
  value: '50+'
}, {
  label: 'Global Clients',
  value: '100+'
}, {
  label: 'Awards Won',
  value: '25+'
}];
const values = [{
  icon: Target,
  title: 'Precision',
  desc: 'We believe in pixel-perfect execution and robust engineering standards.'
}, {
  icon: Zap,
  title: 'Innovation',
  desc: "Pushing the boundaries of what's possible with emerging technologies."
}, {
  icon: Users,
  title: 'Collaboration',
  desc: 'Building deep partnerships with our clients to understand their core needs.'
}, {
  icon: Award,
  title: 'Quality',
  desc: 'Never compromising on performance, security, or user experience.'
}];
export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start']
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="pt-32 pb-20 min-h-screen bg-[#FEFEFE]">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.h1 initial={{
        y: 20,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.8
      }} className="text-5xl md:text-8xl font-bold text-[#0F2E52] mb-8 tracking-tight">
          We are Panja.
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
      }} className="text-2xl md:text-3xl text-[#255490]/80 max-w-4xl leading-relaxed">
          A collective of engineers, designers, and strategists dedicated to
          building the digital future.
        </motion.p>
      </div>

      {/* Image Banner with Parallax */}
      <div ref={imageRef} className="w-full h-[60vh] relative overflow-hidden mb-32">
        <motion.div style={{
        y: yImage
      }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E52]/60 to-transparent z-10" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team collaboration" className="w-full h-[120%] object-cover" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-b border-[#0F2E52]/10 pb-20">
          {stats.map((stat, index) => <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-[#2098D0] mb-2">
                {stat.value}
              </div>
              <div className="text-[#0F2E52] font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </div>
            </div>)}
        </div>

        {/* Story with Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-bold text-[#0F2E52] mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-[#2098D0] mb-8" />

            {/* Story Image */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" alt="Innovation workspace" className="w-full h-64 object-cover" />
            </motion.div>
          </div>

          <div className="space-y-6 text-lg text-[#255490]/80 leading-relaxed">
            <p>
              Founded in 2014, Panja Technologies began with a simple mission:
              to bridge the gap between complex engineering and elegant design.
              We saw a digital landscape filled with functional but uninspiring
              tools, and beautiful but shallow experiences.
            </p>
            <p>
              We set out to create a new standard. One where robust architecture
              meets cinematic storytelling. Where data security coexists with
              fluid motion. Where enterprise software feels as intuitive as a
              consumer app.
            </p>
            <p>
              Today, we partner with global leaders in FinTech, Healthcare, and
              Enterprise sectors to solve their most critical digital
              challenges. We don't just build software; we engineer digital
              excellence.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-[#0F2E52] mb-16 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} className="bg-[#F8FAFC] p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#0F2E52]/5 flex items-center justify-center mb-6 group-hover:bg-[#2098D0] group-hover:text-white transition-colors">
                  <value.icon size={24} className="text-[#0F2E52] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F2E52] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#255490]/70">{value.desc}</p>
              </div>)}
          </div>
        </div>
      </div>
    </motion.div>;
}