import { Hero } from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import Capabilities from '../components/Capabilities';
import { Impact } from '../components/Impact';
import Process from '../components/Process';
import { CaseStories } from '../components/CaseStories';
import Trust from '../components/Trust';
import { CTA } from '../components/CTA';
import { motion,  } from 'framer-motion';
import { useIOSOptimization } from '../utils/useIOSOptimization';

export function Home() {
  // const shouldReduceMotion = useReducedMotion();
  const { isIOS, disableJSAnimations } = useIOSOptimization();
  
  // On iOS, use regular div with CSS class instead of motion.div
  if (isIOS || disableJSAnimations) {
    return (
      <div className="ios-page-fade">
        <Hero />
        <FeaturedServices />
        <Capabilities />
        <Impact />
        <Process />
        <CaseStories />
        <Trust />
        <CTA />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Hero />
      <FeaturedServices />
      <Capabilities />
      <Impact />
      <Process />
      <CaseStories />
      <Trust />
      <CTA />
    </motion.div>
  );
}