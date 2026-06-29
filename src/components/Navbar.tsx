import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, transitions, fonts, fontWeights } from '../styles/theme';
import { NAV } from '../data/siteContent';

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href) && href !== '/';

  return (
    <header role="banner" style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,.08)' : 'none',
      borderBottom: `1px solid ${colors.border}`,
      transition: 'background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease',
      width: '100%',
      overflow: 'hidden',
    }}>
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 28px',
          display: 'flex',
          alignItems: 'center',
          height: '68px',
          gap: '32px',
        }}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          aria-label="DoRight Home"
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            flexShrink: 0,
          }}
        >
          <img
            src="/images/Logo.svg"
            alt="DoRight"
            style={{
              height: "34px",
              width: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Link>

        <ul style={{ display:'flex', gap:'2px', flex:1, margin:0, padding:0, listStyle:'none', alignItems:'center' }}
          className="responsive-hide-mobile">
          {NAV.links.map(n => (
            <li key={n.label}>
              <Link to={n.href} style={{
                fontFamily: fonts.body,
                fontSize: '14px',
                fontWeight: fontWeights.text,
                color: isActive(n.href) ? colors.dark : colors.gray,
                textDecoration: 'none',
                transition: transitions.fast,
                padding: '7px 13px',
                borderRadius: '8px',
                background: isActive(n.href) ? '#F4F4F4' : 'transparent',
                whiteSpace: 'nowrap',
              }}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display:'flex', gap:'12px', alignItems:'center', flexShrink:0 }}
          className="responsive-hide-mobile">
          <motion.div whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}>
            <Link to="/login" style={{
              background: colors.white,
              border:`1.5px solid ${colors.border}`,
              borderBottomColor: colors.border,
              borderRadius:'50px',
              fontFamily: fonts.body, fontSize:'13px', fontWeight: fontWeights.textBold,
              color: colors.dark, cursor:'pointer', padding:'9px 20px',
              whiteSpace: 'nowrap',
              boxShadow: 'none',
              textDecoration: 'none',
              display: 'inline-block',
              transition: transitions.normal,
            }}>
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}>
            <Link to={NAV.cta.href} style={{
              fontFamily: fonts.body,
              background: colors.primary, color: colors.white,
              borderRadius: '50px', padding: '9px 20px',
              fontSize: '13px', fontWeight: fontWeights.textBold,
              boxShadow: 'none', transition: transitions.normal,
              whiteSpace: 'nowrap', display: 'inline-block',
            }}>
              {NAV.cta.label}
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{
            background:'none', border:'none', padding:'8px',
            display:'flex', flexDirection:'column', gap:'5px',
            cursor:'pointer', marginLeft:'auto', flexShrink:0,
          }}
        >
          {[0,1,2].map(i => (
            <motion.span key={i}
              style={{ display:'block', width:'22px', height:'2.5px', background:colors.dark, borderRadius:'2px', transformOrigin:'center' }}
              animate={open
                ? (i===0 ? {rotate:45,y:7.5} : i===1 ? {opacity:0,scaleX:0} : {rotate:-45,y:-7.5})
                : {rotate:0,y:0,opacity:1,scaleX:1}
              }
              transition={{ duration:0.18 }}
            />
          ))}
        </button>
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .responsive-hide-mobile { display: flex !important; }
          nav > button[aria-controls="mobile-menu"] { display: none !important; }
        }
        @media (max-width: 767px) {
          .responsive-hide-mobile { display: none !important; }
        }
      `}</style>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" role="dialog" aria-label="Navigation menu"
            initial={{ height:0, opacity:0 }}
            animate={{ height:'auto', opacity:1 }}
            exit={{ height:0, opacity:0 }}
            transition={{ duration:0.22 }}
            style={{ overflow:'hidden', background:colors.white, borderTop:`1px solid ${colors.border}` }}
          >
            <nav aria-label="Mobile navigation" style={{ padding:'16px clamp(16px,4vw,24px) 20px', display:'flex', flexDirection:'column', gap:'14px' }}>
              {NAV.links.map(n => (
                <Link key={n.label} to={n.href} onClick={() => setOpen(false)}
                  style={{
                    fontFamily: fonts.body, fontSize:'15px',
                    fontWeight: isActive(n.href) ? fontWeights.textBold : fontWeights.text,
                    color: isActive(n.href) ? colors.primary : colors.dark,
                    textDecoration:'none',
                  }}>
                  {n.label}
                </Link>
              ))}
              <div style={{ display:'flex', gap:'10px', marginTop:'6px', flexWrap:'wrap' }}>
                <Link to="/login" onClick={() => setOpen(false)} style={{ flex:1, background:'none', border:`1.5px solid ${colors.border}`, borderRadius:'20px', padding:'9px 16px', fontFamily:fonts.body, fontSize:'13px', fontWeight:fontWeights.textBold, color:colors.dark, cursor:'pointer', minWidth:'100px', textAlign:'center', textDecoration:'none' }}>
                  Login
                </Link>
                <Link to={NAV.cta.href} onClick={() => setOpen(false)}
                  style={{ flex:1, background:colors.primary, color:colors.white, borderRadius:'20px', padding:'9px 16px', fontFamily:fonts.body, fontSize:'13px', fontWeight:fontWeights.textBold, textAlign:'center', minWidth:'100px' }}>
                  {NAV.cta.label}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
