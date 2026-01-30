import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Home, Briefcase, Code, Layers, Users, Phone } from 'lucide-react';
import { useIOSOptimization } from '../utils/useIOSOptimization';
import { IOSMotionWrapper } from './IOSMotionWrapper';
import white_logo from "../assets/colored-logo.png"
import blue_logo from "../assets/logo_panja.png";

const navLinks = [
  {
    name: 'Home',
    path: '/',
    icon: Home
  },
  {
    name: 'Services',
    path: '/services',
    icon: Briefcase
  },
  {
    name: 'Solutions',
    path: '/solutions',
    icon: Code
  },
  {
    name: 'Work',
    path: '/work',
    icon: Layers
  },
  {
    name: 'About',
    path: '/about',
    icon: Users
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: Phone
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isIOS } = useIOSOptimization();

  useEffect(() => {
    // Use simple scroll listener for all platforms (more reliable)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // setActiveDropdown(null);
  }, [location.pathname]);

  const logoSrc = isScrolled ? blue_logo : ["/solutions", "/about"].includes(location.pathname) ? blue_logo : white_logo;

  const menuVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <IOSMotionWrapper
        as="header"
        initial={isIOS ? {} : { y: -100 }}
        animate={isIOS ? {} : { y: 0 }}
        transition={isIOS ? {} : { duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link to="/" className="relative z-50 group">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="block"
            >
              <img src={logoSrc} className="h-14 w-24" alt="Logo" />
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const Icon = link.icon;
              return (
                <Link key={link.path} to={link.path} className="relative group">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 transition-colors duration-300 ${
                      !isScrolled ? 
                      ["/solutions", "/about"].includes(location.pathname) ? 
                      'text-[#1296db]' : 
                      'text-white/90' : 
                      'text-[#1296db]'
                    }`} />
                    <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      !isScrolled ? 
                      ["/solutions", "/about"].includes(location.pathname) ? 
                      'text-[#0f2e52] hover:text-[#1296db]' : 
                      'text-white/90 hover:text-white' : 
                      'text-[#0f2e52] hover:text-[#1296db]'
                    }`}>
                      {link.name}
                    </span>
                  </div>
                  
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="activeNav" 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2098D0] to-[#95C1D9]" 
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2098D0] to-[#95C1D9] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0F2E52]" />
              ) : (
                <Menu className={`w-6 h-6 ${
                  isScrolled ? 'text-[#0F2E52]' : 
                  ["/solutions", "/about"].includes(location.pathname) ? 
                  'text-[#0F2E52]' : 
                  'text-white'
                }`} />
              )}
            </div>
          </button>
        </div>
      </IOSMotionWrapper>

      {/* Mobile Menu Overlay - Top Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 right-0 z-40 md:hidden pt-24 pb-8 bg-gradient-to-b from-[#0F2E52] via-[#1A3A63] to-[#0F2E52] shadow-2xl"
            style={{
              borderBottom: '3px solid',
              borderImage: 'linear-gradient(to right, #2098D0, #95C1D9) 1',
              boxShadow: '0 20px 60px rgba(15, 46, 82, 0.3)'
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2098D0] to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* Current Page Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 inline-block"
              >
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#2098D0]" />
                  <span>Currently Viewing:</span>
                  <span className="text-white font-medium">
                    {navLinks.find(link => link.path === location.pathname)?.name || 'Home'}
                  </span>
                </div>
              </motion.div>

              {/* Navigation Links */}
              <nav className="grid grid-cols-1 gap-2">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  
                  return (
                    <motion.div
                      key={link.path}
                      variants={linkVariants}
                      custom={index}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        to={link.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-[#2098D0] to-[#95C1D9] text-white shadow-lg' 
                            : 'bg-white/5 hover:bg-white/10 text-white/90 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${
                            isActive 
                              ? 'bg-white/20' 
                              : 'bg-white/10 group-hover:bg-white/20'
                          } transition-colors duration-300`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-lg font-medium">{link.name}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {isActive && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white"
                            />
                          )}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                            isActive ? 'rotate-180' : 'group-hover:translate-x-1'
                          }`} />
                        </div>
                      </Link>
                      
                      {/* Active Link Indicator */}
                      {isActive && (
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.3 }}
                          className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-1 origin-left"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Contact Info Section */}
              <motion.div 
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="mt-10 px-4 py-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#2098D0] animate-pulse" />
                  <span className="text-white font-medium">Get in Touch</span>
                </div>
                
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>hello@company.com</span>
                  </div>
                </div>
                
                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-[#2098D0] to-[#95C1D9] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                  onClick={() => {
                  navigate('/contact')
                }}
                >
                  Schedule a Call
                </motion.button>
              </motion.div>
            </div>

            {/* Close Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}