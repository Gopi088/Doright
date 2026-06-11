import { motion } from 'framer-motion';
import { colors, radius, shadows, transitions, fontWeights } from '../../styles/theme';
import { CSSProperties, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'white';
type Size    = 'sm' | 'md' | 'lg';

interface Props {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  style?: CSSProperties;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    background: colors.primary, color: colors.white,
    border: `2px solid ${colors.primary}`,
    boxShadow: shadows.primary,
  },
  outline: {
    background: 'transparent', color: colors.primary,
    border: `2px solid ${colors.primary}`,
  },
  ghost: {
    background: 'transparent', color: colors.dark,
    border: `2px solid ${colors.border}`,
  },
  white: {
    background: colors.white, color: colors.primary,
    border: `2px solid ${colors.white}`,
    boxShadow: shadows.md,
  },
};

const sizeStyles: Record<Size, CSSProperties> = {
  sm: { padding: '7px 18px',  fontSize: '12px', borderRadius: radius.full },
  md: { padding: '10px 24px', fontSize: '13.5px', borderRadius: radius.full },
  lg: { padding: '13px 32px', fontSize: '14.5px', borderRadius: radius.full, fontWeight: fontWeights.bold },
};

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, fullWidth, style, type = 'button', ariaLabel }: Props) {
  const base: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: fontWeights.bold,
    cursor: 'pointer', transition: transitions.normal,
    textDecoration: 'none', whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    fontFamily: "'Inter', sans-serif",
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  const hoverBg: Record<Variant, string> = {
    primary: colors.primaryDark,
    outline: colors.primaryLight,
    ghost:   colors.bg,
    white:   '#f5f5f5',
  };

  if (href) return (
    <motion.a href={href} style={base} aria-label={ariaLabel}
      whileHover={{ scale: 1.02, backgroundColor: hoverBg[variant] }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );

  return (
    <motion.button type={type} style={base} onClick={onClick} aria-label={ariaLabel}
      whileHover={{ scale: 1.02, backgroundColor: hoverBg[variant] }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
