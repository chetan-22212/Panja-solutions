import { useEffect, useState, useMemo } from 'react';

/**
 * Detects iOS devices and provides optimization flags
 * iOS Safari has poor performance with JavaScript animations
 */
export function useIOSOptimization() {
  // Detect iOS synchronously on first render to prevent flash
  const isIOS = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }, []);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const shouldDisableAnimations = isIOS || prefersReducedMotion;

  return {
    isIOS,
    prefersReducedMotion,
    // Disable ALL JS animations on iOS - use CSS only
    disableJSAnimations: shouldDisableAnimations,
    // Simplified animation config for iOS (if we must use JS)
    animationConfig: shouldDisableAnimations
      ? {
          duration: 0.1,
          ease: 'linear',
          type: 'tween' as const,
        }
      : {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
          type: 'spring' as const,
        },
    // Disable complex animations on iOS
    shouldAnimate: !prefersReducedMotion,
    shouldUseSimpleAnimations: shouldDisableAnimations,
    // Helper to get minimal motion props
    getMinimalMotionProps: (defaultProps: any) => {
      if (shouldDisableAnimations) {
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.1 },
          ...defaultProps,
        };
      }
      return defaultProps;
    },
  };
}

