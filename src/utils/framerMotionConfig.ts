/**
 * Framer Motion configuration optimized for iOS Safari
 * iOS Safari has poor performance with complex JavaScript animations
 */

// Detect iOS
export const isIOS = typeof window !== 'undefined' && 
  (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

/**
 * Get optimized transition config for iOS
 */
export function getOptimizedTransition(customConfig?: any) {
  if (isIOS) {
    return {
      duration: 0.2,
      ease: 'easeOut',
      type: 'tween' as const,
      ...customConfig,
    };
  }
  return customConfig || {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  };
}

/**
 * Get simplified motion props for iOS
 */
export function getSimplifiedMotionProps(defaultProps: any) {
  if (isIOS) {
    // Remove complex transforms on iOS
    const simplified = { ...defaultProps };
    if (simplified.initial?.y) simplified.initial = { opacity: 0 };
    if (simplified.whileInView?.y) simplified.whileInView = { opacity: 1 };
    if (simplified.animate?.y) simplified.animate = { opacity: 1 };
    simplified.transition = getOptimizedTransition(simplified.transition);
    return simplified;
  }
  return defaultProps;
}

