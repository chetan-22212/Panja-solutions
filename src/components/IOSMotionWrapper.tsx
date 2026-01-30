import { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useIOSOptimization } from '../utils/useIOSOptimization';

/**
 * Wrapper component that disables Framer Motion on iOS
 * Uses CSS-only animations for better performance
 */
interface IOSMotionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  fallbackClassName?: string; // CSS class for iOS fallback
  as?: keyof JSX.IntrinsicElements; // Allow different HTML elements
}

export function IOSMotionWrapper({ 
  children, 
  className = '',
  fallbackClassName = 'ios-fade-in',
  as,
  ...motionProps 
}: IOSMotionWrapperProps) {
  const { isIOS, disableJSAnimations } = useIOSOptimization();

  // On iOS, render as regular element with CSS class
  if (isIOS || disableJSAnimations) {
    const Element = as || 'div';
    return (
      <Element className={`${fallbackClassName} ${className}`}>
        {children}
      </Element>
    );
  }

  // On other platforms, use Framer Motion
  const MotionElement = as ? motion[as as keyof typeof motion] : motion.div;
  return (
    <MotionElement className={className} {...motionProps}>
      {children}
    </MotionElement>
  );
}

/**
 * Wrapper for whileInView animations - disabled on iOS
 */
export function IOSWhileInView({ 
  children, 
  className = '',
  fallbackClassName = 'ios-fade-in',
  ...motionProps 
}: IOSMotionWrapperProps) {
  const { isIOS, disableJSAnimations } = useIOSOptimization();

  if (isIOS || disableJSAnimations) {
    return (
      <div className={`${fallbackClassName} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div 
      className={className} 
      viewport={{ once: true }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

