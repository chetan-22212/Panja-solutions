import  { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useIOSOptimization } from '../utils/useIOSOptimization';
import { IOSWhileInView } from './IOSMotionWrapper';
const metrics = [{
  label: 'Global Projects',
  value: 150,
  suffix: '+'
}, {
  label: 'Revenue Generated',
  value: 500,
  suffix: 'M+'
}, {
  label: 'User Retention',
  value: 98,
  suffix: '%'
}];
function Counter({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const { isIOS, disableJSAnimations } = useIOSOptimization();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  
  // On iOS, show numbers instantly - no animation
  useEffect(() => {
    if (isIOS || disableJSAnimations) {
      setCount(value);
      return;
    }
  }, [isIOS, disableJSAnimations, value]);
  
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  
  useEffect(() => {
    // Skip animation on iOS
    if (isIOS || disableJSAnimations) return;
    
    if (isInView) {
      const duration = 1500; // Reduced from 2000ms for faster animation
      const steps = 30; // Reduced steps for smoother, faster animation
      const stepTime = duration / steps;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, isIOS, disableJSAnimations]);
  
  return <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>;
}
export function Impact() {
  const { isIOS } = useIOSOptimization();
  
  return <section className="relative py-32 px-4 bg-[#0F2E52] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {metrics.map((metric, index) => <IOSWhileInView key={index} initial={isIOS ? { opacity: 0 } : {
          opacity: 0,
          y: 40
        }} whileInView={isIOS ? { opacity: 1 } : {
          opacity: 1,
          y: 0
        }} transition={isIOS ? { duration: 0.1 } : {
          duration: 0.8,
          delay: index * 0.2
        }} viewport={{
          once: true
        }} className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-lg md:text-xl text-[#95C1D9] font-medium tracking-wide uppercase">
                {metric.label}
              </div>
            </IOSWhileInView>)}
        </div>
      </div>
    </section>;
}