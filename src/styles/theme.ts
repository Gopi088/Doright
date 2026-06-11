// ─── DoRight Design System ────────────────────────────────────────────────────
// Single source of truth. Change here → entire site updates.

export const colors = {
  primary:       '#FFAF5F',
  primaryDark:   '#E8963E',
  primaryLight:  '#FFF4E8',
  primaryBorder: '#FFD9A8',
  dark:          '#4D4D4D',
  darkDeep:      '#2D2D2D',
  gray:          '#999999',
  grayLight:     '#CCCCCC',
  grayMid:       '#6B6B6B',
  white:         '#FFFFFF',
  bg:            '#F4F4F4',
  bgWarm:        '#FFF8F0',
  bgCard:        '#FFFFFF',
  border:        '#EEEEEE',
  borderWarm:    '#F0E8DC',
  success:       '#16A34A',
  successBg:     '#DCFCE7',
};

export const fonts = {
  heading: "'Plus Jakarta Sans', 'Inter', sans-serif",
  body:    "'Inter', 'Plus Jakarta Sans', sans-serif",
};

export const fontSizes = {
  heroTitle:    'clamp(28px, 4.5vw, 52px)',
  sectionTitle: 'clamp(24px, 3.2vw, 40px)',
  cardTitle:    'clamp(14px, 1.6vw, 17px)',
  body:         '14px',
  bodyLg:       '15px',
  small:        '13px',
  xsmall:       '12px',
  badge:        '11px',
};

export const fontWeights = {
  regular: 400,
  medium:  500,
  semibold:600,
  bold:    700,
  extrabold:800,
};

export const spacing = {
  xs:  '4px',
  sm:  '8px',
  md:  '16px',
  lg:  '24px',
  xl:  '32px',
  '2xl':'48px',
  '3xl':'64px',
  '4xl':'80px',
  '5xl':'100px',
};

export const radius = {
  sm:   '6px',
  md:   '10px',
  lg:   '14px',
  xl:   '18px',
  '2xl':'24px',
  full: '9999px',
};

export const shadows = {
  sm:      '0 1px 3px rgba(0,0,0,0.06)',
  md:      '0 4px 16px rgba(0,0,0,0.08)',
  lg:      '0 8px 32px rgba(0,0,0,0.10)',
  primary: '0 4px 20px rgba(255,175,95,0.35)',
  primaryLg:'0 8px 32px rgba(255,175,95,0.30)',
  card:    '0 2px 12px rgba(0,0,0,0.06)',
  hover:   '0 8px 28px rgba(0,0,0,0.12)',
};

export const transitions = {
  fast:   'all 0.15s ease',
  normal: 'all 0.2s ease',
  slow:   'all 0.3s ease',
};

export const breakpoints = {
  xs:  '320px',
  sm:  '480px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl':'1440px',
};

export const containers = {
  sm:  '640px',
  md:  '900px',
  lg:  '1180px',
  xl:  '1400px',
};

// ─── Utility: merge style objects ─────────────────────────────────────────────
export const theme = { colors, fonts, fontSizes, fontWeights, spacing, radius, shadows, transitions, breakpoints, containers };
export default theme;
