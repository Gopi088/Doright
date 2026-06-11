import { CSSProperties, ReactNode } from 'react';
import { containers } from '../../styles/theme';

interface Props {
  children: ReactNode;
  size?: keyof typeof containers;
  style?: CSSProperties;
}

export default function Container({ children, size = 'lg', style }: Props) {
  return (
    <div style={{
      maxWidth: containers[size], margin: '0 auto',
      padding: '0 24px', width: '100%', ...style,
    }}>
      {children}
    </div>
  );
}
