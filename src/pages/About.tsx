import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DoRightLogo from '../components/DoRightLogo';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { colors, fontWeights, shadows, radius } from '../styles/theme'; import { fonts } from '../styles/theme';
import { ABOUT } from '../data/siteContent';

const fadeUp = (delay=0) => ({ initial:{opacity:0,y:20}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.5,delay} });

export default function About() {
  return (
    <div style={{ fontFamily:fonts.body, background:colors.white }}>
      <Navbar />

      {/* Hero */}
      <section aria-label="About hero" style={{ background:colors.bgWarm, padding:'72px 0 64px', textAlign:'center' }}>
        <Container size="md">
          <motion.div {...fadeUp()}>
            <span style={{ display:'inline-block', background:colors.primaryLight, color:colors.primary, fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'5px 14px', marginBottom:'16px', letterSpacing:'0.05em', textTransform:'uppercase' as const, border:`1px solid ${colors.primaryBorder}` }}>
              {ABOUT.hero.badge}
            </span>
            <h1 style={{ fontSize:'clamp(26px,4.5vw,50px)', fontWeight:fontWeights.extrabold, fontFamily:fonts.display, color:colors.dark, margin:'0 0 18px', lineHeight:1.15, letterSpacing:'-1px' }}>
              {ABOUT.hero.title}<br/>
              <span style={{ color:colors.primary }}>{ABOUT.hero.titleHighlight}</span>
            </h1>
            <p style={{ fontSize:'15px', color:colors.gray, lineHeight:1.75, maxWidth:'580px', margin:'0 auto' }}>{ABOUT.hero.body}</p>
          </motion.div>
        </Container>
      </section>

      {/* Stats strip */}
      <section style={{ background:colors.white, borderTop:`1px solid ${colors.border}`, borderBottom:`1px solid ${colors.border}`, padding:'40px 0' }}>
        <Container>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:'24px', textAlign:'center' }}>
            {ABOUT.stats.map((s,i) => (
              <motion.div key={s.label} {...fadeUp(i*0.1)}>
                <div style={{ fontSize:'clamp(24px,3vw,38px)', fontWeight:fontWeights.extrabold, color:colors.primary, letterSpacing:'-1px', fontFamily:fonts.display }}>{s.value}</div>
                <div style={{ fontSize:'13px', color:colors.gray, marginTop:'4px', fontWeight:fontWeights.text }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Section bg={colors.white} py="80px">
        <Container>
          <div style={{ display:'flex', alignItems:'center', gap:'clamp(28px,5vw,64px)', flexWrap:'wrap' }}>
            <div style={{ flex:'1 1 340px', minWidth:0 }}>
              <motion.h2 {...fadeUp()} style={{ fontSize:'clamp(22px,3vw,34px)', fontWeight:fontWeights.extrabold, color:colors.dark, fontFamily:fonts.display, margin:'0 0 20px', letterSpacing:'-0.5px' }}>
                {ABOUT.mission.title}
              </motion.h2>
              {[ABOUT.mission.body1, ABOUT.mission.body2].map((b,i) => (
                <motion.p key={i} {...fadeUp(0.1+i*0.08)} style={{ fontSize:'14.5px', color:colors.gray, lineHeight:1.78, margin:`0 0 14px` }}>{b}</motion.p>
              ))}
              <motion.div {...fadeUp(0.26)} style={{ marginTop:'28px' }}>
                <Button href={ABOUT.mission.cta.href} variant="primary" size="lg">{ABOUT.mission.cta.label}</Button>
              </motion.div>
            </div>
            <motion.div {...fadeUp(0.12)} style={{ flex:'0 0 auto' }}>
              <div style={{ width:'220px', height:'220px', background:colors.bgWarm, borderRadius:radius['2xl'], display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'10px', border:`2px solid ${colors.borderWarm}` }}>
                <DoRightLogo size={68} />
                <div style={{ fontSize:'18px', fontWeight:fontWeights.extrabold, fontFamily:fonts.display }}>
                  <span style={{ color:colors.primary }}>do</span><span style={{ color:colors.dark }}>right</span>
                </div>
                <span style={{ fontSize:'10px', fontWeight:fontWeights.bold, color:colors.primary, letterSpacing:'0.1em', textTransform:'uppercase' as const, background:colors.primaryLight, borderRadius:radius.full, padding:'3px 10px' }}>ACT FOR IMPACT</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section bg={colors.bgWarm} py="72px">
        <Container>
          <motion.h2 {...fadeUp()} style={{ fontSize:'clamp(22px,3vw,34px)', fontWeight:fontWeights.extrabold, color:colors.dark, fontFamily:fonts.display, margin:'0 0 40px', letterSpacing:'-0.5px' }}>
            Our Values
          </motion.h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'22px' }}>
            {ABOUT.values.map((v,i) => (
              <motion.div key={v.title} {...fadeUp(i*0.1)}
                whileHover={{ y:-5, boxShadow:shadows.hover }}
                style={{ background:colors.white, borderRadius:radius.xl, padding:'28px 24px', boxShadow:shadows.card, border:`1px solid ${colors.border}` }}>
                <span style={{ fontSize:'30px', display:'block', marginBottom:'14px' }}>{v.icon}</span>
                <h3 style={{ fontSize:'15px', fontWeight:fontWeights.bold, color:colors.dark, margin:'0 0 10px' }}>{v.title}</h3>
                <p style={{ fontSize:'13.5px', color:colors.gray, lineHeight:1.65, margin:0 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section bg={colors.white} py="72px">
        <Container>
          <motion.h2 {...fadeUp()} style={{ fontSize:'clamp(22px,3vw,34px)', fontWeight:fontWeights.extrabold, color:colors.dark, fontFamily:fonts.display, margin:'0 0 40px', letterSpacing:'-0.5px' }}>
            Our Team
          </motion.h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'22px' }}>
            {ABOUT.team.map((m,i) => (
              <motion.div key={m.name} {...fadeUp(i*0.1)}
                whileHover={{ y:-5, boxShadow:shadows.hover }}
                style={{ background:colors.bgWarm, borderRadius:radius.xl, padding:'32px 24px', textAlign:'center', border:`1px solid ${colors.borderWarm}` }}>
                <div style={{ width:'72px', height:'72px', borderRadius:'50%', background:colors.primary, color:'#fff', fontSize:'22px', fontWeight:fontWeights.extrabold, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', boxShadow:shadows.primary }}>
                  {m.initials}
                </div>
                <h4 style={{ fontSize:'15px', fontWeight:fontWeights.bold, color:colors.dark, margin:'0 0 6px' }}>{m.name}</h4>
                <p style={{ fontSize:'13px', color:colors.gray, margin:0 }}>{m.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section style={{ background:colors.primary, padding:'64px 0', textAlign:'center' }}>
        <Container size="sm">
          <motion.div {...fadeUp()}>
            <h2 style={{ fontSize:'clamp(20px,3vw,32px)', fontWeight:fontWeights.extrabold, color:'#fff', margin:'0 0 14px', fontFamily:fonts.display, letterSpacing:'-0.5px' }}>
              Ready to Partner with Us?
            </h2>
            <p style={{ fontSize:'15px', color:'rgba(255,255,255,0.88)', margin:'0 0 28px', lineHeight:1.7 }}>
              Join hundreds of NGOs building trust and growing their impact with Doright.
            </p>
            <Button href="/ngos" variant="white" size="lg">Get Started Free →</Button>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
