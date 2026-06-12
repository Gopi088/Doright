import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  bg?: string;
  py?: string;
  id?: string;
  style?: CSSProperties;
  as?: 'section' | 'div' | 'article';
  ariaLabel?: string;
}

export default function Section({ children, bg = '#FFFFFF', py = '80px', id, style, as: Tag = 'section', ariaLabel }: Props) {
  return (
    <Tag id={id} aria-label={ariaLabel}
      style={{
        background: bg,
        padding: `${py} 0`,
        // Critical: prevent sections from overflowing horizontally
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}>
      {children}
    </Tag>
  );
}
