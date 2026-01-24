// import React from 'react';
import { motion } from 'framer-motion';
export function WaveBackground() {
  return <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FEFEFE] via-[#f0f7fa] to-[#e6f0f5] opacity-80" />

      {/* Abstract Shapes */}
      <motion.div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#95C1D9]/10 blur-[100px]" animate={{
      scale: [1, 1.2, 1],
      x: [0, 50, 0],
      y: [0, -30, 0]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />

      <motion.div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#2098D0]/5 blur-[120px]" animate={{
      scale: [1.2, 1, 1.2],
      x: [0, -30, 0],
      y: [0, 50, 0]
    }} transition={{
      duration: 25,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />

      {/* SVG Wave Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <motion.path d="M0,500 Q400,300 800,500 T1600,500" fill="none" stroke="#0F2E52" strokeWidth="1" initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: 1,
        opacity: 0.3
      }} transition={{
        duration: 3,
        ease: 'easeOut'
      }} />
        <motion.path d="M0,600 Q600,400 1200,600 T2400,600" fill="none" stroke="#2098D0" strokeWidth="1" initial={{
        pathLength: 0,
        opacity: 0
      }} animate={{
        pathLength: 1,
        opacity: 0.2
      }} transition={{
        duration: 4,
        delay: 0.5,
        ease: 'easeOut'
      }} />
      </svg>

      {/* Grain Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
    }} />
    </div>;
}