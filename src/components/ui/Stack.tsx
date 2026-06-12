import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  gap?: string;
  direction?: 'row' | 'column';
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: boolean;
  style?: CSSProperties;
}

export default function Stack({ children, gap = '16px', direction = 'column', align, justify, wrap = false, style }: Props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: direction,
      gap,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      ...style,
    }}>
      {children}
    </div>
  );
}
