import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
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
  }, [isInView, value]);
  return <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>;
}
export function Impact() {
  return <section className="relative py-32 px-4 bg-[#0F2E52] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {metrics.map((metric, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
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
            </motion.div>)}
        </div>
      </div>
    </section>;
}