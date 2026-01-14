import  { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll,  AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navLinks = [{
  name: 'Home',
  path: '/'
}, {
  name: 'Services',
  path: '/services'
}, {
  name: 'Solutions',
  path: '/solutions'
}, {
  name: 'Work',
  path: '/work'
}, {
  name: 'About',
  path: '/about'
}, {
  name: 'Contact',
  path: '/contact'
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    scrollY
  } = useScroll();
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = scrollY.on('change', latest => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return <>
      <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0F2E52]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.8,
      ease: 'easeOut'
    }}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="relative z-50 group">
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-[#1296db]'}`}>
              PANJA
            </span>
            <span className={`block h-0.5 bg-[#2098D0] transition-all duration-300 w-0 group-hover:w-full`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="relative group">
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isScrolled ? 'text-white/90 hover:text-white' : 'text-[#1296db] hover:text-[#1296db]'}`}>
                  {link.name}
                </span>
                {location.pathname === link.path && <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2098D0]" transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30
            }} />}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2098D0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative z-50 text-[#2098D0]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        x: '100%'
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="fixed inset-0 z-40 bg-[#0F2E52] flex items-center justify-center md:hidden">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-[#2098D0] transition-colors">
                  {link.name}
                </Link>)}
            </nav>
          </motion.div>}
      </AnimatePresence>
    </>;
}