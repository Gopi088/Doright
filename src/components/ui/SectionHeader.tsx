import { motion } from 'framer-motion';
import { colors, fontWeights } from '../../styles/theme';

interface Props {
  badge?: string;
  title: string;
  titleHighlight?: string;
  highlightAfter?: boolean;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ badge, title, titleHighlight, highlightAfter = false, subtitle, align = 'left' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: align, marginBottom: '40px' }}
    >
      {badge && (
        <span style={{
          display: 'inline-block', background: colors.primaryLight, color: colors.primary,
          fontSize: '11px', fontWeight: fontWeights.bold, borderRadius: '20px',
          padding: '5px 14px', marginBottom: '14px', letterSpacing: '0.05em', textTransform: 'uppercase',
          border: `1px solid ${colors.primaryBorder}`,
        }}>
          {badge}
        </span>
      )}
      <h2 style={{
        fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: fontWeights.extrabold,
        color: colors.dark, fontFamily: "'Plus Jakarta Sans','Inter',sans-serif",
        lineHeight: 1.15, letterSpacing: '-0.5px',
        margin: 0,
      }}>
        {highlightAfter ? (
          <>
            <span style={{ color: colors.dark }}>{title} </span>
            {titleHighlight && <span style={{ color: colors.primary }}>{titleHighlight}</span>}
          </>
        ) : (
          <>
            {titleHighlight && <span style={{ color: colors.primary }}>{titleHighlight} </span>}
            <span style={{ color: colors.dark }}>{title}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '14.5px', color: colors.gray, lineHeight: 1.75,
          maxWidth: align === 'center' ? '600px' : '700px',
          margin: align === 'center' ? '14px auto 0' : '14px 0 0',
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
