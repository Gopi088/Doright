import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { GlobeIcon, TargetIcon, ShieldIcon, DocIcon } from '../components/icons';
import { colors, fontWeights, fonts, fontSizes, lineHeights } from '../styles/theme';
import { TRUSTED } from '../data/siteContent';

const features = [
  { Icon: GlobeIcon,  ...TRUSTED.features[0] },
  { Icon: TargetIcon, ...TRUSTED.features[1] },
  { Icon: ShieldIcon, ...TRUSTED.features[2] },
  { Icon: DocIcon,    ...TRUSTED.features[3] },
];

export default function TrustedSection() {
  return (
    <Section bg={colors.white} py="clamp(56px,8vw,96px)" ariaLabel="Trusted by Purpose-Driven NGOs">
      <Container>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(26px,4vw,52px)',
            fontWeight: fontWeights.light,
            color: colors.darkTrue,
            lineHeight: lineHeights.tight,
            margin: '0 0 20px',
          }}>
            Trusted by<br/>
            <span style={{ fontWeight: fontWeights.extrabold }}>Purpose-Driven NGOs</span>
          </h2>
          <p style={{
            fontFamily: fonts.body, fontWeight: fontWeights.text,
            maxWidth: '720px', color: '#7d7d7d',
            fontSize: 'clamp(13.5px,1.5vw,17px)',
            lineHeight: lineHeights.loose,
            margin: '0 0 clamp(40px,6vw,80px)',
          }}>
            {TRUSTED.body}
          </p>
        </motion.div>

        {/* Feature icons — responsive grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
          gap: 'clamp(24px,4vw,56px)',
          marginBottom: 'clamp(40px,6vw,80px)',
        }}>
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.45 }}
              whileHover={{ y:-4 }}
              style={{ display:'flex', flexDirection:'column', gap:'14px' }}
            >
              <div style={{ marginBottom:'8px' }}>
                <f.Icon size={64} />
              </div>
              <h3 style={{
                fontFamily: fonts.display, fontWeight: fontWeights.semibold,
                fontSize: 'clamp(14px,1.8vw,21px)',
                color: colors.darkTrue, lineHeight: lineHeights.snug, margin:0,
              }}>
                {f.title}
              </h3>
              <p style={{
                fontFamily: fonts.body, fontWeight: fontWeights.text,
                color: '#7f7f7f',
                fontSize: 'clamp(12.5px,1.3vw,15px)',
                lineHeight: lineHeights.relaxed, margin:0,
              }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA + decorative arrow line */}
        <div style={{ display:'flex', alignItems:'center', gap:'0', minWidth:0 }}>
          <Link to={TRUSTED.cta.href} style={{
            fontFamily: fonts.body, fontWeight: fontWeights.textBold,
            background: colors.primary, color: '#fff', textDecoration:'none',
            padding: 'clamp(11px,1.5vw,18px) clamp(22px,3vw,40px)',
            borderRadius: '999px',
            fontSize: 'clamp(13px,1.3vw,16px)',
            whiteSpace: 'nowrap', flexShrink:0,
            boxShadow: '0 4px 20px rgba(255,175,95,0.35)',
            display: 'inline-block',
          }}>
            {TRUSTED.cta.label}
          </Link>
          <div style={{ flex:1, marginLeft:'16px', overflow:'hidden', display:'flex', alignItems:'center' }}>
            <svg width="100%" height="12" viewBox="0 0 800 12" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="6" x2="795" y2="6" stroke="#F4C184" strokeWidth="2"/>
              <path d="M795 6 L787 1 M795 6 L787 11" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
}
