import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { PinIcon, FlagIcon, CyclistIcon } from '../components/icons';
import { colors, fontWeights, fonts } from '../styles/theme';
import { HOW_IT_WORKS } from '../data/siteContent';

export default function HowItWorks() {
  const { title, subtitle, steps } = HOW_IT_WORKS;

  return (
    <Section id="how-it-works" bg={colors.white} py="clamp(48px,7vw,80px)"
      style={{ borderTop:`1px solid ${colors.border}` }} ariaLabel="How it works">
      <Container>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
          style={{ marginBottom:'clamp(32px,5vw,56px)' }}>
          <h2 style={{ fontFamily:fonts.display, fontSize:'clamp(22px,3vw,36px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 6px', letterSpacing:'-0.5px' }}>
            {title}
          </h2>
          <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'13.5px', color:colors.gray }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Timeline — responsive: collapses gracefully on mobile */}
        <div style={{ overflowX:'auto', overflowY:'visible' }}>
          <div style={{ minWidth:'320px' }}>

            {/* Icon row */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', marginBottom:'4px' }}>
              {steps.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.45 }}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', height:'clamp(72px,9vw,100px)', justifyContent:'flex-end', paddingBottom:'4px' }}>
                  {s.icon === 'pin'     && <PinIcon size={36} />}
                  {s.icon === 'cyclist' && <CyclistIcon size={Math.min(88, 88)} />}
                  {s.icon === 'flag'    && <FlagIcon size={40} />}
                  {s.icon === 'none'    && <div style={{ height:'36px' }}/>}
                  {i === 0 && (
                    <span style={{ fontFamily:fonts.body, fontWeight:fontWeights.textBold, fontSize:'10px', color:colors.gray, letterSpacing:'0.06em', marginTop:'3px', textTransform:'uppercase' as const }}>
                      START
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Timeline track */}
            <div style={{ position:'relative', height:'48px', marginBottom:'12px' }}>
              <div style={{ position:'absolute', top:'50%', left:'12.5%', right:'12.5%', height:'3px', transform:'translateY(-50%)', background:`repeating-linear-gradient(to right,${colors.primary} 0,${colors.primary} 12px,transparent 12px,transparent 20px)`, borderRadius:'2px' }}/>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', height:'100%' }}>
                {steps.map((s, i) => (
                  <motion.div key={s.num}
                    initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }}
                    transition={{ delay:0.3+i*0.1, type:'spring', stiffness:260, damping:20 }}
                    style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                    <div style={{
                      width:'38px', height:'38px', borderRadius:'50%',
                      background:colors.primary, color:'#fff',
                      fontFamily:fonts.display, fontWeight:fontWeights.extrabold, fontSize:'15px',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      boxShadow:`0 3px 12px rgba(255,175,95,0.45)`, zIndex:1, position:'relative',
                    }}>
                      {s.num}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Labels */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'8px' }}>
              {steps.map((s, i) => (
                <motion.div key={s.num}
                  initial={{ opacity:0,y:12 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.5+i*0.08, duration:0.4 }}
                  style={{ textAlign:'center', padding:'0 4px' }}>
                  <h4 style={{ fontFamily:fonts.display, fontWeight:fontWeights.bold, fontSize:'clamp(11px,1.2vw,14px)', color:colors.dark, margin:'0 0 5px' }}>{s.label}</h4>
                  <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'clamp(10px,1vw,12px)', color:colors.gray, lineHeight:1.55, margin:0 }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
