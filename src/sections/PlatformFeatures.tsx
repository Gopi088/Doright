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
      minHeight: '430px',
      background: colors.darkTrue, borderRadius: '28px',
      padding: '16px 13px',
      boxShadow: shadows.xl,
      border: `2px solid ${colors.darkDeep}`,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ width:'54px', height:'6px', background:colors.darkDeep, borderRadius:'8px', margin:'0 auto 28px' }}/>
      <div style={{ color:colors.white, fontSize:'9px', fontFamily:fonts.body, opacity:0.75, marginBottom:'14px' }}>
        Donate your heart
      </div>
      <div style={{ fontFamily:fonts.display, fontSize:'26px', fontWeight:fontWeights.extrabold, color:colors.white, letterSpacing:'0', lineHeight:1 }}>Give</div>
      <div style={{ fontFamily:fonts.body, fontSize:'10px', color:colors.primary, marginTop:'7px', fontWeight:fontWeights.text }}>Make Your Change Possible</div>
      <div style={{ display:'none', justifyContent:'space-between', padding:'8px 12px 0', color:colors.white, fontSize:'12px', fontFamily:fonts.body }}>
        <span style={{ fontWeight:fontWeights.textBold }}>9:41</span>
        <span>●●● ▲</span>
      </div>
      <div style={{ background:colors.darkTrue, borderRadius:'24px', overflow:'hidden', flex:1, display:'none', flexDirection:'column' }}>
        <div style={{ background:colors.darkTrue, padding:'22px 18px 14px', borderBottom:`1px solid ${colors.darkDeep}` }}>
          <div style={{ fontFamily:fonts.display, fontSize:'26px', fontWeight:fontWeights.extrabold, color:colors.white, letterSpacing:'0' }}>Give</div>
          <div style={{ fontFamily:fonts.body, fontSize:'11px', color:colors.primary, marginTop:'3px', fontWeight:fontWeights.text }}>Make Your Change Possible</div>
          <div style={{ display:'flex', gap:'14px', marginTop:'12px' }}>
            {PLATFORM.phone.tabs.map(t => (
              <span key={t} style={{ fontFamily:fonts.body, fontSize:'11px', fontWeight:t==='Give'?fontWeights.textBold:fontWeights.text, color:t==='Give'?colors.primary:colors.dark, paddingBottom:'3px', borderBottom:t==='Give'?`1.5px solid ${colors.primary}`:'none' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ padding:'16px', flex:1 }}>
          {[78,52,36,64].map((w,i)=>(
            <div key={i} style={{ background:colors.darkDeep, borderRadius:'12px', padding:'12px', marginBottom:'12px', display:'flex', gap:'12px', alignItems:'center' }}>
              <div style={{ width:'42px', height:'42px', background:colors.primary, borderRadius:'9px', flexShrink:0, opacity:0.72 }}/>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ height:'8px', width:'75%', background:colors.dark, borderRadius:'4px', marginBottom:'7px' }}/>
                <div style={{ height:'6px', width:`${w}%`, background:colors.dark, borderRadius:'3px', marginBottom:'6px' }}/>
                <div style={{ height:'3px', background:colors.dark, borderRadius:'2px' }}>
                  <div style={{ height:'3px', width:`${w}%`, background:colors.primary, borderRadius:'2px' }}/>
                </div>
              </div>
            </div>
          ))}
          <div style={{ background:colors.primary, borderRadius:'22px', padding:'12px 0', textAlign:'center', fontFamily:fonts.body, fontSize:'13px', fontWeight:fontWeights.textBold, color:colors.white }}>
            Donate Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlatformFeatures() {
  const [active, setActive] = useState('donation');

  return (
    <Section bg={colors.white} py="clamp(50px,7vw,88px)" ariaLabel="Platform Features">
      <Container style={{ maxWidth: '1040px' }}>
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'clamp(36px,8vw,150px)', flexWrap:'wrap' }}>

          {/* Left */}
          <div style={{ flex:'1 1 min(390px,100%)', minWidth:0, maxWidth:'520px' }}>
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
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.15 }}
            style={{ display:'flex', justifyContent:'center', alignItems:'flex-start', flex:'0 0 auto', width:'min(230px, 100%)', marginRight:'clamp(0px,5vw,58px)' }}>
            <PhoneMockup />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
