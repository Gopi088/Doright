import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, fonts, shadows, radius } from '../styles/theme';
import { FEATURED } from '../data/siteContent';

function SunAndPhotos() {
  return (
    <div style={{ position:'relative', width:'min(280px,100%)', height:'260px', flexShrink:0, overflow:'visible' }}>
      <svg aria-hidden="true" style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', overflow:'visible' }} width="240" height="240" viewBox="0 0 240 240">
        <g transform="translate(120,120)">
          {Array.from({length:16},(_,i)=>{
            const a=(i*22.5*Math.PI)/180;
            const r1=i%2===0?56:60; const r2=i%2===0?90:80;
            return <line key={i} x1={Math.cos(a)*r1} y1={Math.sin(a)*r1} x2={Math.cos(a)*r2} y2={Math.sin(a)*r2}
              stroke={colors.primary} strokeWidth={i%2===0?2.5:1.5} strokeLinecap="round" opacity="0.5"/>;
          })}
          <circle r="44" fill="rgba(255,175,95,0.08)"/>
        </g>
      </svg>
      {[{top:22,left:110,rotate:-8,z:3},{top:74,left:144,rotate:6,z:2},{top:124,left:102,rotate:-4,z:1}].map((pos,i)=>(
        <motion.div key={i}
          initial={{ opacity:0, rotate:pos.rotate-5 }}
          whileInView={{ opacity:1, rotate:pos.rotate }}
          viewport={{ once:true }}
          transition={{ delay:0.2+i*0.12, duration:0.5 }}
          style={{ position:'absolute', top:pos.top, left:pos.left, width:'84px', height:'64px', background:'#374151', borderRadius:radius.md, border:'3px solid white', boxShadow:shadows.lg, zIndex:pos.z }}
        />
      ))}
    </div>
  );
}

export default function GetFeatured() {
  return (
    <Section bg={colors.white} py="clamp(48px,7vw,88px)" ariaLabel="Get Your NGO Featured">
      <Container>
        <div style={{ display:'flex', alignItems:'center', gap:'clamp(24px,4vw,64px)', flexWrap:'wrap' }}>

          <div style={{ flex:'1 1 min(300px,100%)', minWidth:0 }}>
            <motion.h2 initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
              style={{ fontFamily:fonts.display, fontSize:'clamp(22px,3vw,36px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 18px', lineHeight:1.2, letterSpacing:'-0.5px' }}>
              {FEATURED.title} <span style={{ color:colors.primary }}>{FEATURED.titleBold}</span>
            </motion.h2>
            {[FEATURED.body1, FEATURED.body2].map((b,i)=>(
              <motion.p key={i} initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.08+i*0.08, duration:0.45 }}
                style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'clamp(13px,1.3vw,14.5px)', color:colors.gray, lineHeight:1.75, margin:i===0?'0 0 12px':'0 0 28px', maxWidth:'480px' }}>
                {b}
              </motion.p>
            ))}
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              {FEATURED.tags.map((t,i)=>(
                <motion.div key={t.title}
                  initial={{ opacity:0, x:-14 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.2+i*0.1, duration:0.4 }}
                  whileHover={{ x:4 }}
                  style={{ background:colors.primaryLight, border:`1px solid ${colors.primaryBorder}`, borderRadius:radius.md, padding:'12px 16px', cursor:'pointer' }}>
                  <h4 style={{ fontFamily:fonts.display, fontWeight:fontWeights.bold, fontSize:'13.5px', color:colors.primary, margin:'0 0 3px' }}>{t.title}</h4>
                  <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'12px', color:colors.gray, margin:0, lineHeight:1.5 }}>{t.desc}</p>
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
