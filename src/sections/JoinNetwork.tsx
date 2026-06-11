import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { colors, fontWeights, radius } from '../styles/theme';
import { JOIN } from '../data/siteContent';

export default function JoinNetwork() {
  return (
    <Section bg={colors.white} py="40px">
      <Container>
        {/* Card */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
          style={{ border:`2px solid ${colors.borderWarm}`, borderRadius:`${radius['2xl']}`, padding:'clamp(28px,4vw,52px)', display:'flex', alignItems:'center', gap:'48px', flexWrap:'wrap', background:colors.white }}>

          {/* Text */}
          <div style={{ flex:'1 1 300px', minWidth:0 }}>
            <h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:fontWeights.extrabold, color:colors.dark, fontFamily:"'Plus Jakarta Sans','Inter',sans-serif", margin:'0 0 16px', lineHeight:1.25, letterSpacing:'-0.5px' }}>
              {JOIN.title}<br/>
              <span style={{ color:colors.primary }}>{JOIN.titleBold}</span>
            </h2>
            <p style={{ fontSize:'14px', color:colors.gray, lineHeight:1.75, margin:'0 0 28px', maxWidth:'400px' }}>{JOIN.body}</p>
            <div style={{ display:'flex', gap:'14px', flexWrap:'wrap' }}>
              <Button href={JOIN.cta1.href} variant="primary" size="lg">{JOIN.cta1.label}</Button>
              <Button href={JOIN.cta2.href} variant="outline" size="lg">{JOIN.cta2.label}</Button>
            </div>
          </div>

          {/* Placeholder */}
          <div style={{ flex:'1 1 240px', minWidth:0, maxWidth:'360px' }}>
            <div style={{ width:'100%', height:'180px', background:colors.bg, borderRadius:radius.xl }}/>
          </div>
        </motion.div>

        {/* Dots */}
        <div style={{ display:'flex', justifyContent:'center', gap:'8px', marginTop:'20px' }}>
          <span style={{ width:'24px', height:'6px', borderRadius:'3px', background:colors.primary, display:'inline-block' }}/>
          <span style={{ width:'8px',  height:'6px', borderRadius:'3px', background:colors.border,  display:'inline-block' }}/>
          <span style={{ width:'8px',  height:'6px', borderRadius:'3px', background:colors.border,  display:'inline-block' }}/>
        </div>
      </Container>
    </Section>
  );
}
