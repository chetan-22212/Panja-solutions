// import React from 'react';
// import { cn } from '../libs/utils';
import { MagneticButton } from './ui/MagneticButton';
import { Boxes } from "./ui/background-boxes";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export function CTA() {

  const navigate = useNavigate();
  return <section className="h-screen flex flex-col items-center justify-center bg-[#0F2E52] relative overflow-hidden px-4">
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E52] to-[#255490] opacity-50" />

    {/* Glow Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#2098D0]/20 blur-[150px] rounded-full pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative text-center"
    >
      {/* Background animation */}
      <Boxes />

      {/* Content */}
      <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight z-10 relative">
        Ready to Scale?
      </h2>

      <p className="text-xl text-[#95C1D9] mb-12 max-w-2xl mx-auto z-10 relative">
        Let's engineer your next digital breakthrough together.
      </p>

      <MagneticButton className="text-[#0F2E52] hover:bg-[#95C1D9] px-12 py-6 text-lg" onClick={() => {
        navigate('/contact')
      }}>
        Start the Conversation
      </MagneticButton>
    </motion.div>


    <footer className="absolute bottom-8 w-full text-center text-[#95C1D9]/40 text-sm">
      © {new Date().getFullYear()} Panja Technologies. All rights reserved.
    </footer>
  </section>;
}