import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { PinIcon, FlagIcon, CyclistIcon } from '../components/icons';
import { colors, fontWeights, fonts, shadows } from '../styles/theme';
import { HOW_IT_WORKS } from '../data/siteContent';

export default function HowItWorks() {
  const { title, subtitle, steps } = HOW_IT_WORKS;

  return (
    <Section id="how-it-works" bg={colors.white} py="clamp(48px,7vw,80px)"
      style={{ borderTop:`2px solid ${colors.primary}` }} ariaLabel="How it works">
      <Container style={{ maxWidth: '1040px' }}>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:'clamp(34px,5vw,62px)' }}>
          <h2 style={{ fontFamily:fonts.display, fontSize:'clamp(24px,3vw,34px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 6px', letterSpacing:'0' }}>
            {title}
          </h2>
          <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.textBold, fontSize:'11px', color:colors.dark }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Timeline — responsive: collapses gracefully on mobile */}
        <div style={{ overflowX:'auto', overflowY:'visible' }}>
          <div style={{ minWidth:'320px' }}>

            {/* Icon row */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', marginBottom:'2px' }}>
              {steps.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.45 }}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', height:'clamp(96px,10vw,125px)', justifyContent:'flex-end', paddingBottom:'4px' }}>
                  {s.icon === 'pin'     && <PinIcon size={42} />}
                  {s.icon === 'cyclist' && <CyclistIcon size={128} />}
                  {s.icon === 'flag'    && <FlagIcon size={47} />}
                  {s.icon === 'none'    && <div style={{ height:'40px' }}/>}
                  {i === 0 && (
                    <span style={{ fontFamily:fonts.body, fontWeight:fontWeights.textBold, fontSize:'10px', color:colors.gray, letterSpacing:'0.06em', marginTop:'3px', textTransform:'uppercase' as const }}>
                      START
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Timeline track */}
            <div style={{ position:'relative', height:'56px', marginBottom:'18px' }}>
              <div style={{ position:'absolute', top:'50%', left:'8%', right:'8%', height:'2px', transform:'translateY(-50%)', background:colors.primary, borderRadius:'2px' }}/>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', height:'100%' }}>
                {steps.map((s, i) => (
                  <motion.div key={s.num}
                    initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }}
                    transition={{ delay:0.3+i*0.1, type:'spring', stiffness:260, damping:20 }}
                    style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <div style={{
                      width:'48px', height:'48px', borderRadius:'50%',
                      background:colors.primary, color:colors.white,
                      fontFamily:fonts.display, fontWeight:fontWeights.extrabold, fontSize:'18px',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      boxShadow: shadows.primary, zIndex:1, position:'relative',
                    }}>
                      {s.num}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Labels */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px' }}>
              {steps.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity:0,y:12 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.5+i*0.08, duration:0.4 }}
                  style={{ textAlign:'center', padding:'0 4px' }}>
                  <h4 style={{ fontFamily:fonts.display, fontWeight:fontWeights.bold, fontSize:'11px', color:colors.darkTrue, margin:'0 0 6px' }}>{s.label}</h4>
                  <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'10px', color:colors.gray, lineHeight:1.55, margin:'0 auto', maxWidth:'125px' }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
