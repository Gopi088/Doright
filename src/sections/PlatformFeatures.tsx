import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { colors, fontWeights, fonts, radius } from '../styles/theme';
import { PLATFORM } from '../data/siteContent';

function PhoneMockup() {
  return (
    <div style={{
      width: 'min(210px, 100%)',
      background: '#111', borderRadius: '36px',
      padding: '12px 10px',
      boxShadow: '0 28px 72px rgba(0,0,0,0.45)',
      border: '2px solid #252525',
      flexShrink: 0,
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 10px 0', color:'#fff', fontSize:'10px', fontFamily:fonts.body }}>
        <span style={{ fontWeight:fontWeights.textBold }}>9:41</span>
        <span>●●● ▲</span>
      </div>
      <div style={{ width:'56px', height:'5px', background:'#222', borderRadius:'3px', margin:'5px auto 8px' }}/>
      <div style={{ background:'#1a1a1a', borderRadius:'24px', overflow:'hidden', minHeight:'340px' }}>
        <div style={{ background:'#1c1c1c', padding:'18px 14px 12px', borderBottom:'1px solid #282828' }}>
          <div style={{ fontFamily:fonts.display, fontSize:'22px', fontWeight:fontWeights.extrabold, color:'#fff', letterSpacing:'-0.5px' }}>Give</div>
          <div style={{ fontFamily:fonts.body, fontSize:'10px', color:colors.primary, marginTop:'2px', fontWeight:fontWeights.text }}>Make Your Change Possible</div>
          <div style={{ display:'flex', gap:'12px', marginTop:'10px' }}>
            {PLATFORM.phone.tabs.map(t => (
              <span key={t} style={{ fontFamily:fonts.body, fontSize:'10px', fontWeight:t==='Give'?fontWeights.textBold:fontWeights.text, color:t==='Give'?colors.primary:'#555', paddingBottom:'2px', borderBottom:t==='Give'?`1.5px solid ${colors.primary}`:'none' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ padding:'12px' }}>
          {[78,52,36,64].map((w,i)=>(
            <div key={i} style={{ background:'#242424', borderRadius:'10px', padding:'10px', marginBottom:'10px', display:'flex', gap:'10px', alignItems:'center' }}>
              <div style={{ width:'36px', height:'36px', background:colors.primary, borderRadius:'8px', flexShrink:0, opacity:0.72 }}/>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ height:'7px', width:'75%', background:'#333', borderRadius:'4px', marginBottom:'6px' }}/>
                <div style={{ height:'5px', width:`${w}%`, background:'#2e2e2e', borderRadius:'3px', marginBottom:'5px' }}/>
                <div style={{ height:'3px', background:'#2a2a2a', borderRadius:'2px' }}>
                  <div style={{ height:'3px', width:`${w}%`, background:colors.primary, borderRadius:'2px' }}/>
                </div>
              </div>
            </div>
          ))}
          <div style={{ background:colors.primary, borderRadius:'20px', padding:'9px 0', textAlign:'center', fontFamily:fonts.body, fontSize:'11px', fontWeight:fontWeights.textBold, color:'#fff' }}>
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
    <Section bg={colors.white} py="clamp(48px,7vw,80px)" ariaLabel="Platform Features">
      <Container>
        <div style={{ display:'flex', alignItems:'flex-start', gap:'clamp(28px,5vw,72px)', flexWrap:'wrap' }}>

          {/* Left */}
          <div style={{ flex:'1 1 min(300px,100%)', minWidth:0 }}>
            <motion.h2 initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}
              style={{ fontFamily:fonts.display, fontSize:'clamp(22px,3vw,36px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 28px', letterSpacing:'-0.5px' }}>
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
                      background: isActive ? colors.primaryLight : 'transparent',
                      border: 'none',
                      borderLeft: `3px solid ${isActive ? colors.primary : 'transparent'}`,
                      padding: '12px 16px',
                      textAlign: 'left', cursor:'pointer', borderRadius: `0 ${radius.md} ${radius.md} 0`,
                      transition:'all .18s', display:'block', width:'100%',
                    }}>
                    <span style={{
                      fontFamily: fonts.body,
                      fontSize: 'clamp(13px,1.3vw,14px)',
                      fontWeight: isActive ? fontWeights.textBold : fontWeights.text,
                      color: isActive ? colors.primary : colors.gray,
                      display:'flex', alignItems:'center', gap:'10px',
                    }}>
                      <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:isActive?colors.primary:'#d1d5db', display:'inline-block', flexShrink:0, transition:'all .18s' }}/>
                      {t.label}
                    </span>
                    <AnimatePresence>
                      {isActive && t.desc && (
                        <motion.p initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0, height:0 }}
                          style={{ fontFamily:fonts.body, fontSize:'13px', fontWeight:fontWeights.text, color:colors.gray, margin:'8px 0 4px 17px', lineHeight:1.65, overflow:'hidden' }}>
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
            style={{ display:'flex', justifyContent:'center', alignItems:'flex-start', flex:'0 0 auto', width:'min(220px, 100%)' }}>
            <PhoneMockup />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
