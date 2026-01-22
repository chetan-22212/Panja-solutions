import { useRef, useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Adjusted transform values for mobile
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['10%', '-160%'] : ['5%', '-75%']
  );

  return (
    <section ref={targetRef} className="relative h-[350vh] md:h-[300vh] bg-gradient-to-b from-[#FEFEFE] via-[#F8F9FA] to-[#FEFEFE]">
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

        {/* Fixed Header - Slides down from navbar */}
        <div className="absolute top-[15vh] md:top-[12vh] left-6 md:left-16 z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F2E52] mb-1 leading-tight">
              Technical Arsenal
            </h2>
          </motion.div>
        </div>

        {/* Scrolling Cards Container */}
        <div className="absolute left-0 right-0 flex items-center h-full pl-6 md:pl-16 pt-[2vh] md:pt-[3vh] lg:pt-[22vh]">
          <motion.div
            style={{ x }}
            className="flex gap-4 md:gap-6 pr-6 md:pr-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative w-[300px] md:w-[380px] flex-shrink-0"
              >
                {/* Main Card */}
                <div className="relative h-[400px] md:h-[450px]  bg-white rounded-2xl overflow-hidden shadow-lg
                  hover:shadow-2xl border-2 border-[#0F2E52]/10 hover:border-[#2098D0]/30
                  transition-all duration-500"
                >
                  {/* Animated Gradient Border Glow */}
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-[#2098D0] via-[#95C1D9] to-[#255490] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

                  {/* Top Section - Number & Icon */}
                  <div className="relative bg-[#0F2E52] p-5 md:p-6">
                    {/* Mesh Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#255490]/50 to-transparent" />

                    <div className="relative flex justify-between items-start mb-3">
                      <span className="text-[#95C1D9]/40 font-bold text-4xl md:text-5xl">
                        {service.number}
                      </span>
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#2098D0] transition-colors duration-300">
                        <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-4 inline-block">
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">
                        {service.stat}
                      </div>
                      <div className="text-[#95C1D9] text-xs font-medium uppercase tracking-wider">
                        {service.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Content */}
                  <div className="relative p-5 md:p-6 flex flex-col justify-between h-[calc(100%-185px)] md:h-[calc(100%-200px)]">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#0F2E52] mb-2 md:mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-[#255490]/70 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                        {service.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                        {service.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 md:px-3 py-1 bg-[#0F2E52]/5 text-[#0F2E52] text-xs font-semibold rounded-lg border border-[#0F2E52]/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="group/btn w-full py-2.5 md:py-3 px-4 bg-[#0F2E52] text-white rounded-xl font-semibold flex items-center justify-between hover:bg-[#255490] transition-all duration-300">
                      <span className="text-xs md:text-sm">View Projects</span>
                      <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Floating Index Number */}
                <div className="absolute -top-4 md:-top-6 -left-3 md:-left-4 text-6xl md:text-8xl font-bold text-[#0F2E52]/5 pointer-events-none select-none">
                  {service.number}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}