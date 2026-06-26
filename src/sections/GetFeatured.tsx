import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, fonts, radius } from '../styles/theme';
import { FEATURED } from '../data/siteContent';
import featuredArtwork from '../assets/board3.svg';

function SunAndPhotos() {
  return (
    <motion.div
      initial={{ opacity:0, scale:0.94 }}
      whileInView={{ opacity:1, scale:1 }}
      viewport={{ once:true }}
      transition={{ duration:0.55, delay:0.1 }}
      className="ngo-featured-artwork"
      style={{ width:'min(330px,100%)', flexShrink:0 }}
    >
      <img
        src={featuredArtwork}
        alt=""
        aria-hidden="true"
        style={{ width:'100%', height:'auto', display:'block' }}
      />
    </motion.div>
  );
}

export default function GetFeatured() {
  return (
    <Section bg={colors.white} py="clamp(62px,8vw,118px)" ariaLabel="Get Your NGO Featured">
      <Container style={{ maxWidth: '1040px' }}>
        <div className="ngo-featured-layout" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'clamp(42px,8vw,128px)', flexWrap:'wrap' }}>

          <div className="ngo-featured-copy" style={{ flex:'1 1 min(360px,100%)', minWidth:0, maxWidth:'500px' }}>
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

          <motion.div
            initial={{ opacity:0, scale:0.94 }}
            whileInView={{ opacity:1, scale:1 }}
            viewport={{ once:true }}
            transition={{ duration:0.55, delay:0.1 }}
            style={{ display:'flex', justifyContent:'center', flex:'0 1 auto' }}
          >
            <SunAndPhotos />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
