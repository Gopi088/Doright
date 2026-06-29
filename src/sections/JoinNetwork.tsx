import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { colors, fontWeights, fonts, radius, shadows } from '../styles/theme';
import { JOIN } from '../data/siteContent';

export default function JoinNetwork() {
  return (
    <Section bg={colors.white} py="clamp(22px,4vw,52px)" ariaLabel="Join the DoRight NGO Network">
      <Container style={{ maxWidth: '1040px' }}>
        <motion.div className="ngo-join-card" initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
          style={{
            border: `1px solid ${colors.border}`,
            borderRadius: radius.lg,
            padding:'clamp(26px,4vw,38px) clamp(30px,5vw,46px)',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            gap:'clamp(24px,4vw,48px)',
            flexWrap:'wrap',
            background:colors.bg,
            boxShadow:`0 9px 0 ${colors.darkTrue}, ${shadows.card}`,
          }}>

          <div className="ngo-join-copy" style={{ flex:'1 1 min(300px,100%)', minWidth:0 }}>
            <h2 style={{ fontFamily:fonts.display, fontSize:'clamp(27px,3.4vw,38px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 12px', lineHeight:1.04, letterSpacing:'0' }}>
              {JOIN.title}<br/>
              <span style={{ color:colors.dark }}>{JOIN.titleBold}</span>
            </h2>
            <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'11px', color:colors.gray, lineHeight:1.7, margin:'0 0 15px', maxWidth:'410px' }}>
              {JOIN.body}
            </p>
            <div className="ngo-join-actions" style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
              <Button href={JOIN.cta1.href} variant="primary" size="sm">{JOIN.cta1.label}</Button>
              <Button href={JOIN.cta2.href} variant="primary" size="sm">{JOIN.cta2.label}</Button>
            </div>
          </div>

          <div className="ngo-join-visual" style={{ flex:'0 1 min(260px,100%)', minWidth:0, display:'flex', justifyContent:'center' }}>
            <div className="ngo-join-placeholder" style={{
              width:'250px', height:'210px', maxWidth:'100%',
              background:colors.placeholder, border:`1px solid ${colors.grayLight}`,
              borderRadius:radius.lg, position:'relative',
            }} />
          </div>
        </motion.div>

        <div style={{ display:'flex', justifyContent:'center', gap:'12px', marginTop:'44px' }}>
          <span style={{ width:'34px', height:'4px', borderRadius:'3px', background:colors.primary, display:'inline-block' }}/>
          <span style={{ width:'34px', height:'4px', borderRadius:'3px', background:colors.grayLight, display:'inline-block' }}/>
          <span style={{ width:'34px', height:'4px', borderRadius:'3px', background:colors.grayLight, display:'inline-block' }}/>
        </div>
      </Container>
    </Section>
  );
}
