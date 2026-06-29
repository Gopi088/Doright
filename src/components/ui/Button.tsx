import { motion } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { colors, radius, shadows, fontWeights, fonts, transitions } from '../../styles/theme';

type Variant = 'primary' | 'outline' | 'ghost' | 'white';
type Size    = 'sm' | 'md' | 'lg';

interface Props {
  children: ReactNode;
  variant?:  Variant;
  size?:     Size;
  href?:     string;
  onClick?:  () => void;
  fullWidth?: boolean;
  style?:    CSSProperties;
  type?:     'button' | 'submit';
  ariaLabel?: string;
  disabled?: boolean;
}

const variantBase: Record<Variant, CSSProperties> = {
  primary: { background: colors.primary, color: colors.white, border: `2px solid ${colors.primary}`, boxShadow: shadows.primary },
  outline: { background: 'transparent', color: colors.primary, border: `2px solid ${colors.primary}` },
  ghost:   { background: 'transparent', color: colors.dark, border: `2px solid ${colors.border}` },
  white:   { background: colors.white, color: colors.primary, border: `2px solid ${colors.white}`, boxShadow: shadows.md },
};

const variantHover: Record<Variant, string> = {
  primary: colors.primaryDark,
  outline: colors.primaryLight,
  ghost:   colors.bg,
  white:   '#f5f5f5',
};

const sizeBase: Record<Size, CSSProperties> = {
  sm: { padding: '9px 20px', fontSize: '13px', borderRadius: radius.full, lineHeight: 1 },
  md: { padding: '9px 20px', fontSize: '13px', borderRadius: radius.full, lineHeight: 1 },
  lg: { padding: '9px 20px', fontSize: '13px', borderRadius: radius.full, lineHeight: 1 },
};

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, fullWidth, style, type = 'button', ariaLabel, disabled }: Props) {
  const base: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: fonts.body,
    fontWeight: fontWeights.textBold,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: transitions.normal,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.55 : 1,
    flexShrink: 0,
    ...variantBase[variant],
    ...sizeBase[size],
    ...style,
  };

  if (href) {
    const motionProps = {
      style: base,
      'aria-label': ariaLabel,
      whileHover: !disabled ? { scale: 1.02, backgroundColor: variantHover[variant] } : {},
      whileTap: !disabled ? { scale: 0.98 } : {},
    };

    if (href.startsWith('/')) {
      const MotionLink = motion(Link);
      return <MotionLink to={href} {...motionProps}>{children}</MotionLink>;
    }

    return <motion.a href={href} {...motionProps}>{children}</motion.a>;
  }

  return (
    <motion.button type={type} style={base} onClick={onClick} aria-label={ariaLabel} disabled={disabled}
      whileHover={!disabled ? { scale: 1.02, backgroundColor: variantHover[variant] } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}>
      {children}
    </motion.button>
  );
}
