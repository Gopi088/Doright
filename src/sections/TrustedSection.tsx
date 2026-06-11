import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { GlobeIcon, TargetIcon, ShieldIcon, DocIcon } from '../components/icons';
import { colors, fontWeights, shadows } from '../styles/theme';
import { TRUSTED } from '../data/siteContent';

const features = [
  { Icon: GlobeIcon,  ...TRUSTED.features[0] },
  { Icon: TargetIcon, ...TRUSTED.features[1] },
  { Icon: ShieldIcon, ...TRUSTED.features[2] },
  { Icon: DocIcon,    ...TRUSTED.features[3] },
];

export default function TrustedSection() {
  return (
    <Section bg={colors.white} py="80px">
      <Container>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
          <h2 style={{ fontSize:'clamp(28px,4vw,52px)', fontWeight:300, color:'#1d1d1d', fontFamily:"'Plus Jakarta Sans','Inter',sans-serif", lineHeight:1.05, margin:'0 0 24px', letterSpacing:'-0.5px' }}>
            Trusted by<br/>
            <span style={{ fontWeight:800 }}>Purpose-Driven NGOs</span>
          </h2>
          <p style={{ maxWidth:'760px', color:'#7d7d7d', fontSize:'clamp(14px,1.5vw,18px)', lineHeight:1.9, margin:'0 0 72px' }}>
            {TRUSTED.body}
          </p>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'clamp(24px,4vw,60px)', marginBottom:'clamp(48px,6vw,90px)' }}>
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.45 }}
              whileHover={{ y:-4 }} style={{ cursor:'default' }}>
              <div style={{ marginBottom:'24px' }}>
                <f.Icon size={70} />
              </div>
              <h3 style={{ fontSize:'clamp(15px,1.8vw,23px)', fontWeight:600, color:'#1d1d1d', lineHeight:1.25, margin:'0 0 14px' }}>{f.title}</h3>
              <p style={{ color:'#7f7f7f', fontSize:'clamp(13px,1.4vw,16px)', lineHeight:1.8, margin:0 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA + arrow */}
        <div style={{ display:'flex', alignItems:'center', gap:'20px' }}>
          <Link to={TRUSTED.cta.href} style={{
            background: colors.primary, color: '#fff', textDecoration:'none',
            padding:'clamp(12px,1.5vw,18px) clamp(24px,3vw,40px)',
            borderRadius:'999px', fontSize:'clamp(13px,1.4vw,16px)', fontWeight:600, whiteSpace:'nowrap',
            flexShrink:0, boxShadow:`0 4px 20px rgba(255,175,95,0.35)`
          }}>
            {TRUSTED.cta.label}
          </Link>
          <div style={{ flex:1, display:'flex', alignItems:'center' }}>
            <svg width="100%" height="12" viewBox="0 0 1000 12" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="6" x2="990" y2="6" stroke="#F4C184" strokeWidth="2"/>
              <path d="M990 6 L982 1 M990 6 L982 11" stroke={colors.primary} strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
}
