// ═══════════════════════════════════════════════════════════════════════════════
// DoRight Design System — Single Source of Truth
// Change one value here → entire site updates automatically
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Brand Colors ─────────────────────────────────────────────────────────────
export const colors = {
  primary:       '#FFAF5F',
  primaryDark:   '#E8963E',
  primaryDeep:   '#C97820',
  primaryLight:  '#FFF4E8',
  primaryBorder: '#FFD9A8',
  primaryGlow:   'rgba(255,175,95,0.35)',

  dark:     '#4D4D4D',
  darkDeep: '#2D2D2D',
  darkTrue: '#1a1a1a',

  gray:      '#999999',
  grayMid:   '#6B6B6B',
  grayLight: '#CCCCCC',
  graySubtle:'#BBBBBB',

  white:   '#FFFFFF',
  bg:      '#F4F4F4',
  bgWarm:  '#FFF8F0',
  bgCard:  '#FFFFFF',

  border:     '#EEEEEE',
  borderWarm: '#F0E8DC',

  success:   '#16A34A',
  successBg: '#DCFCE7',
} as const;

// ─── Cupidus Type System ──────────────────────────────────────────────────────
// Font family: Cupidus (display/headings) + Cupidus Text (body/UI)
// Weights available: 100,200,300,400,500,600,700,750,800,900
export const fonts = {
  display: "'Cupidus', sans-serif",       // headings, hero, brand
  body:    "'Cupidus Text', sans-serif",  // body, UI, labels, buttons
  mono:    "monospace",
} as const;

export const fontWeights = {
  ultralight: 100,
  extralight: 200,
  light:      300,
  regular:    400,
  text:       500,   // Cupidus Text Regular
  semibold:   600,
  bold:       700,
  textBold:   750,   // Cupidus Text Bold
  extrabold:  800,
  ultrabold:  900,
} as const;

// Responsive fluid typography using clamp(min, preferred, max)
export const fontSizes = {
  heroTitle:    'clamp(28px, 4.5vw, 52px)',
  sectionTitle: 'clamp(22px, 3.2vw, 40px)',
  subsectionTitle:'clamp(18px, 2.4vw, 28px)',
  cardTitle:    'clamp(14px, 1.5vw, 16px)',
  bodyLg:       'clamp(14px, 1.4vw, 16px)',
  body:         '14px',
  small:        '13px',
  xsmall:       '12px',
  badge:        '11px',
  micro:        '10px',
} as const;

export const lineHeights = {
  tight:   1.1,
  snug:    1.25,
  normal:  1.5,
  relaxed: 1.7,
  loose:   1.9,
} as const;

export const letterSpacing = {
  tight:   '-1px',
  snug:    '-0.5px',
  normal:  '0',
  wide:    '0.04em',
  wider:   '0.08em',
  caps:    '0.1em',
} as const;

// ─── Spacing Scale (4px base) ─────────────────────────────────────────────────
export const spacing = {
  0:    '0',
  1:    '4px',
  2:    '8px',
  3:    '12px',
  4:    '16px',
  5:    '20px',
  6:    '24px',
  8:    '32px',
  10:   '40px',
  12:   '48px',
  14:   '56px',
  16:   '64px',
  20:   '80px',
  24:   '96px',
  28:   '112px',
  // Fluid spacing
  sectionY:  'clamp(48px, 7vw, 96px)',
  sectionYSm:'clamp(32px, 5vw, 64px)',
  gutter:    'clamp(16px, 4vw, 24px)',
} as const;

// ─── Border Radius ────────────────────────────────────────────────────────────
export const radius = {
  xs:   '4px',
  sm:   '6px',
  md:   '10px',
  lg:   '14px',
  xl:   '18px',
  '2xl':'24px',
  '3xl':'32px',
  full: '9999px',
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────
export const shadows = {
  xs:        '0 1px 2px rgba(0,0,0,0.04)',
  sm:        '0 1px 4px rgba(0,0,0,0.06)',
  md:        '0 4px 16px rgba(0,0,0,0.08)',
  lg:        '0 8px 32px rgba(0,0,0,0.10)',
  xl:        '0 16px 48px rgba(0,0,0,0.12)',
  card:      '0 2px 12px rgba(0,0,0,0.06)',
  hover:     '0 8px 28px rgba(0,0,0,0.12)',
  primary:   '0 4px 20px rgba(255,175,95,0.35)',
  primaryLg: '0 8px 32px rgba(255,175,95,0.30)',
  primaryXl: '0 16px 48px rgba(255,175,95,0.28)',
} as const;

// ─── Transitions ──────────────────────────────────────────────────────────────
export const transitions = {
  fast:   'all 0.15s ease',
  normal: 'all 0.2s ease',
  slow:   'all 0.3s ease',
  spring: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
} as const;

// ─── Breakpoints ──────────────────────────────────────────────────────────────
export const breakpoints = {
  xs:   320,
  sm:   480,
  md:   768,
  lg:   1024,
  xl:   1280,
  '2xl':1440,
} as const;

// Breakpoint strings for media queries
export const bp = {
  xs:   '320px',
  sm:   '480px',
  md:   '768px',
  lg:   '1024px',
  xl:   '1280px',
  '2xl':'1440px',
} as const;

// ─── Container widths ─────────────────────────────────────────────────────────
export const containers = {
  sm:  '640px',
  md:  '900px',
  lg:  '1180px',
  xl:  '1400px',
} as const;

// ─── Z-index scale ────────────────────────────────────────────────────────────
export const zIndex = {
  behind:  -1,
  base:    0,
  raised:  10,
  dropdown:100,
  sticky:  200,
  modal:   300,
  toast:   400,
  max:     9999,
} as const;

export const theme = {
  colors, fonts, fontWeights, fontSizes, lineHeights, letterSpacing,
  spacing, radius, shadows, transitions, breakpoints, bp, containers, zIndex,
};
export default theme;
