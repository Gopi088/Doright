import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Grid from '../components/ui/Grid';
import { colors, fontWeights, fonts, shadows, radius } from '../styles/theme';
import { CERTIFICATION } from '../data/siteContent';

export default function GetCertified() {
  return (
    <section aria-label="Certification tiers" style={{ background:colors.bgWarm, padding:'0 0 clamp(48px,7vw,80px)', position:'relative', overflow:'hidden', width:'100%' }}>

      {/* Decorative blobs — contained within section */}
      <svg aria-hidden="true" style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0, overflow:'hidden' }}
        viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="150" cy="100" rx="320" ry="200" fill="rgba(255,175,95,0.12)" transform="rotate(-20 150 100)"/>
        <ellipse cx="1050" cy="560" rx="360" ry="220" fill="rgba(255,175,95,0.10)" transform="rotate(15 1050 560)"/>
        <ellipse cx="600" cy="360" rx="280" ry="160" fill="rgba(255,175,95,0.08)" transform="rotate(-10 600 360)"/>
        <ellipse cx="100" cy="520" rx="250" ry="140" fill="rgba(255,175,95,0.09)" transform="rotate(30 100 520)"/>
      </svg>

      {/* Orange banner */}
      <div style={{ position:'relative', zIndex:1, maxWidth:'1180px', margin:'0 auto', padding:'0 clamp(16px,4vw,24px)' }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
          style={{ background:colors.primary, borderRadius:radius.xl, padding:'clamp(24px,4vw,44px) clamp(20px,4vw,48px)', textAlign:'center', marginBottom:'clamp(32px,5vw,52px)', boxShadow:shadows.primaryLg }}>
          <h2 style={{ fontFamily:fonts.display, fontSize:'clamp(20px,3vw,34px)', fontWeight:fontWeights.extrabold, color:'#fff', margin:'0 0 12px', letterSpacing:'-0.5px' }}>
            {CERTIFICATION.banner.title}
          </h2>
          <p style={{ fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'clamp(13px,1.4vw,15px)', color:'rgba(255,255,255,0.88)', lineHeight:1.72, margin:'0 auto', maxWidth:'560px' }}>
            {CERTIFICATION.banner.body}
          </p>
        </motion.div>
      </div>

      {/* Certification cards */}
      <Container style={{ position:'relative', zIndex:1 }}>
        <Grid minColWidth="260px" gap="clamp(14px,2vw,24px)">
          {CERTIFICATION.tiers.map((tier, i) => (
            <motion.article key={tier.title}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.12, duration:0.5 }}
              whileHover={{ y:-6, boxShadow: tier.featured ? `0 16px 48px rgba(255,175,95,0.28)` : shadows.hover }}
              style={{
                background:colors.white, borderRadius:radius.xl, overflow:'hidden',
                boxShadow: tier.featured ? `0 8px 32px rgba(255,175,95,0.2)` : shadows.card,
                border: tier.featured ? `2px solid ${colors.primary}` : `2px solid ${colors.border}`,
                display:'flex', flexDirection:'column',
              }}>
              <div style={{ height:'120px', background:colors.bg, borderRadius:`${radius.xl} ${radius.xl} 0 0`, position:'relative', flexShrink:0 }}>
                {tier.featured && (
                  <div style={{ position:'absolute', top:'12px', right:'12px', background:colors.primary, color:'#fff', fontFamily:fonts.body, fontWeight:fontWeights.textBold, fontSize:'11px', borderRadius:radius.full, padding:'4px 12px' }}>
                    Most Popular
                  </div>
                )}
              </div>
              <div style={{ padding:'18px 20px 24px', flex:1, display:'flex', flexDirection:'column' }}>
                <h3 style={{ fontFamily:fonts.display, fontWeight:fontWeights.bold, fontSize:'15px', color:colors.dark, margin:'0 0 14px' }}>{tier.title}</h3>
                <ul aria-label={`${tier.title} features`} style={{ padding:0, margin:0, display:'flex', flexDirection:'column', gap:'8px' }}>
                  {tier.items.map(item => (
                    <li key={item} style={{ display:'flex', gap:'9px', fontFamily:fonts.body, fontWeight:fontWeights.text, fontSize:'12.5px', color:colors.gray, lineHeight:1.5 }}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink:0, marginTop:'1px' }} aria-hidden="true">
                        <circle cx="7.5" cy="7.5" r="7" stroke={colors.primary} strokeWidth="1.2"/>
                        <path d="M5 7.5l1.8 1.8L10.5 5.5" stroke={colors.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
