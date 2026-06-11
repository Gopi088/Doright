import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, shadows, radius } from '../styles/theme';
import { PARTNERS } from '../data/siteContent';

export default function NGOPartners() {
  const [active, setActive] = useState(3);

  return (
    <Section bg={colors.white} py="72px" style={{ border:`2px solid ${colors.border}` }}>
      <Container>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
          <h2 style={{ fontSize:'clamp(22px,3vw,34px)', fontWeight:fontWeights.extrabold, color:colors.dark, fontFamily:"'Plus Jakarta Sans','Inter',sans-serif", margin:'0 0 14px', letterSpacing:'-0.5px' }}>
            {PARTNERS.title}
          </h2>
          <p style={{ fontSize:'14px', color:colors.gray, lineHeight:1.75, maxWidth:'800px', margin:'0 0 40px' }}>
            {PARTNERS.body}
          </p>
        </motion.div>

        <div style={{ display:'flex', alignItems:'center', gap:'10px', justifyContent:'center', flexWrap:'wrap' }}>
          {/* Prev */}
          <motion.button whileHover={{ scale:1.08 }} whileTap={{ scale:0.92 }}
            onClick={() => setActive(a => Math.max(0,a-1))} aria-label="Previous partner"
            style={{ width:'36px', height:'36px', borderRadius:radius.sm, border:`1px solid ${colors.border}`, background:colors.white, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2L4 7L9 12" stroke={colors.gray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.button>

          {/* Slides */}
          {PARTNERS.items.map((p,i) => {
            const isActive = i === active;
            return (
              <motion.button key={p.id}
                onClick={() => setActive(i)}
                aria-label={p.name} aria-pressed={isActive}
                animate={{ width:isActive?'120px':'96px', height:isActive?'74px':'60px', opacity:isActive?1:0.6 }}
                whileHover={{ opacity:0.9 }}
                style={{
                  background: isActive ? colors.primary : colors.bg,
                  border:'none', borderRadius:radius.md, cursor:'pointer',
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                  boxShadow: isActive ? shadows.primary : 'none',
                  overflow:'hidden',
                }}
              >
                {isActive && (
                  <motion.span initial={{ opacity:0 }} animate={{ opacity:1 }}
                    style={{ fontSize:'20px', fontWeight:fontWeights.extrabold, color:'#fff' }}>
                    {p.name.charAt(0)}
                  </motion.span>
                )}
              </motion.button>
            );
          })}

          {/* Next */}
          <motion.button whileHover={{ scale:1.08 }} whileTap={{ scale:0.92 }}
            onClick={() => setActive(a => Math.min(PARTNERS.items.length-1, a+1))} aria-label="Next partner"
            style={{ width:'36px', height:'36px', borderRadius:radius.sm, border:`1px solid ${colors.border}`, background:colors.white, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M5 2L10 7L5 12" stroke={colors.gray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.button>
        </div>
      </Container>
    </Section>
  );
}
