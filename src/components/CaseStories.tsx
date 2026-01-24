import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight,  Zap, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    client: 'FinTech Global',
    title: 'Quantum Banking Platform',
    category: 'FinTech Solution',
    year: '2023',
    duration: '6 months',
    team: '15 specialists',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop',
    highlights: [
      { icon: Zap, label: '300% ROI', value: 'in 6 months' },
      { icon: Users, label: '2.5M+', value: 'active users' },
      { icon: TrendingUp, label: '99.9%', value: 'uptime' }
    ],
    description: 'A revolutionary banking platform leveraging AI for personalized financial management and fraud detection.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Blockchain'],
    challenge: 'Modernize legacy systems while maintaining 24/7 global banking operations.',
    solution: 'Implemented microservices architecture with zero-downtime migration strategy.'
  },
  {
    id: 2,
    client: 'AeroSpace Dynamics',
    title: 'Mission Control System',
    category: 'Enterprise Platform',
    year: '2024',
    duration: '8 months',
    team: '20 engineers',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1470&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop',
    highlights: [
      { icon: Zap, label: '40%', value: 'faster decisions' },
      { icon: Users, label: '50+', value: 'simultaneous missions' },
      { icon: TrendingUp, label: '100%', value: 'data accuracy' }
    ],
    description: 'Real-time mission control dashboard for aerospace operations with predictive analytics.',
    tech: ['Vue.js', 'Python', 'MongoDB', 'WebSocket', 'Redis'],
    challenge: 'Processing real-time telemetry data from multiple sources with sub-second latency.',
    solution: 'Built event-driven architecture capable of handling 100k+ events per second.'
  },
  {
    id: 3,
    client: 'EcoEnergy Corp',
    title: 'Sustainable Grid Analytics',
    category: 'Data Intelligence',
    year: '2023',
    duration: '5 months',
    team: '12 specialists',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    highlights: [
      { icon: Zap, label: '25%', value: 'energy savings' },
      { icon: Users, label: '15 cities', value: 'deployed' },
      { icon: TrendingUp, label: '85%', value: 'prediction accuracy' }
    ],
    description: 'AI-powered energy grid optimization system for sustainable power distribution.',
    tech: ['Next.js', 'TensorFlow', 'GraphQL', 'Kubernetes', 'Docker'],
    challenge: 'Predict energy consumption patterns across diverse geographical regions.',
    solution: 'Developed ML models trained on 5+ years of historical consumption data.'
  },
  {
    id: 4,
    client: 'HealthTech Solutions',
    title: 'Medical Diagnostics AI',
    category: 'Healthcare Platform',
    year: '2024',
    duration: '7 months',
    team: '18 specialists',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1470&auto=format&fit=crop',
    preview: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop',
    highlights: [
      { icon: Zap, label: '95%', value: 'diagnosis accuracy' },
      { icon: Users, label: '500+', value: 'hospitals' },
      { icon: TrendingUp, label: '60%', value: 'faster results' }
    ],
    description: 'Advanced AI platform for medical image analysis and diagnostic assistance.',
    tech: ['React Native', 'Python', 'PyTorch', 'FastAPI', 'PostgreSQL'],
    challenge: 'Ensuring HIPAA compliance while maintaining real-time processing capabilities.',
    solution: 'Implemented end-to-end encryption with edge computing for sensitive data.'
  }
];

