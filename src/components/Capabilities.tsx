import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Globe, Smartphone, Cloud, Cpu, Layout, ArrowRight, CheckCircle, 
  Megaphone, ShieldCheck, Database, Settings,Search,Grid, List,
  X, // Add this import
  LucideIcon // Import LucideIcon type
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Define TypeScript interface for service
interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  number: string;
  tags: string[];
  stat: string;
  statLabel: string;
  category: string;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Web Platforms',
    description: 'Enterprise-grade web applications built for scale and performance with modern architectures.',
    icon: Globe,
    number: '01',
    tags: ['React', 'Node.js', 'Next.js', 'AWS', 'TypeScript'],
    stat: '200+',
    statLabel: 'Projects Deployed',
    category: 'Development',
    color: '#2098D0',
    gradient: 'from-[#2098D0] to-[#95C1D9]'
  },
  {
    id: 2,
    title: 'Mobile Experiences',
    description: 'Native and cross-platform solutions that feel fluid and natural on every device.',
    icon: Smartphone,
    number: '02',
    tags: ['iOS', 'Android', 'Flutter', 'React Native', 'Swift'],
    stat: '50M+',
    statLabel: 'Active Users',
    category: 'Development',
    color: '#0F2E52',
    gradient: 'from-[#0F2E52] to-[#255490]'
  },
  {
    id: 3,
    title: 'Cloud Systems',
    description: 'Resilient infrastructure architecture for global availability and scalability.',
    icon: Cloud,
    number: '03',
    tags: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure'],
    stat: '99.9%',
    statLabel: 'Uptime SLA',
    category: 'Infrastructure',
    color: '#2098D0',
    gradient: 'from-[#2098D0] to-[#95C1D9]'
  },
  {
    id: 4,
    title: 'AI Automation',
    description: 'Intelligent workflows and automation that transform business operations.',
    icon: Cpu,
    number: '04',
    tags: ['TensorFlow', 'PyTorch', 'GPT', 'MLOps', 'Computer Vision'],
    stat: '10x',
    statLabel: 'Efficiency Gain',
    category: 'AI/ML',
    color: '#0F2E52',
    gradient: 'from-[#0F2E52] to-[#255490]'
  },
  {
    id: 5,
    title: 'UX Engineering',
    description: 'Data-driven design systems that perfectly bridge form and function.',
    icon: Layout,
    number: '05',
    tags: ['Figma', 'Design Systems', 'A/B Testing', 'User Research', 'Prototyping'],
    stat: '85%',
    statLabel: 'User Satisfaction',
    category: 'Design',
    color: '#2098D0',
    gradient: 'from-[#2098D0] to-[#95C1D9]'
  },
  {
    id: 6,
    title: 'Quality Assurance',
    description: 'Comprehensive testing strategies ensuring reliability and peak performance.',
    icon: CheckCircle,
    number: '06',
    tags: ['Automation Testing', 'Playwright', 'Jest', 'CI/CD', 'Performance'],
    stat: '99%',
    statLabel: 'Defect-Free Releases',
    category: 'Testing',
    color: '#0F2E52',
    gradient: 'from-[#0F2E52] to-[#255490]'
  },
  {
    id: 7,
    title: 'Digital Marketing',
    description: 'Data-driven growth strategies focused on acquisition, retention, and ROI.',
    icon: Megaphone,
    number: '07',
    tags: ['SEO', 'Performance Ads', 'Analytics', 'Content Strategy', 'Social Media'],
    stat: '3x',
    statLabel: 'Conversion Growth',
    category: 'Marketing',
    color: '#2098D0',
    gradient: 'from-[#2098D0] to-[#95C1D9]'
  },
  {
    id: 8,
    title: 'Cybersecurity',
    description: 'Proactive threat detection and compliance solutions for secure operations.',
    icon: ShieldCheck,
    number: '08',
    tags: ['Pen Testing', 'Zero Trust', 'Compliance', 'SOC', 'Encryption'],
    stat: '0',
    statLabel: 'Critical Breaches',
    category: 'Security',
    color: '#0F2E52',
    gradient: 'from-[#0F2E52] to-[#255490]'
  },
  {
    id: 9,
    title: 'Data Engineering',
    description: 'Scalable data pipelines powering analytics and AI-driven decisions.',
    icon: Database,
    number: '09',
    tags: ['ETL', 'BigQuery', 'Data Warehousing', 'Spark', 'Airflow'],
    stat: '10TB+',
    statLabel: 'Data Processed Daily',
    category: 'Data',
    color: '#2098D0',
    gradient: 'from-[#2098D0] to-[#95C1D9]'
  },
  {
    id: 10,
    title: 'DevOps Consulting',
    description: 'Accelerating delivery with modern CI/CD and infrastructure automation.',
    icon: Settings,
    number: '10',
    tags: ['CI/CD', 'GitOps', 'Monitoring', 'Infrastructure', 'Automation'],
    stat: '5x',
    statLabel: 'Deployment Speed',
    category: 'Infrastructure',
    color: '#0F2E52',
    gradient: 'from-[#0F2E52] to-[#255490]'
  }
];

