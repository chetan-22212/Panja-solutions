import { Link, useNavigate } from 'react-router-dom';
import { Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import white_logo from "../assets/colored-logo.png"
// import { cn } from "../libs/utils"
export function Footer() {
  const navigate = useNavigate();
  return <footer className="relative bg-[#0F2E52] text-white pt-24 pb-12 overflow-hidden">
    {/* Abstract Background */}


    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        {/* Brand Column */}
        <div className="md:col-span-5">
          <Link to="/" className="inline-block mb-8">
            <span className="font-bold text-2xl tracking-tight">
              <img src={white_logo} height={100} width={140} />
            </span>
          </Link>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            Engineering Digital Excellence
          </h3>
          <p className="text-[#95C1D9]/80 max-w-md mb-8 leading-relaxed">
            We craft future-proof digital ecosystems through precision
            engineering and cinematic design.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Twitter, Github].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0F2E52] transition-all duration-300">
              <Icon size={18} />
            </a>)}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#2098D0] mb-6">
            Explore
          </h4>
          <ul className="space-y-4">
            {[{
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
            }].map(link => <li key={link.path}>
              <Link to={link.path} className="text-[#95C1D9]/60 hover:text-white transition-colors flex items-center gap-2 group">
                {link.name}
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </li>)}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#2098D0] mb-6">
            Contact
          </h4>
          <ul className="space-y-4 mb-8">
            <li className="text-[#95C1D9]/60">hello@panja.tech</li>
            <li className="text-[#95C1D9]/60">+1 (555) 123-4567</li>
            <li className="text-[#95C1D9]/60">San Francisco, CA</li>
          </ul>
          <Link to="/contact">
            <MagneticButton className="bg-[#2098D0] text-white px-6 py-3 text-sm" onClick={() => {
              navigate('/contact')
            }}>
              Start a Project
            </MagneticButton>
          </Link>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#95C1D9]/40">
        <p>
          © {new Date().getFullYear()} Panja Technologies. All rights
          reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>;
}