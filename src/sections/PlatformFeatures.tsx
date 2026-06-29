import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, fonts, radius, shadows } from '../styles/theme';
import { PLATFORM } from '../data/siteContent';

function PhoneMockup() {
  return (
    <div style={{
      width: 'min(230px, 100%)',
      aspectRatio: '9 / 18',
      background: 'linear-gradient(145deg,#2c2c2c,#060606 52%,#323232)',
      borderRadius: '38px',
      padding: '7px',
      boxShadow: '0 30px 72px rgba(0,0,0,.32), inset 0 0 0 1px rgba(255,255,255,.12)',
      border: '2px solid #3a3a3a',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      <span aria-hidden="true" style={{
        position:'absolute',
        left:'-5px',
        top:'70px',
        width:'3px',
        height:'34px',
        borderRadius:'4px 0 0 4px',
        background:'#222',
        boxShadow:'0 60px 0 #222, 0 96px 0 #222',
      }} />
      <span aria-hidden="true" style={{
        position:'absolute',
        right:'-5px',
        top:'112px',
        width:'3px',
        height:'58px',
        borderRadius:'0 4px 4px 0',
        background:'#222',
      }} />
      <div style={{
        flex:1,
        borderRadius:'31px',
        background:'linear-gradient(145deg,#1b1b1b,#090909 62%,#151515)',
        border:'1px solid rgba(255,255,255,.08)',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        position:'relative',
      }}>
        <div style={{
          height:'36px',
          flexShrink:0,
          position:'relative',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }}>
          <span style={{
            width:'58px',
            height:'10px',
            borderRadius:'999px',
            background:'#050505',
          }} />
        </div>
        <div style={{ padding:'10px 14px 0' }}>
          <div style={{ color:colors.white, fontSize:'8px', fontFamily:fonts.body, opacity:0.75, marginBottom:'12px' }}>
            Donate your heart
          </div>
          <div style={{ fontFamily:fonts.display, fontSize:'24px', fontWeight:fontWeights.extrabold, color:colors.white, letterSpacing:'0', lineHeight:1 }}>Give</div>
          <div style={{ fontFamily:fonts.body, fontSize:'9px', color:colors.primary, marginTop:'7px', fontWeight:fontWeights.text }}>Make Your Change Possible</div>
          <div style={{ display:'flex', gap:'10px', marginTop:'12px' }}>
            {PLATFORM.phone.tabs.map(t => (
              <span key={t} style={{
                fontFamily:fonts.body,
                fontSize:'7px',
                fontWeight:t==='Give'?fontWeights.textBold:fontWeights.text,
                color:t==='Give'?colors.primary:'rgba(255,255,255,.34)',
                paddingBottom:'3px',
                borderBottom:t==='Give'?`1px solid ${colors.primary}`:'none',
              }}>{t}</span>
            ))}
          </div>
        </div>
        <span aria-hidden="true" style={{
          position:'absolute',
          left:'50%',
          bottom:'9px',
          transform:'translateX(-50%)',
          width:'74px',
          height:'4px',
          borderRadius:'999px',
          background:'rgba(255,255,255,.84)',
        }} />
      </div>
    </div>
  );
}

export default function PlatformFeatures() {
  const [active, setActive] = useState('donation');

  return (
    <Section bg={colors.white} py="clamp(50px,7vw,88px)" ariaLabel="Platform Features">
      <Container style={{ maxWidth: '1040px' }}>
        <div className="ngo-platform-layout" style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'clamp(36px,8vw,150px)', flexWrap:'wrap' }}>

          {/* Left */}
          <div className="ngo-platform-copy" style={{ flex:'1 1 min(390px,100%)', minWidth:0, maxWidth:'520px' }}>
            <motion.h2 initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
              style={{ fontFamily:fonts.display, fontSize:'clamp(25px,3vw,34px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 28px', letterSpacing:'0' }}>
              {PLATFORM.title}
            </motion.h2>

            <div role="tablist" aria-label="Platform features" style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
              {PLATFORM.tabs.map((t,i) => {
                const isActive = active === t.id;
                return (
                  <motion.button key={t.id} role="tab" aria-selected={isActive} id={`tab-${t.id}`}
                    initial={{ opacity:0, x:-12 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                    onClick={() => setActive(t.id)}
                    style={{
                      background: isActive ? colors.white : 'transparent',
                      border: 'none',
                      borderBottom: isActive ? `2px solid ${colors.primary}` : 'none',
                      minHeight: isActive ? '78px' : '42px',
                      padding: isActive ? '15px 20px' : '8px 8px',
                      display:'flex', flexDirection:'column', justifyContent:'center',
                      textAlign: 'left', cursor:'pointer', borderRadius: isActive ? radius.sm : 0,
                      transition:'all .18s', width:'100%',
                      boxShadow: isActive ? shadows.md : 'none',
                    }}>
                    <span style={{
                      fontFamily: fonts.body,
                      fontSize: '12px',
                      fontWeight: isActive ? fontWeights.textBold : fontWeights.text,
                      color: isActive ? colors.dark : colors.gray,
                      display:'flex', alignItems:'center', gap:'10px',
                    }}>
                      <span style={{ width:'15px', fontSize:'10px', color:colors.primary, display:'inline-block', flexShrink:0, transition:'all .18s' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {t.label}
                    </span>
                    <AnimatePresence>
                      {isActive && t.desc && (
                        <motion.p initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}
                          style={{ fontFamily:fonts.body, fontSize:'11px', fontWeight:fontWeights.text, color:colors.gray, margin:'8px 0 0 25px', lineHeight:1.65, overflow:'hidden' }}>
                          {t.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right: phone */}
          <motion.div className="ngo-phone-wrap" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.15 }}
            style={{ display:'flex', justifyContent:'center', alignItems:'flex-start', flex:'0 0 auto', width:'min(230px, 100%)', marginRight:'clamp(0px,5vw,58px)' }}>
            <PhoneMockup />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
