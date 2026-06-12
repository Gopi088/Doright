import { CSSProperties, ReactNode } from 'react';
import { containers } from '../../styles/theme';

interface Props {
  children: ReactNode;
  size?: keyof typeof containers;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'article' | 'main';
}

export default function Container({ children, size = 'lg', style, as: Tag = 'div' }: Props) {
  return (
    <Tag style={{
      maxWidth: containers[size],
      margin: '0 auto',
      padding: '0 clamp(16px, 4vw, 24px)',
      width: '100%',
      // Safety: never let container overflow its parent
      boxSizing: 'border-box',
      ...style,
    }}>
      {children}
    </Tag>
  );
}
