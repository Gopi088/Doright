import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  gap?: string;
  reverseOnMobile?: boolean;
  style?: CSSProperties;
  align?: CSSProperties['alignItems'];
}

// Flexbox row that wraps to column on mobile — the primary responsive layout primitive
export default function ResponsiveRow({ children, gap = '32px', style, align = 'center' }: Props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap,
      alignItems: align,
      width: '100%',
      ...style,
    }}>
      {children}
    </div>
  );
}