const categories = ['All', 'Development', 'Infrastructure', 'AI/ML', 'Design', 'Testing', 'Marketing', 'Security', 'Data'];

export default function Capabilities() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

 const filteredServices = useMemo(() => 
  services.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  }),
  [activeCategory, searchTerm]
);

 const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
const backgroundY = useTransform(scrollYProgress, [0, 1], isMobile ? ['0%', '0%'] : ['0%', '50%']);
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  // Helper function to get Icon component
  const getServiceIcon = (service: Service) => {
    const Icon = service.icon;
    return <Icon className="w-6 h-6 text-[#0F2E52]" />;
  };

    const navigate = useNavigate();


  return (
    <section ref={containerRef} className="relative min-h-screen py-20 md:py-32 bg-gradient-to-b from-[#FEFEFE] via-[#F8FBFD] to-[#FEFEFE] overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#2098D0]/10 to-transparent rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0F2E52]/10 to-transparent rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0F2E52 1.5px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating Orbs */}
        {/* {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${i % 2 === 0 ? 'from-[#2098D0] to-[#95C1D9]' : 'from-[#0F2E52] to-[#255490]'}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              filter: 'blur(2px)'
            }}
          />
        ))} */}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#0F2E52] to-[#2098D0]" />
            <span className="text-[#0F2E52] font-bold tracking-widest uppercase text-sm">
              Expertise Showcase
            </span>
            <div className="h-1 w-12 bg-gradient-to-r from-[#2098D0] to-[#0F2E52]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F2E52] mb-6">
            Technical <span className="text-[#2098D0]">Arsenal</span>
          </h2>
          
          <p className="text-[#255490]/80 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Discover our comprehensive suite of services designed to transform your digital vision into reality
          </p>

          {/* Interactive Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { value: '10+', label: 'Core Services' },
              { value: '200+', label: 'Projects Delivered' },
              { value: '50M+', label: 'Users Impacted' },
              { value: '99.9%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#0F2E52]/10 hover:border-[#2098D0]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#0F2E52] mb-2">{stat.value}</div>
                <div className="text-[#255490]/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#255490]/50" />
              <input
                type="text"
                placeholder="Search services, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-[#0F2E52]/10 rounded-xl focus:outline-none focus:border-[#2098D0]/50 focus:shadow-lg transition-all duration-300 text-[#0F2E52]"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 p-1 bg-white/80 backdrop-blur-sm rounded-xl border border-[#0F2E52]/10">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white' 
                      : 'text-[#255490]/70 hover:text-[#0F2E52]'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white' 
                      : 'text-[#255490]/70 hover:text-[#0F2E52]'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-[#255490] hover:text-[#0F2E52] hover:shadow-md border border-[#0F2E52]/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'space-y-4'} gap-6 mb-16`}>
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.3, delay: isMobile ? 0 : index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className={`group cursor-pointer ${
                  viewMode === 'grid' 
                    ? 'h-full' 
                    : 'flex items-center gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-[#0F2E52]/10 hover:border-[#2098D0]/30 hover:shadow-xl transition-all duration-300'
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid Card View
                  <div className="relative h-full bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-[#0F2E52]/10 hover:border-[#2098D0]/30 hover:shadow-2xl transition-all duration-500 group">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-xs font-bold text-[#255490]/60 mb-2">{service.category}</div>
                          <h3 className="text-xl font-bold text-[#0F2E52] mb-2 group-hover:text-[#2098D0] transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F2E52]/5 to-[#2098D0]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {getServiceIcon(service)}
                          </div>
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                        </div>
                      </div>
                      
                      <p className="text-[#255490]/70 text-sm mb-6 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="px-6 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 text-[#0F2E52] text-xs font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                        {service.tags.length > 3 && (
                          <span className="px-3 py-1 bg-[#2098D0]/10 text-[#2098D0] text-xs font-medium rounded-lg">
                            +{service.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer with Stats */}
                    <div className="px-6 pb-6">
                      <div className="pt-6 border-t border-[#0F2E52]/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-[#0F2E52]">{service.stat}</div>
                            <div className="text-xs text-[#255490]/60">{service.statLabel}</div>
                          </div>
                          <div className="flex items-center gap-2 text-[#2098D0] text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                            <span>Explore</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Number Indicator */}
                    <div className="absolute top-4 left-4 text-7xl font-bold text-[#0F2E52]/5">
                      {service.number}
                    </div>
                  </div>
                ) : (
                  // List View
                  <>
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0F2E52]/5 to-[#2098D0]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getServiceIcon(service)}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-[#0F2E52] group-hover:text-[#2098D0] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <div className="text-sm text-[#255490]/60 mb-2">{service.category}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#0F2E52]">{service.stat}</div>
                          <div className="text-xs text-[#255490]/60">{service.statLabel}</div>
                        </div>
                      </div>
                      
                      <p className="text-[#255490]/70 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 4).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 text-[#0F2E52] text-xs font-medium rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 rounded-3xl p-8 md:p-12 border-2 border-[#0F2E52]/10">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-[#0F2E52] mb-3">
                Ready to leverage our expertise?
              </h3>
              <p className="text-[#255490]/70 max-w-xl">
                Let's discuss how our comprehensive service portfolio can drive your business forward
              </p>
            </div>
            <button onClick={()=> {
                   navigate('/contact')
            }}   className="px-10 py-4 bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 whitespace-nowrap">
              Start Collaboration
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-black/50 md:backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-20 z-50 bg-white rounded-3xl overflow-hidden border-2 border-[#0F2E52]/10"
            >
              <div className="h-full overflow-y-auto">
                {/* Modal Header */}
                <div className={`p-8 bg-gradient-to-r ${selectedService.gradient} text-white`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-sm font-medium opacity-90 mb-2">{selectedService.category}</div>
                      <h3 className="text-3xl font-bold">{selectedService.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                        {getServiceIcon(selectedService)}
                      </div>
                      <div>
                        <div className="text-4xl font-bold">{selectedService.stat}</div>
                        <div className="text-sm opacity-90">{selectedService.statLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-[#0F2E52] mb-4">Overview</h4>
                      <p className="text-[#255490] leading-relaxed">
                        {selectedService.description}
                      </p>
                      
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-[#0F2E52] mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedService.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 text-[#0F2E52] font-medium rounded-lg"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-[#0F2E52] mb-4">Key Features</h4>
                      <ul className="space-y-4">
                        {[
                          'Enterprise-grade architecture',
                          'Scalable and maintainable codebase',
                          'Performance optimized',
                          'Security-first approach',
                          'Continuous integration & deployment'
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            {/* <CheckCircle className="w-5 h-5 text-[#2098D0] flex-shrink-0 mt-0.5" /> */}
                            <span className="text-[#255490]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-[#0F2E52]/5 to-[#2098D0]/5 rounded-2xl">
                        <h4 className="text-xl font-bold text-[#0F2E52] mb-4">Ready to get started?</h4>
                        <button className="w-full py-4 bg-gradient-to-r from-[#0F2E52] to-[#255490] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300">
                          Schedule a Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}