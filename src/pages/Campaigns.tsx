import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { colors, fontWeights, shadows, radius } from '../styles/theme'; import { fonts } from '../styles/theme';
import { campaigns } from '../data/index';

const cats = ['All','Education','Environment','Healthcare','Gender Equality','Water','Food'];
const catColors: Record<string,string> = { Education:'#3b82f6', Environment:'#16a34a', Healthcare:'#dc2626', 'Gender Equality':'#9333ea', Water:'#0891b2', Food:'#d97706' };

function ProgressBar({ value, goal }: { value:number; goal:number }) {
  const pct = Math.min(100, Math.round((value/goal)*100));
  return (
    <div>
      <div style={{ height:'6px', background:colors.bg, borderRadius:'3px', overflow:'hidden' }}>
        <motion.div initial={{ width:0 }} whileInView={{ width:`${pct}%` }} viewport={{ once:true }} transition={{ duration:0.8, ease:'easeOut' }}
          style={{ height:'100%', background:colors.primary, borderRadius:'3px' }}/>
      </div>
      <div style={{ fontSize:'11.5px', color:colors.primary, fontWeight:fontWeights.bold, marginTop:'4px', textAlign:'right' as const }}>{pct}% funded</div>
    </div>
  );
}

export default function Campaigns() {
  const [active, setActive] = useState('All');
  const filtered = active==='All' ? campaigns : campaigns.filter(c=>c.category===active);

  return (
    <div style={{ fontFamily:fonts.body, background:colors.white }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background:colors.bgWarm, padding:'72px 0 56px', textAlign:'center' }}>
        <Container size="md">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }}>
            <span style={{ display:'inline-block', background:colors.primaryLight, color:colors.primary, fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'5px 14px', marginBottom:'16px', letterSpacing:'0.05em', textTransform:'uppercase' as const, border:`1px solid ${colors.primaryBorder}` }}>
              Active Campaigns
            </span>
            <h1 style={{ fontSize:'clamp(24px,4vw,46px)', fontWeight:fontWeights.extrabold, fontFamily:fonts.display, color:colors.dark, margin:'0 0 16px', letterSpacing:'-1px', lineHeight:1.15 }}>
              Support a Campaign Today
            </h1>
            <p style={{ fontSize:'14.5px', color:colors.gray, lineHeight:1.75, maxWidth:'520px', margin:'0 auto' }}>
              Every rupee donated through Doright goes directly to verified NGOs doing real work on the ground across India.
            </p>
          </motion.div>
        </Container>
      </section>

      <section style={{ padding:'48px 0 80px' }}>
        <Container>
          {/* Filters */}
          <div role="group" aria-label="Filter campaigns" style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'40px' }}>
            {cats.map(c=>(
              <motion.button key={c} whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }} onClick={()=>setActive(c)}
                style={{ background:active===c?colors.primary:colors.bg, color:active===c?colors.white:colors.grayMid, border:'none', borderRadius:radius.full, padding:'8px 18px', fontSize:'13px', fontWeight:active===c?fontWeights.bold:fontWeights.text, cursor:'pointer', transition:'all .15s' }}>
                {c}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'24px' }}>
            {filtered.map((c,i)=>(
              <motion.article key={c.id} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i%3*0.08, duration:0.45 }}
                whileHover={{ y:-4, boxShadow:shadows.hover }}
                style={{ border:`1.5px solid ${colors.borderWarm}`, borderRadius:radius.xl, overflow:'hidden', background:colors.white, display:'flex', flexDirection:'column', boxShadow:shadows.card }}>
                {/* Image */}
                <div style={{ height:'160px', background:`linear-gradient(135deg,${colors.primaryLight},${colors.primaryBorder})`, position:'relative' }}>
                  <span style={{ position:'absolute', bottom:'12px', left:'14px', background:catColors[c.category]||colors.primary, color:'#fff', fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'3px 10px' }}>{c.category}</span>
                  <span style={{ position:'absolute', top:'12px', right:'12px', background:colors.white, color:c.daysLeft<=7?'#dc2626':colors.gray, fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'4px 10px', boxShadow:shadows.sm }}>
                    {c.daysLeft}d left
                  </span>
                </div>
                {/* Body */}
                <div style={{ padding:'18px 20px', flex:1, display:'flex', flexDirection:'column' }}>
                  <h2 style={{ fontSize:'14.5px', fontWeight:fontWeights.bold, color:colors.dark, margin:'0 0 5px', lineHeight:1.4 }}>{c.title}</h2>
                  <p style={{ fontSize:'12.5px', color:colors.grayLight, margin:'0 0 16px' }}>by {c.ngo}</p>
                  <ProgressBar value={c.raised} goal={c.goal}/>
                  <div style={{ display:'flex', justifyContent:'space-between', margin:'12px 0 16px' }}>
                    {[{v:`₹${(c.raised/100000).toFixed(1)}L`,l:'Raised'},{v:`₹${(c.goal/100000).toFixed(1)}L`,l:'Goal'},{v:`${c.daysLeft}d`,l:'Left'}].map(s=>(
                      <div key={s.l} style={{ textAlign:'center' as const }}>
                        <div style={{ fontSize:'14.5px', fontWeight:fontWeights.extrabold, color:colors.dark }}>{s.v}</div>
                        <div style={{ fontSize:'11px', color:colors.grayLight, marginTop:'2px' }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <Button variant="primary" size="md" fullWidth style={{ marginTop:'auto' }}>Donate Now</Button>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact strip */}
      <section style={{ background:colors.bgWarm, padding:'52px 0', borderTop:`1px solid ${colors.borderWarm}` }}>
        <Container>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'24px', flexWrap:'wrap' }}>
            <div>
              <h3 style={{ fontSize:'clamp(18px,2.5vw,26px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 6px', fontFamily:fonts.display, letterSpacing:'-0.5px' }}>Every donation makes a difference</h3>
              <p style={{ fontSize:'14px', color:colors.gray, margin:0 }}>100% of donations go directly to verified NGOs.</p>
            </div>
            <Button href="/ngos" variant="primary" size="lg">Start a Campaign →</Button>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
