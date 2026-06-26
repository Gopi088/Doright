import { motion } from 'framer-motion';
import Grid from '../components/ui/Grid';
import { colors, fontWeights, fonts, shadows, radius } from '../styles/theme';
import { CERTIFICATION } from '../data/siteContent';

export default function GetCertified() {
  return (
    <section aria-label="Certification tiers" style={{
      background: colors.bgWarm,
      padding:'0 0 clamp(62px,8vw,104px)',
      position:'relative',
      overflow:'hidden',
      width:'100%',
    }}>
      <svg aria-hidden="true" style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0 }}
        viewBox="0 0 1200 760" preserveAspectRatio="none">
        <path d="M-120 30 C80 170 150 190 310 80 S560 -40 670 120 S930 250 1210 50" fill="none" stroke={colors.primaryLight} strokeWidth="98" strokeLinecap="round"/>
        <path d="M-160 470 C60 360 190 680 370 540 S600 260 800 430 S1010 760 1240 540" fill="none" stroke={colors.primaryLight} strokeWidth="96" strokeLinecap="round"/>
        <path d="M80 740 C220 520 370 700 500 560 S720 320 900 520 S1110 690 1300 450" fill="none" stroke={colors.white} strokeWidth="86" strokeLinecap="round"/>
      </svg>

      <div style={{ position:'relative', zIndex:1, maxWidth:'1040px', margin:'0 auto', padding:'0 clamp(16px,4vw,24px)' }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
          style={{ background:colors.primary, borderRadius:radius.xs, padding:'18px clamp(22px,4vw,52px)', textAlign:'center', margin:'0 auto clamp(48px,6vw,78px)', maxWidth:'620px', boxShadow:shadows.primaryLg }}>
          <h2 style={{ fontFamily:fonts.display, fontSize:'clamp(22px,2.8vw,32px)', fontWeight:fontWeights.extrabold, color:colors.white, margin:'0 0 6px', letterSpacing:'0' }}>
            {CERTIFICATION.banner.title}
          </h2>
          <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'10.5px', color:colors.white, lineHeight:1.55, margin:'0 auto', maxWidth:'500px' }}>
            {CERTIFICATION.banner.body}
          </p>
        </motion.div>

        <Grid minColWidth="210px" gap="clamp(24px,5vw,72px)" style={{ alignItems:'stretch' }}>
          {CERTIFICATION.tiers.map((tier, i) => (
            <motion.article key={tier.title}
              className="ngo-cert-card"
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.12, duration:0.5 }}
              whileHover={{ y:-6, boxShadow: tier.featured ? shadows.primaryXl : shadows.hover }}
              style={{
                width: '100%', maxWidth:'240px', minHeight:'335px', margin:'0 auto',
                background:colors.white, borderRadius:radius.xs, overflow:'hidden',
                boxShadow: `0 7px 0 ${colors.darkTrue}, ${shadows.card}`,
                border: `1px solid ${colors.border}`,
                display:'flex', flexDirection:'column',
              }}>
              <div style={{ padding:'32px 28px 0', flexShrink:0 }}>
                <div style={{ height:'112px', background:colors.placeholder, borderRadius:radius.xs }} />
              </div>
              <div style={{ padding:'28px 28px 30px', flex:1, display:'flex', flexDirection:'column' }}>
                <h3 style={{ fontFamily:fonts.display, fontWeight:fontWeights.bold, fontSize:'12px', color:colors.darkTrue, margin:'0 0 10px' }}>{tier.title}</h3>
                <ul aria-label={`${tier.title} features`} style={{ padding:0, margin:0, display:'flex', flexDirection:'column', gap:'4px' }}>
                  {tier.items.map(item => (
                    <li key={item} style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'9.5px', color:colors.dark, lineHeight:1.45 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </Grid>
      </div>
    </section>
  );
}
