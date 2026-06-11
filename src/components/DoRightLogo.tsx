interface Props { size?: number; className?: string; }

/**
 * Official DoRight logo — person silhouette (circle head + D-body)
 * with orange halo. Exact match of brand PDF.
 * Charcoal #4d4d4d body | Orange #ffaf5f halo
 */
export default function DoRightLogo({ size = 48, className }: Props) {
  const s = size;
  const cx = s * 0.5;
  // halo at top (~18% of height)
  const haloY = s * 0.14;
  const haloRx = s * 0.22;
  const haloRy = s * 0.09;
  const haloStroke = s * 0.07;
  // head circle
  const headY = s * 0.44;
  const headR = s * 0.18;
  const headStroke = s * 0.09;
  // body D-shape
  const bodyTop = s * 0.62;
  const bodyBot = s * 0.96;
  const bodyW  = s * 0.28;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="DoRight logo">
      {/* Halo */}
      <ellipse cx={cx} cy={haloY} rx={haloRx} ry={haloRy}
        stroke="#ffaf5f" strokeWidth={haloStroke} fill="none" strokeLinecap="round"/>
      {/* Head */}
      <circle cx={cx} cy={headY} r={headR}
        stroke="#4d4d4d" strokeWidth={headStroke} fill="none"/>
      {/* Body: D-shape — filled rounded rectangle half-circle at bottom */}
      <path
        d={`M${cx-bodyW} ${bodyTop} L${cx-bodyW} ${bodyBot-bodyW} Q${cx-bodyW} ${bodyBot} ${cx} ${bodyBot} Q${cx+bodyW} ${bodyBot} ${cx+bodyW} ${bodyBot-bodyW} L${cx+bodyW} ${bodyTop} Z`}
        fill="#4d4d4d"
      />
    </svg>
  );
}
