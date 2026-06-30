// Typography tokens - Supporting editorial layouts

// Font family (using Inter as base, can be extended)
export const fontFamily = {
  // Primary font for body and headings
  sans: 'var(--font-inter)',
  // Optional: serif for accents, mono for code
  serif: 'var(--font-serif)',
  mono: 'var(--font-mono)',
};

// Font weights
export const fontWeight = {
  hairline: '100',
  thin: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

// Font sizes (based on 4px grid, but using rem for scalability)
// Base font size: 16px (1rem)
// We'll use a modular scale for headings and a regular scale for body
export const fontSize = {
  // Text styles
  xs: '0.75rem',   // 12px
  sm: '0.875rem',  // 14px
  base: '1rem',    // 16px
  lg: '1.125rem',  // 18px
  xl: '1.25rem',   // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',   // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem',  // 72px
  '8xl': '6rem',    // 96px
  '9xl': '8rem',    // 128px
};

// Line heights
export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

// Letter tracking
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
  none: '0', // Added none as alias for normal
};

// Font styles
export const fontStyle = {
  normal: 'normal',
  italic: 'italic',
  oblique: 'oblique',
};

// Text decoration
export const textDecoration = {
  none: 'none',
  underline: 'underline',
  overline: 'overline',
  lineThrough: 'line-through',
};

// Typographic variants (semantic usage)
export const typography = {
  // Display / Hero headings
  display: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.black,
    fontSize: fontSize['9xl'],
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.tighter,
  },
  headline: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.extrabold,
    fontSize: fontSize['7xl'],
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  title: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.bold,
    fontSize: fontSize['5xl'],
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  // Section titles
  section: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.semibold,
    fontSize: fontSize['3xl'],
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  // Body text
  body: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.base,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  // Labels, captions, etc.
  label: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wide,
  },
  caption: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.xs,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wider,
  },
  // Override for monospace (code)
  code: {
    fontFamily: fontFamily.mono,
    fontWeight: fontWeight.regular,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.none,
  },
};

// Export all typography tokens
const typographyTokens = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  fontStyle,
  textDecoration,
  typography,
};

export default typographyTokens;