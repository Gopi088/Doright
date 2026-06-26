import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, fonts, radius } from '../styles/theme';
import { FEATURED } from '../data/siteContent';

function SunAndPhotos() {
  return (
    <div style={{ position:'relative', width:'min(310px,100%)', height:'270px', flexShrink:0, overflow:'visible' }}>
      <svg aria-hidden="true" style={{ position:'absolute', left:'0', top:'78px', overflow:'visible' }} width="98" height="98" viewBox="0 0 98 98">
        <g transform="translate(49,49)">
          {Array.from({length:12},(_,i)=>{
            const a=(i*30*Math.PI)/180;
            return <line key={i} x1={Math.cos(a)*24} y1={Math.sin(a)*24} x2={Math.cos(a)*45} y2={Math.sin(a)*45}
              stroke={colors.primary} strokeWidth="5" strokeLinecap="round"/>;
          })}
          <circle r="23" fill={colors.white} stroke={colors.primary} strokeWidth="7"/>
        </g>
      </svg>
      <motion.div
        initial={{ opacity:0, y:10 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.5 }}
        style={{
          position:'absolute', left:'62px', top:'34px', zIndex:1,
          width:'145px', height:'210px',
          background:colors.placeholderDark,
          border:`5px solid ${colors.grayLight}`,
        }}
      />
      <div style={{ position:'absolute', right:'8px', top:'0', width:'142px', height:'134px', background:colors.placeholderDark, border:`5px solid ${colors.grayLight}`, zIndex:2 }} />
      <div style={{ position:'absolute', right:'34px', top:'126px', width:'132px', height:'132px', background:colors.placeholderDark, border:`5px solid ${colors.grayLight}`, zIndex:3 }} />
    </div>
  );
}

export default function GetFeatured() {
  return (
    <Section bg={colors.white} py="clamp(62px,8vw,118px)" ariaLabel="Get Your NGO Featured">
      <Container style={{ maxWidth: '1040px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'clamp(42px,8vw,128px)', flexWrap:'wrap' }}>

          <div style={{ flex:'1 1 min(360px,100%)', minWidth:0, maxWidth:'500px' }}>
            <motion.h2 initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
              style={{ fontFamily:fonts.display, fontSize:'clamp(25px,3vw,34px)', fontWeight:fontWeights.extrabold, color:colors.darkTrue, margin:'0 0 20px', lineHeight:1.2, letterSpacing:'0' }}>
              {FEATURED.title} {FEATURED.titleBold}
            </motion.h2>
            {[FEATURED.body1, FEATURED.body2].map((b,i)=>(
              <motion.p key={i} initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.08+i*0.08, duration:0.45 }}
                style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'11px', color:colors.dark, lineHeight:1.7, margin:i===0?'0 0 10px':'0 0 26px', maxWidth:'430px' }}>
                {b}
              </motion.p>
            ))}
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              {FEATURED.tags.map((t,i)=>(
                <motion.div key={t.title}
                  initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.2+i*0.1, duration:0.4 }}
                  whileHover={{ x:4 }}
                  style={{ background:colors.primaryLight, border:`1px solid ${colors.borderWarm}`, borderRadius:radius.sm, padding:'12px 16px', cursor:'pointer', maxWidth:'420px' }}>
                  <h4 style={{ fontFamily:fonts.display, fontWeight:fontWeights.bold, fontSize:'15px', color:colors.primary, margin:'0 0 4px' }}>{t.title}</h4>
                  <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'10px', color:colors.gray, margin:0, lineHeight:1.5 }}>{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity:0, scale:0.94 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.1 }}
            style={{ display:'flex', justifyContent:'center', flex:'0 1 auto' }}>
            <SunAndPhotos />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
