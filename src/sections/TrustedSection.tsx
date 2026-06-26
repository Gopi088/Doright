import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { GlobeIcon, TargetIcon, ShieldIcon, DocIcon } from '../components/icons';
import { colors, fontWeights, fonts, lineHeights, shadows } from '../styles/theme';
import { TRUSTED } from '../data/siteContent';

const features = [
  { Icon: GlobeIcon,  ...TRUSTED.features[0] },
  { Icon: TargetIcon, ...TRUSTED.features[1] },
  { Icon: ShieldIcon, ...TRUSTED.features[2] },
  { Icon: DocIcon,    ...TRUSTED.features[3] },
];

export default function TrustedSection() {
  return (
    <Section bg={colors.white} py="clamp(62px,8vw,110px)" ariaLabel="Trusted by Purpose-Driven NGOs">
      <Container style={{ maxWidth: '1040px' }}>
        <style>{`
          .trusted-feature-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: clamp(24px, 5vw, 62px);
          }
          @media (max-width: 900px) {
            .trusted-feature-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 540px) {
            .trusted-feature-grid { grid-template-columns: 1fr; }
          }
        `}</style>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(26px,3.3vw,38px)',
            fontWeight: fontWeights.light,
            color: colors.dark,
            lineHeight: lineHeights.tight,
            margin: '0 0 18px',
            maxWidth: '420px',
          }}>
            Trusted by<br/>
            <span style={{ fontWeight: fontWeights.extrabold }}>Purpose-Driven NGOs</span>
          </h2>
          <p style={{
            fontFamily: fonts.body, fontWeight: fontWeights.text,
            maxWidth: '790px', color: colors.gray,
            fontSize: '12px',
            lineHeight: lineHeights.loose,
            margin: '0 0 clamp(46px,6vw,72px)',
          }}>
            {TRUSTED.body}
          </p>
        </motion.div>

        {/* Feature icons — always 4 columns on desktop */}
        <div className="trusted-feature-grid" style={{ marginBottom: 'clamp(56px,7vw,96px)' }}>
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.45 }}
              whileHover={{ y:-4 }}
              style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', textAlign:'left', gap:'10px' }}
            >
              <div style={{ marginBottom:'8px' }}>
                <f.Icon size={62} />
              </div>
              <h3 style={{
                fontFamily: fonts.display, fontWeight: fontWeights.semibold,
                fontSize: '13px',
                color: colors.darkTrue, lineHeight: lineHeights.snug, margin:0,
              }}>
                {f.title}
              </h3>
              <p style={{
                fontFamily: fonts.body, fontWeight: fontWeights.text,
                color: colors.gray,
                fontSize: '10.5px',
                lineHeight: 1.55, margin:0,
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
            background: colors.primary, color: colors.white, textDecoration:'none',
            height: '43px', padding: '0 27px',
            borderRadius: '999px',
            fontSize: '12px',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            whiteSpace: 'nowrap', flexShrink:0,
            boxShadow: shadows.primary,
          }}>
            {TRUSTED.cta.label}
          </Link>
          <div style={{ flex:1, marginLeft:'16px', overflow:'hidden', display:'flex', alignItems:'center' }}>
            <svg width="100%" height="12" viewBox="0 0 800 12" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="6" x2="795" y2="6" stroke={colors.primaryBorder} strokeWidth="2"/>
              <path d="M795 6 L787 1 M795 6 L787 11" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
}
