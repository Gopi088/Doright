import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, shadows, radius } from '../styles/theme';
import { FEATURED } from '../data/siteContent';

function SunAndPhotos() {
  return (
    <div style={{ position:'relative', width:'280px', height:'260px', flexShrink:0 }}>
      <svg aria-hidden="true" style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} width="240" height="240" viewBox="0 0 240 240">
        <g transform="translate(120,120)">
          {Array.from({length:16},(_,i)=>{
            const a=(i*22.5*Math.PI)/180;
            const r1=i%2===0?56:60; const r2=i%2===0?92:82;
            return <line key={i} x1={Math.cos(a)*r1} y1={Math.sin(a)*r1} x2={Math.cos(a)*r2} y2={Math.sin(a)*r2}
              stroke={colors.primary} strokeWidth={i%2===0?2.5:1.5} strokeLinecap="round" opacity="0.55"/>;
          })}
          <circle r="46" fill="rgba(255,175,95,0.08)"/>
          <circle r="28" fill="rgba(255,175,95,0.1)"/>
        </g>
      </svg>
      {[
        { top:26, left:118, rotate:-8, z:3 },
        { top:78, left:150, rotate:6,  z:2 },
        { top:130,left:108, rotate:-4, z:1 },
      ].map((pos,i)=>(
        <motion.div key={i}
          initial={{ opacity:0, rotate:pos.rotate-5 }}
          whileInView={{ opacity:1, rotate:pos.rotate }}
          viewport={{ once:true }}
          transition={{ delay:0.2+i*0.12, duration:0.5 }}
          style={{ position:'absolute', top:pos.top, left:pos.left, width:'88px', height:'68px', background:'#374151', borderRadius:radius.md, border:'3px solid white', boxShadow:shadows.lg, zIndex:pos.z }}
        />
      ))}
    </div>
  );
}

export default function GetFeatured() {
  return (
    <Section bg={colors.white} py="80px">
      <Container>
        <div style={{ display:'flex', alignItems:'center', gap:'clamp(28px,4vw,64px)', flexWrap:'wrap' }}>

          {/* Left */}
          <div style={{ flex:'1 1 320px', minWidth:0 }}>
            <motion.h2 initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
              style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:fontWeights.extrabold, color:colors.dark, fontFamily:"'Plus Jakarta Sans','Inter',sans-serif", margin:'0 0 18px', lineHeight:1.2, letterSpacing:'-0.5px' }}>
              {FEATURED.title} <span style={{ color:colors.primary }}>{FEATURED.titleBold}</span>
            </motion.h2>
            <motion.p initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1, duration:0.45 }}
              style={{ fontSize:'14px', color:colors.gray, lineHeight:1.75, margin:'0 0 12px', maxWidth:'480px' }}>
              {FEATURED.body1}
            </motion.p>
            <motion.p initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.18, duration:0.45 }}
              style={{ fontSize:'14px', color:colors.gray, lineHeight:1.75, margin:'0 0 28px', maxWidth:'480px' }}>
              {FEATURED.body2}
            </motion.p>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {FEATURED.tags.map((t,i)=>(
                <motion.div key={t.title}
                  initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.25+i*0.1, duration:0.4 }}
                  whileHover={{ x:4 }}
                  style={{ background:colors.primaryLight, border:`1px solid ${colors.primaryBorder}`, borderRadius:radius.md, padding:'14px 18px', cursor:'pointer' }}>
                  <h4 style={{ fontSize:'14px', fontWeight:fontWeights.bold, color:colors.primary, margin:'0 0 4px' }}>{t.title}</h4>
                  <p style={{ fontSize:'12.5px', color:colors.gray, margin:0, lineHeight:1.5 }}>{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right */}
          <motion.div initial={{ opacity:0, scale:0.94 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.1 }}>
            <SunAndPhotos />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
