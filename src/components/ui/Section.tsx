import { CSSProperties, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  bg?: string;
  py?: string;
  id?: string;
  style?: CSSProperties;
}

export default function Section({ children, bg = '#FFFFFF', py = '80px', id, style }: Props) {
  return (
    <section id={id} style={{ background: bg, padding: `${py} 0`, ...style }}>
      {children}
    </section>
  );
}
