// Motion tokens - Centralized easing, duration, and spring presets

// Easing functions
export const easing = {
  // Standard easing
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

  // Motion-specific easing
  easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',

  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',

  // Sharp movements
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

// Duration values (in ms)
export const duration = {
  // Extremely fast
  fastest: 50,
  faster: 75,
  fast: 100,

  // Normal durations
  normal: 150,
  moderate: 200,
  slow: 250,

  // Slower durations
  slower: 300,
  slowest: 375,
};

// Spring physics configurations
export const spring = {
  // No bounce - stiff
  stiff: {
    stiffness: 150,
    damping: 20,
    mass: 1,
  },

  // Default spring - balanced
  default: {
    stiffness: 100,
    damping: 15,
    mass: 1,
  },

  // Bouncy spring
  bouncy: {
    stiffness: 60,
    damping: 12,
    mass: 1,
  },

  // Very bouncy
  wobbly: {
    stiffness: 40,
    damping: 8,
    mass: 1,
  },

  // Gentle spring
  gentle: {
    stiffness: 80,
    damping: 20,
    mass: 1,
  },

  // Slow and smooth
  slow: {
    stiffness: 60,
    damping: 25,
    mass: 1,
  },
};

// Motion presets for common use cases
export const motion = {
  // Entrance animations
  enter: {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: duration.normal, ease: easing.easeOut } },
      exit: { opacity: 0, transition: { duration: duration.fast, ease: easing.easeIn } },
    },
    slideUp: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: duration.normal, ease: easing.easeOut } },
      exit: { y: -20, opacity: 0, transition: { duration: duration.fast, ease: easing.easeIn } },
    },
    slideDown: {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: duration.normal, ease: easing.easeOut } },
      exit: { y: 20, opacity: 0, transition: { duration: duration.fast, ease: easing.easeIn } },
    },
    slideIn: {
      initial: { x: 20, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: duration.normal, ease: easing.easeOut } },
      exit: { x: -20, opacity: 0, transition: { duration: duration.fast, ease: easing.easeIn } },
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { duration: duration.normal, ease: easing.easeOut } },
      exit: { scale: 0.95, opacity: 0, transition: { duration: duration.fast, ease: easing.easeIn } },
    },
  },

  // Hover/hover effects
  hover: {
    scale: { scale: 1.05 },
    scaleDown: { scale: 0.95 },
    lift: { y: -4 },
    lower: { y: 4 },
    pulse: { scale: [1, 1.05, 1] },
  },

  // Focus states
  focus: {
    scale: { scale: 1.02 },
    ring: { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)' },
  },

  // Press states
  press: {
    scale: { scale: 0.95 },
    push: { y: 2 },
  },
};

// Default export
const motionTokens = {
  easing,
  duration,
  spring,
  motion,
};

export default motionTokens;