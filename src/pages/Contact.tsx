import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../components/ui/MagneticButton';
import { Mail, MapPin, Phone } from 'lucide-react';
export function Contact() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }} className="pt-32 pb-20 min-h-screen bg-[#0F2E52] text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#2098D0]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#95C1D9]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Abstract Tech Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #2098D0 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Column */}
          <div>
            <motion.h1 initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8
          }} className="text-5xl md:text-7xl font-bold mb-8">
              Let's Build Together
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
          }} className="text-xl text-[#95C1D9]/80 mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Tell us your
              story and let's engineer something extraordinary.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 backdrop-blur-sm">
                  <Mail className="text-[#2098D0]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Us</h3>
                  <p className="text-[#95C1D9]/60">hello@panja.tech</p>
                  <p className="text-[#95C1D9]/60">careers@panja.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 backdrop-blur-sm">
                  <MapPin className="text-[#2098D0]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                  <p className="text-[#95C1D9]/60">123 Innovation Drive</p>
                  <p className="text-[#95C1D9]/60">San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 backdrop-blur-sm">
                  <Phone className="text-[#2098D0]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Call Us</h3>
                  <p className="text-[#95C1D9]/60">+1 (555) 123-4567</p>
                  <p className="text-[#95C1D9]/60">Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#95C1D9]">
                    Name
                  </label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2098D0] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#95C1D9]">
                    Email
                  </label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2098D0] transition-colors" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#95C1D9]">
                  Subject
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2098D0] transition-colors appearance-none">
                  <option className="bg-[#0F2E52]">New Project Inquiry</option>
                  <option className="bg-[#0F2E52]">Partnership</option>
                  <option className="bg-[#0F2E52]">Careers</option>
                  <option className="bg-[#0F2E52]">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#95C1D9]">
                  Message
                </label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2098D0] transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>

              <MagneticButton className="w-full bg-[#2098D0] text-white hover:bg-[#255490] mt-4">
                Send Message
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>;
}