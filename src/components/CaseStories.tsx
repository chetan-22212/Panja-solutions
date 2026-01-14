import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const cases = [{
  client: 'FinTech Global',
  title: 'Reimagining Digital Banking',
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
  category: 'Mobile App'
}, {
  client: 'AeroSpace Dynamics',
  title: 'Mission Control Interface',
  image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1470&auto=format&fit=crop',
  category: 'Web Platform'
}, {
  client: 'EcoEnergy',
  title: 'Sustainable Grid Analytics',
  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop',
  category: 'Data Visualization'
}];
export function CaseStories() {
  return <section className="py-32 px-4 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F2E52]">
            Selected Works
          </h2>
          <button className="hidden md:flex items-center gap-2 text-[#2098D0] font-medium hover:gap-4 transition-all">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-20 md:space-y-32">
          {cases.map((story, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 100
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-10%'
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8">
                <div className="absolute inset-0 bg-[#0F2E52]/20 z-10 group-hover:bg-[#0F2E52]/0 transition-colors duration-500" />
                <motion.img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[#2098D0] font-medium tracking-wide uppercase text-sm mb-2 block">
                    {story.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0F2E52] group-hover:text-[#255490] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-[#255490]/60 text-lg mt-2">
                    {story.client}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full border border-[#0F2E52]/20 flex items-center justify-center group-hover:bg-[#0F2E52] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}