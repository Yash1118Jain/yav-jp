// Z-index tokens - layered stacking system
export const zIndex = {
  // Base layers
  base: 0,

  // Below content
  below: -1,

  // Default level
  auto: 'auto',

  // Standard layers
  docked: 10,
  modal: 100,
  popover: 110,
  toast: 120,
  overlay: 130,

  // Special layers
  skipLink: 1000,
  modalBackdrop: 1010,

  // Maximum
  max: 2147483647,
};

// For use with CSS var or inline styles
export const zIndices = {
  ...zIndex,
};

// Default export
export default zIndices;