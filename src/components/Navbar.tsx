import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DoRightLogo from './DoRightLogo';
import { colors, shadows, transitions } from '../styles/theme';
import { NAV } from '../data/siteContent';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  useEffect(() => setOpen(false), [location.pathname]);

  const isActive = (href: string) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href) && href !== '/';

  return (
    <header role="banner" style={{
      position: 'sticky', top: 0, zIndex: 1000,
      background: colors.white,
      boxShadow: scrolled ? shadows.md : `0 1px 0 ${colors.border}`,
      transition: transitions.normal,
    }}>
      <nav style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: '58px', gap: '32px' }} aria-label="Main navigation">

        {/* Logo */}
        <Link
  to="/"
  aria-label="DoRight Home"
  style={{
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  }}
>
  <img
    src="/images/Logo.svg"
    alt="DoRight"
    style={{
      height: "42px",
      width: "auto",
      display: "block",
    }}
  />
</Link>

        {/* Desktop links */}
        <ul role="list" style={{ display: 'flex', gap: '26px', flex: 1, margin: 0, padding: 0 }}>
          {NAV.links.map(n => (
            <li key={n.label} style={{ display: 'none', ['@media (min-width:768px)' as any]: { display: 'block' } }}>
              <Link to={n.href} style={{
                fontSize: '13px', fontWeight: isActive(n.href) ? 700 : 500,
                color: isActive(n.href) ? colors.primary : colors.grayMid,
                transition: transitions.fast, padding: '4px 0',
                borderBottom: isActive(n.href) ? `2px solid ${colors.primary}` : '2px solid transparent',
              }}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
          <button style={{ background: 'none', border: 'none', fontSize: '13px', fontWeight: 500, color: colors.grayMid, cursor: 'pointer', padding: '6px 12px' }}>
            Login
          </button>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link to={NAV.cta.href} style={{
              background: colors.primary, color: colors.white, borderRadius: '20px',
              padding: '8px 20px', fontSize: '13px', fontWeight: 700,
              boxShadow: shadows.primary, transition: transitions.normal,
            }}>
              {NAV.cta.label}
            </Link>
          </motion.div>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{ background: 'none', border: 'none', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px', cursor: 'pointer' }}
        >
          {[0,1,2].map(i => (
            <motion.span key={i} style={{ display: 'block', width: '22px', height: '2.5px', background: colors.dark, borderRadius: '2px', transformOrigin: 'center' }}
              animate={open ? (i===0?{rotate:45,y:7.5}:i===1?{opacity:0}:{rotate:-45,y:-7.5}) : {rotate:0,y:0,opacity:1}}
              transition={{ duration: 0.18 }}
            />
          ))}
        </button>
      </nav>

      {/* Desktop nav inline (uses CSS flex via style display) */}
      <style>{`
        @media (min-width: 768px) {
          nav ul li { display: block !important; }
          nav button[aria-label] { display: none !important; }
        }
        @media (max-width: 767px) {
          nav ul { display: none !important; }
        }
      `}</style>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden', background: colors.white, borderTop: `1px solid ${colors.border}` }}
          >
            <div style={{ padding: '16px 24px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {NAV.links.map(n => (
                <Link key={n.label} to={n.href} onClick={() => setOpen(false)}
                  style={{ fontSize: '15px', fontWeight: isActive(n.href) ? 700 : 500, color: isActive(n.href) ? colors.primary : colors.dark }}
                >
                  {n.label}
                </Link>
              ))}
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <button style={{ flex: 1, background: 'none', border: `1.5px solid ${colors.border}`, borderRadius: '20px', padding: '9px', fontSize: '13px', fontWeight: 600, color: colors.grayMid }}>Login</button>
                <Link to={NAV.cta.href} onClick={() => setOpen(false)}
                  style={{ flex: 1, background: colors.primary, color: colors.white, borderRadius: '20px', padding: '9px', fontSize: '13px', fontWeight: 700, textAlign: 'center' }}
                >
                  {NAV.cta.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
