import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { PinIcon, FlagIcon, CyclistIcon } from '../components/icons';
import { colors, fontWeights } from '../styles/theme';
import { HOW_IT_WORKS } from '../data/siteContent';

export default function HowItWorks() {
  const { title, subtitle, steps } = HOW_IT_WORKS;

  return (
    <Section id="how-it-works" bg={colors.white} py="72px" style={{ borderTop:`2px solid #ffaf5f` }}>
      <Container>
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} style={{ marginBottom:'52px' }}>
          <h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:fontWeights.extrabold, color:colors.dark, fontFamily:"'Plus Jakarta Sans','Inter',sans-serif", margin:'0 0 6px', letterSpacing:'-0.5px' }}>
            {title}
          </h2>
          <p style={{ fontSize:'13.5px', color:colors.gray, fontWeight:fontWeights.medium }}>{subtitle}</p>
        </motion.div>

        {/* Icon row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', marginBottom:'4px' }}>
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.45 }}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', height:'96px', justifyContent:'flex-end', paddingBottom:'6px' }}>
              {s.icon === 'pin'     && <PinIcon size={38} />}
              {s.icon === 'cyclist' && <CyclistIcon size={90} />}
              {s.icon === 'flag'    && <FlagIcon size={44} />}
              {s.icon === 'none'    && <div style={{ height:'38px' }}/>}
              {i === 0 && (
                <span style={{ fontSize:'10px', color:colors.gray, fontWeight:fontWeights.semibold, letterSpacing:'0.06em', marginTop:'3px', textTransform:'uppercase' as const }}>
                  START
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Dashed timeline with numbered circles */}
        <div style={{ position:'relative', height:'48px', marginBottom:'12px' }}>
          <div style={{ position:'absolute', top:'50%', left:'12.5%', right:'12.5%', height:'3px', transform:'translateY(-50%)', background:`repeating-linear-gradient(to right,${colors.primary} 0,${colors.primary} 12px,transparent 12px,transparent 20px)`, borderRadius:'2px' }}/>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', height:'100%' }}>
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ scale:0, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ delay:0.3+i*0.1, type:'spring', stiffness:260, damping:20 }}
                style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                <div style={{ width:'38px', height:'38px', borderRadius:'50%', background:colors.primary, color:'#fff', fontWeight:fontWeights.extrabold, fontSize:'15px', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:`0 3px 12px rgba(255,175,95,0.45)`, zIndex:1, position:'relative' }}>
                  {s.num}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Labels */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'16px' }}>
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity:0,y:12 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.5+i*0.08, duration:0.4 }}
              style={{ textAlign:'center', padding:'0 8px' }}>
              <h4 style={{ fontSize:'13.5px', fontWeight:fontWeights.bold, color:colors.dark, margin:'0 0 6px' }}>{s.label}</h4>
              <p style={{ fontSize:'12px', color:colors.gray, lineHeight:1.6, margin:0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
