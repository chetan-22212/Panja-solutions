import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export function MagneticButton({
  children,
  className = '',
  onClick
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const {
      clientX,
      clientY
    } = e;
    const {
      left,
      top,
      width,
      height
    } = ref.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({
      x: x * 0.15,
      y: y * 0.15
    });
  };
  const handleMouseLeave = () => {
    setPosition({
      x: 0,
      y: 0
    });
  };
  return <motion.button ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} animate={{
    x: position.x,
    y: position.y
  }} transition={{
    type: 'spring',
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }} onClick={onClick} className={`relative group overflow-hidden rounded-full px-8 py-4 bg-[#2098D0] text-black hover:text-white font-medium tracking-wide transition-colors hover:bg-[#255490] ${className}`}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#2098D0] to-[#95C1D9] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.button>;
}