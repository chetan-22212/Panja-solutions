// import React from 'react';
import { Hero } from '../components/Hero';
import  FeaturedServices  from '../components/FeaturedServices';
import  {Capabilities}  from '../components/Capabilities';
import { Impact } from '../components/Impact';
import  Process  from '../components/Process';
import { CaseStories } from '../components/CaseStories';
import  Trust  from '../components/Trust';
import { CTA } from '../components/CTA';
import { motion } from 'framer-motion';
export function Home() {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} transition={{
    duration: 0.5
  }}>
      <Hero />
      
      <FeaturedServices />
      <Capabilities />
      <Impact />
      <Process />
      <CaseStories />
      <Trust />
      <CTA />
    </motion.div>;
}