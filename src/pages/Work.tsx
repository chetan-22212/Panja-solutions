import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const projects = [{
  id: 1,
  title: 'FinTech Global Platform',
  client: 'Horizon Finance',
  category: 'Web',
  image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
  tags: ['React', 'Node.js', 'AWS']
}, {
  id: 2,
  title: 'Mission Control Interface',
  client: 'AeroSpace Dynamics',
  category: 'Enterprise',
  image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1470&auto=format&fit=crop',
  tags: ['Vue.js', 'WebGL', 'Real-time']
}, {
  id: 3,
  title: 'Sustainable Grid Analytics',
  client: 'EcoEnergy',
  category: 'Data',
  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop',
  tags: ['Python', 'D3.js', 'Big Data']
}, {
  id: 4,
  title: 'HealthConnect Mobile',
  client: 'MediCare Plus',
  category: 'Mobile',
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop',
  tags: ['React Native', 'Firebase', 'HealthKit']
}, {
  id: 5,
  title: 'Retail Intelligence',
  client: 'ShopFlow',
  category: 'AI',
  image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1470&auto=format&fit=crop',
  tags: ['TensorFlow', 'Computer Vision', 'Edge']
}, {
  id: 6,
  title: 'Smart City Dashboard',
  client: 'Metro Systems',
  category: 'Web',
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
  tags: ['Next.js', 'Mapbox', 'IoT']
}];
const categories = ['All', 'Web', 'Mobile', 'Enterprise', 'Data', 'AI'];
export function Work() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="min-h-screen bg-[#F8FAFC]">
      {/* Hero with Abstract Tech Visual */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-20">
        <motion.div initial={{
        scale: 1.1,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        duration: 1.5
      }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2E52]/90 to-[#F8FAFC] z-10" />
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" alt="Digital Work" className="w-full h-full object-cover opacity-60" />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.h1 initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.8
        }} className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Featured Work
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
        }} className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            A selection of projects defining the future of digital interaction.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map(cat => <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-[#0F2E52] text-white' : 'bg-white text-[#255490] hover:bg-[#2098D0]/10'}`}>
              {cat}
            </button>)}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map(project => <motion.div layout key={project.id} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.5
          }} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <div className="absolute inset-0 bg-[#0F2E52]/20 z-10 group-hover:bg-[#0F2E52]/0 transition-colors duration-500" />
                  <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-[#0F2E52]" />
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[#2098D0] text-sm font-bold uppercase tracking-wide mb-2">
                      {project.client}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F2E52] mb-3 group-hover:text-[#255490] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.tags.map((tag, i) => <span key={i} className="text-xs font-medium text-[#255490]/60 bg-[#255490]/5 px-2 py-1 rounded">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>;
}