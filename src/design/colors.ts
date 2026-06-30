// Design System Color Tokens
// Premium palette: black, graphite, white, electric-blue

// Base color palette
export const colors = {
  // Neutrals (cool gray)
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    950: '#0d0d0d',
  },

  // Graphite (slightly cooler than neutral)
  graphite: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#545b62',
    700: '#3d4449',
    800: '#2c3034',
    900: '#1a1e21',
    950: '#0f1113',
  },

  // Pure whites
  white: {
    50: '#ffffff',
    100: '#fafafa',
    200: '#f5f5f5',
    300: '#f0f0f0',
    400: '#e0e0e0',
    500: '#d0d0d0',
    600: '#b3b3b3',
    700: '#999999',
    800: '#808080',
    900: '#666666',
  },

  // Electric Blue (primary accent)
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
};

// Semantic token mappings
export const semanticTokens = {
  // Backgrounds
  background: {
    primary: colors.white[50],
    secondary: colors.graphite[50],
    muted: colors.neutral[50],
    inverse: colors.graphite[900],
  },

  // Foreground / Text
  foreground: {
    primary: colors.graphite[900],
    secondary: colors.graphite[700],
    muted: colors.graphite[500],
    inverse: colors.white[50],
    mutedInverse: colors.neutral[300],
  },

  // Borders
  border: {
    default: colors.neutral[300],
    muted: colors.neutral[200],
    strong: colors.neutral[400],
    inverse: colors.graphite[200],
  },

  // Interactive elements
  interactive: {
    primary: colors.blue[500],
    primaryHover: colors.blue[600],
    primaryActive: colors.blue[700],
    primaryDisabled: colors.blue[200],

    secondary: colors.graphite[600],
    secondaryHover: colors.graphite[700],
    secondaryActive: colors.graphite[800],
    secondaryDisabled: colors.neutral[300],
  },

  // State colors
  state: {
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      500: '#22c55e',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      500: '#eab308',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      500: '#ef4444',
    },
  },

  // Gradients
  gradients: {
    primary: `linear-gradient(135deg, ${colors.blue[500]}, ${colors.blue[600]})`,
    secondary: `linear-gradient(135deg, ${colors.graphite[600]}, ${colors.graphite[700]})`,
    subtle: `linear-gradient(180deg, ${colors.white[50]}, ${colors.white[100]})`,
  },
};

// Combined design tokens export
export const designTokens = {
  colors: {
    ...colors.neutral,
    ...colors.graphite,
    ...colors.white,
    ...colors.blue,
    background: semanticTokens.background,
    foreground: semanticTokens.foreground,
    border: semanticTokens.border,
    interactive: semanticTokens.interactive,
    state: semanticTokens.state,
    gradients: semanticTokens.gradients,
  },
};

// Default export
export default designTokens;