export function CaseStories() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'carousel'
  const navigate = useNavigate();

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 md:py-28 px-4 bg-gradient-to-b from-[#F8FAFC] to-[#F0F5FA] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2098D0]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0F2E52]/5 rounded-full blur-[100px]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #0F2E52 1px, transparent 1px),
                           linear-gradient(to bottom, #0F2E52 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <div className="h-1 w-12 bg-gradient-to-r from-[#0F2E52] to-[#2098D0]" />
                <span className="text-[#0F2E52] font-bold tracking-widest uppercase text-xs">
                  Portfolio Spotlight
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0F2E52] mb-4">
                Innovation <span className="text-[#2098D0]">Showcase</span>
              </h2>
              <p className="text-[#255490]/70 text-lg max-w-2xl">
                Transforming industries through cutting-edge technology solutions
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 p-1 bg-white rounded-xl border border-[#0F2E52]/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white' 
                      : 'text-[#255490]/70 hover:text-[#0F2E52]'
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'carousel' 
                      ? 'bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white' 
                      : 'text-[#255490]/70 hover:text-[#0F2E52]'
                  }`}
                >
                  Interactive View
                </button>
              </div>
              
              {/* <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#0F2E52]/10 rounded-xl hover:border-[#0F2E52]/30 hover:shadow-lg transition-all duration-300 group">
                <span className="text-[#0F2E52] font-medium">View All</span>
                <ArrowUpRight className="w-5 h-5 text-[#2098D0] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button> */}
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '300%', label: 'Average ROI' },
              { value: '24/7', label: 'Support Uptime' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#0F2E52]/5 hover:border-[#2098D0]/30 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-[#0F2E52] mb-2">{stat.value}</div>
                <div className="text-[#255490]/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: Interactive Grid View */}
        <div className="hidden md:block">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(index as any)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative group"
                >
                  {/* Main Card */}
                  <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-[#0F2E52]/10 hover:border-[#2098D0]/30 transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E52]/30 via-transparent to-transparent z-10" />
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl">
                          <span className="text-[#2098D0] font-bold text-sm">{project.category}</span>
                        </div>
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute top-6 right-6 z-20">
                        <div className="px-3 py-1 bg-[#0F2E52] text-white rounded-lg text-sm">
                          {project.year}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-[#0F2E52] mb-2 group-hover:text-[#2098D0] transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-[#255490]/70">{project.client}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-[#0F2E52]/10 flex items-center justify-center group-hover:bg-[#0F2E52] group-hover:border-[#0F2E52] transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 text-[#0F2E52] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#0F2E52]/5">
                        {project.highlights.map((highlight, idx) => {
                          const Icon = highlight.icon;
                          return (
                            <div key={idx} className="text-center">
                              <div className="flex items-center justify-center gap-1 mb-1">
                                <Icon className="w-4 h-4 text-[#2098D0]" />
                                <div className="text-lg font-bold text-[#0F2E52]">{highlight.label}</div>
                              </div>
                              <div className="text-xs text-[#255490]/70">{highlight.value}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="px-8 pb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[#0F2E52]/5 text-[#255490] text-sm rounded-lg">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-[#2098D0]/10 text-[#2098D0] text-sm rounded-lg">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay - Detailed View */}
                  <AnimatePresence>
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 z-30 bg-white rounded-2xl shadow-2xl p-8 border-2 border-[#2098D0]/20"
                      >
                        <div className="space-y-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="text-[#2098D0] font-bold text-sm mb-2">{project.category} • {project.year}</div>
                              <h4 className="text-2xl font-bold text-[#0F2E52] mb-2">{project.title}</h4>
                              <p className="text-[#255490]">{project.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-[#255490]/70 mb-1">Duration</div>
                              <div className="text-lg font-bold text-[#0F2E52]">{project.duration}</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-[#255490]/70 mb-2">Challenge</div>
                              <p className="text-[#255490] text-sm">{project.challenge}</p>
                            </div>
                            <div>
                              <div className="text-sm text-[#255490]/70 mb-2">Solution</div>
                              <p className="text-[#255490] text-sm">{project.solution}</p>
                            </div>
                          </div>

                          <div className="pt-6 border-t border-[#0F2E52]/10">
                            <div className="text-sm text-[#255490]/70 mb-3">Technologies</div>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 text-[#0F2E52] text-sm rounded-lg border border-[#0F2E52]/10">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Desktop: Carousel View */
            <div className="relative">
              {/* Navigation Controls */}
              <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between -translate-y-1/2 pointer-events-none">
                <button
                  onClick={prevProject}
                  className="pointer-events-auto w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-[#0F2E52]/10 hover:border-[#2098D0] hover:bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-[#0F2E52]" />
                </button>
                <button
                  onClick={nextProject}
                  className="pointer-events-auto w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm border border-[#0F2E52]/10 hover:border-[#2098D0] hover:bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-[#0F2E52]" />
                </button>
              </div>

              {/* Carousel Content */}
              <div className="relative">
                {projects.map((project, index) => (
                  <AnimatePresence key={project.id}>
                    {index === activeProject && (
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 gap-12"
                      >
                        {/* Left Column - Image */}
                        <div className="relative">
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <img
                              src={project.preview || project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E52]/30 to-transparent" />
                          </div>
                          
                          {/* Floating Stats */}
                          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-[#0F2E52]/10">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-[#0F2E52] mb-1">{project.team}</div>
                              <div className="text-sm text-[#255490]/70">Team Size</div>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="space-y-8">
                          <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                              <div className="h-1 w-8 bg-[#2098D0]" />
                              <span className="text-[#2098D0] font-bold text-sm">{project.category}</span>
                            </div>
                            <h3 className="text-4xl font-bold text-[#0F2E52] mb-4">{project.title}</h3>
                            <p className="text-[#255490] text-lg">{project.description}</p>
                          </div>

                          {/* Client Info */}
                          <div className="bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 rounded-xl p-6">
                            <div className="text-sm text-[#255490]/70 mb-2">Client</div>
                            <div className="text-2xl font-bold text-[#0F2E52]">{project.client}</div>
                            <div className="text-[#255490]/70 mt-1">Completed in {project.year}</div>
                          </div>

                          {/* Results */}
                          <div className="grid grid-cols-3 gap-4">
                            {project.highlights.map((highlight, idx) => {
                              const Icon = highlight.icon;
                              return (
                                <div key={idx} className="bg-white rounded-xl p-4 border border-[#0F2E52]/10">
                                  <Icon className="w-6 h-6 text-[#2098D0] mb-3" />
                                  <div className="text-xl font-bold text-[#0F2E52]">{highlight.label}</div>
                                  <div className="text-sm text-[#255490]/70 mt-1">{highlight.value}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeProject
                          ? 'bg-gradient-to-r from-[#0F2E52] to-[#2098D0] w-8'
                          : 'bg-[#0F2E52]/20 hover:bg-[#0F2E52]/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border-2 border-[#0F2E52]/10"
            >
              {/* Project Header */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E52]/40 to-transparent" />
                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg">
                    <span className="text-[#2098D0] font-bold text-sm">{project.category}</span>
                  </div>
                  <div className="px-3 py-1 bg-[#0F2E52] text-white rounded-lg text-sm">
                    {project.year}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#0F2E52] mb-2">{project.title}</h3>
                  <p className="text-[#255490]/70">{project.client}</p>
                </div>

                <p className="text-[#255490] mb-6">{project.description}</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="bg-[#0F2E52]/5 rounded-xl p-3 text-center">
                        <Icon className="w-5 h-5 text-[#2098D0] mx-auto mb-2" />
                        <div className="font-bold text-[#0F2E52] text-sm">{highlight.label}</div>
                        <div className="text-xs text-[#255490]/70 mt-1">{highlight.value}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-sm text-[#255490]/70 mb-3">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#0F2E52]/5 text-[#255490] text-sm rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-[#2098D0]/10 text-[#2098D0] text-sm rounded-lg">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-[#0F2E52]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-[#255490]/70">Duration</div>
                      <div className="font-bold text-[#0F2E52]">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#255490]/70">Team</div>
                      <div className="font-bold text-[#0F2E52]">{project.team}</div>
                    </div>
                    <button className="w-12 h-12 rounded-full border-2 border-[#0F2E52]/10 flex items-center justify-center hover:bg-[#0F2E52] hover:border-[#0F2E52] transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-[#0F2E52]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Mobile View All Button */}
          {/* <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300">
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </button>
          </div> */}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 md:mt-32 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 rounded-3xl p-8 md:p-12 border-2 border-[#0F2E52]/10">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-[#0F2E52] mb-3">
                Have a project in mind?
              </h4>
              <p className="text-[#255490]/70 max-w-xl">
                Let's create something exceptional together. Share your vision and we'll bring it to life.
              </p>
            </div>
            <button className="px-10 py-4 bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap" onClick={() => {
                  navigate('/contact')
                }}>
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}