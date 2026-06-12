import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  cols?: string;  // CSS grid-template-columns value
  gap?: string;
  style?: CSSProperties;
  minColWidth?: string;
}

export default function Grid({ children, cols, gap = '24px', style, minColWidth = '280px' }: Props) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: cols ?? `repeat(auto-fit, minmax(min(${minColWidth}, 100%), 1fr))`,
      gap,
      width: '100%',
      ...style,
    }}>
      {children}
    </div>
  );
}
