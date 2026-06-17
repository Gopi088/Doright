import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, fonts, shadows, radius } from '../styles/theme';
import { PARTNERS } from '../data/siteContent';

const API = "http://localhost:8000";
const SLIDE_INTERVAL = 3000;   // ms between auto-advances
const TRANSITION_MS  = 500;    // slide animation duration in ms

export default function NGOPartners() {
  const [active, setActive]               = useState(0);
  const [partnerImages, setPartnerImages] = useState<string[]>([]);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState<string | null>(null);
  const [paused, setPaused]               = useState(false);   // pause on hover/focus
  const [direction, setDirection]         = useState<1 | -1>(1); // 1 = right→left, -1 = left→right

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = partnerImages.length;

  // ── Fetch images ─────────────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API}/images`)
      .then(r => {
        if (!r.ok) throw new Error(`Server error: ${r.status}`);
        return r.json();
      })
      .then(data => {
        const imgs: string[] = data.images ?? [];
        setPartnerImages(imgs);
        setActive(0);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // ── Advance to next slide (wraps around) ─────────────────────────────────
  const goNext = useCallback(() => {
    setDirection(1);
    setActive(a => (a + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive(a => (a - 1 + total) % total);
  }, [total]);

  const goTo = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  // ── Auto-scroll interval ──────────────────────────────────────────────────
  useEffect(() => {
    if (total === 0 || paused) return;
    intervalRef.current = setInterval(goNext, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total, paused, goNext]);

  // Slide variants: direction 1 = enters from right, exits to left
  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const featuredSrc =
    total > 0 ? `${API}/image/${partnerImages[active]}` : null;

  return (
    <Section
      bg={colors.white}
      py="clamp(48px,7vw,80px)"
      style={{ border: `2px solid ${colors.border}` }}
      ariaLabel="Meet Our NGO Partners"
    >
      <Container>

        {/* ── Heading ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(20px,3vw,34px)',
            fontWeight: fontWeights.extrabold,
            color: colors.dark,
            margin: '0 0 14px',
            letterSpacing: '-0.5px',
          }}>
            {PARTNERS.title}
          </h2>
          <p style={{
            fontFamily: fonts.body,
            fontWeight: fontWeights.text,
            fontSize: 'clamp(13px,1.4vw,15px)',
            color: colors.gray,
            lineHeight: 1.75,
            maxWidth: '780px',
            margin: '0 0 36px',
          }}>
            {PARTNERS.body}
          </p>
        </motion.div>

        {/* ── Loading ───────────────────────────────────────────────────────── */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{
              width: '36px', height: '36px', border: `3px solid ${colors.primaryBorder}`,
              borderTopColor: colors.primary, borderRadius: '50%',
              animation: 'spin 0.8s linear infinite', margin: '0 auto 12px',
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ fontFamily: fonts.body, color: colors.gray, fontSize: '14px' }}>
              Loading partner images…
            </p>
          </div>
        )}

        {/* ── Error ────────────────────────────────────────────────────────── */}
        {error && (
          <p style={{ textAlign: 'center', color: '#c0392b', fontFamily: fonts.body, fontSize: '14px', padding: '32px 0' }}>
            Could not load images: {error}
          </p>
        )}

        {/* ── Main carousel ────────────────────────────────────────────────── */}
        {!loading && !error && total > 0 && (
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >

            {/* ── Featured slide — animated right-to-left ─────────────────── */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(200px, 40vw, 380px)',
              borderRadius: radius.lg,
              overflow: 'hidden',
              background: colors.bg,
              marginBottom: '20px',
              // Fade edges for cinematic feel
              boxShadow: shadows.md,
            }}>

              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: TRANSITION_MS / 1000, ease: [0.32, 0.72, 0, 1] }}
                  style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <img
                    src={featuredSrc!}
                    alt={partnerImages[active]}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      userSelect: 'none',
                    }}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Left / Right arrow overlays */}
              {[
                { label: 'Previous partner', action: goPrev, side: 'left',  path: 'M9 2L4 7L9 12' },
                { label: 'Next partner',     action: goNext, side: 'right', path: 'M5 2L10 7L5 12' },
              ].map(btn => (
                <motion.button
                  key={btn.side}
                  onClick={btn.action}
                  aria-label={btn.label}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.98)' }}
                  whileTap={{ scale: 0.92 }}
                  style={{
                    position: 'absolute',
                    top: '50%', transform: 'translateY(-50%)',
                    [btn.side]: '14px',
                    width: '38px', height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.88)',
                    border: `1px solid ${colors.border}`,
                    backdropFilter: 'blur(6px)',
                    cursor: 'pointer', zIndex: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: shadows.sm,
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d={btn.path} stroke={colors.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              ))}

              {/* Slide counter */}
              <div style={{
                position: 'absolute', bottom: '12px', right: '14px',
                background: 'rgba(0,0,0,0.45)', color: '#fff',
                fontFamily: fonts.body, fontSize: '11px', fontWeight: fontWeights.textBold,
                borderRadius: radius.full, padding: '3px 10px',
                backdropFilter: 'blur(4px)', userSelect: 'none',
              }}>
                {active + 1} / {total}
              </div>

              {/* Auto-play progress bar */}
              {!paused && (
                <motion.div
                  key={`progress-${active}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
                  style={{
                    position: 'absolute', bottom: 0, left: 0,
                    width: '100%', height: '3px',
                    background: colors.primary,
                    transformOrigin: 'left center',
                    opacity: 0.85,
                  }}
                />
              )}
            </div>

            {/* ── Thumbnail strip — auto-scrolls with active item ─────────── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

              {/* Prev arrow */}
              <motion.button
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                onClick={goPrev}
                aria-label="Previous partner"
                style={{
                  width: '34px', height: '34px', flexShrink: 0,
                  borderRadius: radius.sm,
                  border: `1px solid ${colors.border}`,
                  background: colors.white, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M9 2L4 7L9 12" stroke={colors.gray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>

              {/* Scrollable thumbnail track */}
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>

                {/* The inner strip slides left/right via CSS transform */}
                <motion.div
                  animate={{ x: `calc(-${active} * (98px + 8px))` }}
                  transition={{ duration: TRANSITION_MS / 1000, ease: [0.32, 0.72, 0, 1] }}
                  style={{ display: 'flex', gap: '8px', width: 'max-content' }}
                >
                  {partnerImages.map((filename, i) => {
                    const isActive = i === active;
                    return (
                      <motion.button
                        key={filename}
                        onClick={() => goTo(i)}
                        aria-label={`Go to ${filename}`}
                        aria-pressed={isActive}
                        animate={{
                          width:   isActive ? '118px' : '90px',
                          height:  isActive ? '70px'  : '56px',
                          opacity: isActive ? 1 : 0.45,
                        }}
                        whileHover={{ opacity: 0.85 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          padding: 0, flexShrink: 0,
                          border: isActive ? `2px solid ${colors.primary}` : `2px solid transparent`,
                          borderRadius: radius.md, cursor: 'pointer',
                          boxShadow: isActive ? shadows.primary : 'none',
                          overflow: 'hidden', background: colors.bg,
                          outline: 'none',
                        }}
                      >
                        <img
                          src={`${API}/image/${filename}`}
                          alt={filename}
                          style={{
                            width: '100%', height: '100%',
                            objectFit: 'cover', display: 'block',
                            pointerEvents: 'none',
                          }}
                          draggable={false}
                        />
                      </motion.button>
                    );
                  })}
                </motion.div>

                {/* Gradient fade on right edge */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, bottom: 0, width: '32px',
                  background: `linear-gradient(to right, transparent, ${colors.white})`,
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Next arrow */}
              <motion.button
                whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                onClick={goNext}
                aria-label="Next partner"
                style={{
                  width: '34px', height: '34px', flexShrink: 0,
                  borderRadius: radius.sm,
                  border: `1px solid ${colors.border}`,
                  background: colors.white, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5 2L10 7L5 12" stroke={colors.gray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>

            {/* ── Dot indicators ──────────────────────────────────────────── */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '16px' }}>
              {partnerImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === active ? '22px' : '7px',
                    height: '7px',
                    borderRadius: radius.full,
                    background: i === active ? colors.primary : colors.grayLight,
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.25s ease',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

          </div>
        )}

        {/* ── Empty state ───────────────────────────────────────────────────── */}
        {!loading && !error && total === 0 && (
          <p style={{ textAlign: 'center', fontFamily: fonts.body, color: colors.gray, fontSize: '14px', padding: '32px 0' }}>
            No images found. Add .jpg / .png / .webp files to your server's images/ folder.
          </p>
        )}

      </Container>
    </Section>
  );
}
