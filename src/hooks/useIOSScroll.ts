import { useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * Hook that disables scroll animations on iOS
 * Must pass isIOS and disableJSAnimations from useIOSOptimization
 */
export function useIOSScroll(options?: any, isIOS?: boolean, disableJSAnimations?: boolean) {
  const ref = useRef(null);
  
  // Always call useScroll unconditionally (Rules of Hooks)
  // Pass empty object if iOS to avoid errors
  const scrollResult = useScroll(
    (isIOS || disableJSAnimations) ? {} : { target: ref, ...options }
  );
  
  // On iOS, return undefined to disable scroll animations
  const scrollYProgress = (isIOS || disableJSAnimations) 
    ? undefined 
    : scrollResult.scrollYProgress;

  return {
    ref,
    scrollYProgress: scrollYProgress || undefined,
  };
}

/**
 * Hook that disables transform animations on iOS
 * Must pass isIOS and disableJSAnimations from useIOSOptimization
 */
export function useIOSTransform(
  scrollYProgress: any, 
  input: number[], 
  output: string[],
  isIOS?: boolean,
  disableJSAnimations?: boolean
) {
  // Create a dummy MotionValue that we always use (Rules of Hooks)
  const fallbackValue = useMotionValue(0);
  
  // Always call useTransform unconditionally (Rules of Hooks)
  // Use fallback if scrollYProgress is undefined
  const transform = useTransform(
    scrollYProgress || fallbackValue, 
    input, 
    output
  );
  
  // Return undefined on iOS or if no scroll progress
  if (isIOS || disableJSAnimations || !scrollYProgress) {
    return undefined;
  }
  
  return transform;
}

