// Spacing tokens - 8px scale
export const spacing = {
  // 0
  0: '0px',
  // 1
  1: '2px',   // 0.25 * 8px
  // 2
  2: '4px',   // 0.5 * 8px
  // 3
  3: '6px',   // 0.75 * 8px
  // 4
  4: '8px',   // 1 * 8px
  // 5
  5: '10px',  // 1.25 * 8px
  // 6
  6: '12px',  // 1.5 * 8px
  // 7
  7: '14px',  // 1.75 * 8px
  // 8
  8: '16px',  // 2 * 8px
  // 9
  9: '18px',  // 2.25 * 8px
  // 10
  10: '20px', // 2.5 * 8px
  // 12
  12: '24px', // 3 * 8px
  // 14
  14: '28px', // 3.5 * 8px
  // 16
  16: '32px', // 4 * 8px
  // 20
  20: '40px', // 5 * 8px
  // 24
  24: '48px', // 6 * 8px
  // 28
  28: '56px', // 7 * 8px
  // 32
  32: '64px', // 8 * 8px
  // 36
  36: '72px', // 9 * 8px
  // 40
  40: '80px', // 10 * 8px
  // 44
  44: '88px', // 11 * 8px
  // 48
  48: '96px', // 12 * 8px
  // 52
  52: '104px',// 13 * 8px
  // 56
  56: '112px',// 14 * 8px
  // 60
  60: '120px',// 15 * 8px
  // 64
  64: '128px',// 16 * 8px
};

// Alternative: shorthand for common values
export const space = {
  xs: spacing[2],   // 4px
  sm: spacing[4],   // 8px
  md: spacing[6],   // 12px
  lg: spacing[8],   // 16px
  xl: spacing[12],  // 24px
  '2xl': spacing[16], // 32px
  '3xl': spacing[20], // 40px
  '4xl': spacing[24], // 48px
  '5xl': spacing[28], // 56px
  '6xl': spacing[32], // 64px
};

// Default export
const spacingTokens = {
  spacing,
  space,
};

export default spacingTokens;