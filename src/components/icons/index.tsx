// ─── Centralized SVG Icon System ─────────────────────────────────────────────
// All icons are hand-coded SVG components using official Doright brand colors.
// Never use emoji. Never use icon libraries. Only these components.

const C = '#FFAF5F'; // brand primary
const D = '#4D4D4D'; // brand dark

interface IconProps { size?: number; color?: string; }

export function GlobeIcon({ size = 48, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none" aria-hidden="true">
      <circle cx="35" cy="35" r="24" stroke={color} strokeWidth="2"/>
      <ellipse cx="35" cy="35" rx="11" ry="24" stroke={color} strokeWidth="2"/>
      <line x1="11" y1="35" x2="59" y2="35" stroke={color} strokeWidth="2"/>
      <line x1="15" y1="25" x2="55" y2="25" stroke={color} strokeWidth="1.5"/>
      <line x1="15" y1="45" x2="55" y2="45" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

export function TargetIcon({ size = 48, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none" aria-hidden="true">
      <circle cx="35" cy="35" r="18" stroke={color} strokeWidth="2"/>
      <circle cx="35" cy="35" r="11" stroke={color} strokeWidth="2"/>
      <circle cx="35" cy="35" r="4" fill={color}/>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        return <line key={i}
          x1={35 + Math.cos(angle) * 22} y1={35 + Math.sin(angle) * 22}
          x2={35 + Math.cos(angle) * 28} y2={35 + Math.sin(angle) * 28}
          stroke={color} strokeWidth="2"/>;
      })}
    </svg>
  );
}

export function ShieldIcon({ size = 48, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none" aria-hidden="true">
      <path d="M35 10L19 17V31C19 43 27 52 35 56C43 52 51 43 51 31V17L35 10Z"
        stroke={color} strokeWidth="2"/>
      <circle cx="35" cy="33" r="8" stroke={color} strokeWidth="2"/>
      <path d="M31 33L34 36L39 30" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DocIcon({ size = 48, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 70 70" fill="none" aria-hidden="true">
      <path d="M22 12H40L50 22V54H22V12Z" stroke={color} strokeWidth="2"/>
      <path d="M40 12V22H50" stroke={color} strokeWidth="2"/>
      <line x1="28" y1="30" x2="43" y2="30" stroke={color} strokeWidth="1.5"/>
      <line x1="28" y1="36" x2="43" y2="36" stroke={color} strokeWidth="1.5"/>
      <line x1="28" y1="42" x2="39" y2="42" stroke={color} strokeWidth="1.5"/>
      <circle cx="45" cy="46" r="6" stroke={color} strokeWidth="1.5"/>
      <path d="M42.5 46L44.5 48L48 44" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function PinIcon({ size = 38, color = C }: IconProps) {
  return (
    <svg width={size * 0.8} height={size} viewBox="0 0 32 40" fill="none" aria-hidden="true">
      <path d="M16 2C9.4 2 4 7.4 4 14C4 23 16 38 16 38C16 38 28 23 28 14C28 7.4 22.6 2 16 2Z"
        fill={color} stroke={color} strokeWidth="0.5"/>
      <circle cx="16" cy="14" r="5" fill="white"/>
    </svg>
  );
}

export function FlagIcon({ size = 46, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 52" fill="none" aria-hidden="true">
      <line x1="12" y1="4" x2="12" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d={`M12 6 L42 14 L12 25 Z`} fill={color}/>
    </svg>
  );
}

export function CyclistIcon({ size = 92, color = C, bodyColor = D }: { size?: number; color?: string; bodyColor?: string }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 92 78" fill="none" aria-hidden="true">
      <circle cx="18" cy="58" r="14" stroke={color} strokeWidth="2.5" fill="none"/>
      <circle cx="18" cy="58" r="2.5" fill={color}/>
      <circle cx="72" cy="58" r="14" stroke={color} strokeWidth="2.5" fill="none"/>
      <circle cx="72" cy="58" r="2.5" fill={color}/>
      <path d="M18 58 L44 32 L52 30 L72 58" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="44" y1="32" x2="44" y2="52" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="36" y1="52" x2="52" y2="52" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="58" y1="32" x2="72" y2="32" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="72" y1="32" x2="72" y2="44" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="38" y1="27" x2="50" y2="27" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="44" y1="27" x2="44" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="60" cy="14" r="7" fill={color}/>
      <path d="M53 12 Q55 6 60 6 Q65 6 67 12" fill="#E8963E"/>
      <path d="M60 21 L52 34 L44 30" stroke={bodyColor} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M54 34 L44 52" stroke={bodyColor} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M54 34 L58 50" stroke={bodyColor} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M57 25 L68 34" stroke={bodyColor} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function CheckCircleIcon({ size = 15, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="7" stroke={color} strokeWidth="1.2"/>
      <path d="M5 7.5l1.8 1.8L10.5 5.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LocationPinIcon({ size = 14, color = C }: IconProps) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 14 17" fill="none" aria-hidden="true">
      <path d="M7 1C4.24 1 2 3.24 2 6C2 9.75 7 16 7 16C7 16 12 9.75 12 6C12 3.24 9.76 1 7 1Z"
        stroke={color} strokeWidth="1.4"/>
      <circle cx="7" cy="6" r="2" stroke={color} strokeWidth="1.2"/>
    </svg>
  );
}

export function SearchIcon({ size = 17, color = '#999999' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="6" stroke={color} strokeWidth="1.8"/>
      <path d="M12 12L15 15" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function ChevronLeftIcon({ size = 14, color = '#999999' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M9 2L4 7L9 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ChevronRightIcon({ size = 14, color = '#999999' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 2L10 7L5 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function NoResultsIcon({ size = 48, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="21" cy="21" r="14" stroke={color} strokeWidth="2.5" fill="none"/>
      <path d="M30 30L42 42" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="15" y1="21" x2="27" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="21" y1="15" x2="21" y2="27" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="17" y1="17" x2="25" y2="25" stroke="#cc4444" strokeWidth="2" strokeLinecap="round"/>
      <line x1="25" y1="17" x2="17" y2="25" stroke="#cc4444" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function MailIcon({ size = 28, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="22" height="16" rx="2" stroke={color} strokeWidth="1.8"/>
      <path d="M3 9L14 17L25 9" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function EmptyInboxIcon({ size = 48, color = C }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="36" height="28" rx="3" stroke={color} strokeWidth="2.2"/>
      <path d="M6 14L24 28L42 14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="16" y1="32" x2="32" y2="32" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
    </svg>
  );
}
