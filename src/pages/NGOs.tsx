import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { SearchIcon, LocationPinIcon, NoResultsIcon } from '../components/icons';
import { colors, fontWeights, shadows, radius } from '../styles/theme';
import { ngoCards } from '../data/index';

const categories = ['All','Education','Environment','Healthcare','Gender Equality','Water & Sanitation','Food Security'];
const sdgColors: Record<string,string> = { 'SDG 4':'#c5192d','SDG 13':'#3f7e44','SDG 3':'#4c9f38','SDG 5':'#ff3a21','SDG 6':'#26bde2','SDG 2':'#dda63a' };

function VerifiedBadge() {
  return (
    <span style={{ background:colors.successBg, color:colors.success, fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'2px 8px', whiteSpace:'nowrap' as const, display:'inline-flex', alignItems:'center', gap:'3px' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <circle cx="5" cy="5" r="4.5" fill="#16A34A"/>
        <path d="M3 5l1.3 1.3L7 3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Verified
    </span>
  );
}

export default function NGOs() {
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = ngoCards.filter(n => {
    const mc = cat === 'All' || n.category === cat;
    const ms = n.name.toLowerCase().includes(search.toLowerCase()) || n.category.toLowerCase().includes(search.toLowerCase());
    return mc && ms;
  });

  return (
    <div style={{ fontFamily:"'Inter','Plus Jakarta Sans',sans-serif", background:colors.white }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background:colors.bgWarm, padding:'72px 0 56px', textAlign:'center' }}>
        <Container size="md">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }}>
            <span style={{ display:'inline-block', background:colors.primaryLight, color:colors.primary, fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'5px 14px', marginBottom:'16px', letterSpacing:'0.05em', textTransform:'uppercase' as const, border:`1px solid ${colors.primaryBorder}` }}>
              Our Partner NGOs
            </span>
            <h1 style={{ fontSize:'clamp(24px,4vw,46px)', fontWeight:fontWeights.extrabold, fontFamily:"'Plus Jakarta Sans','Inter',sans-serif", color:colors.dark, margin:'0 0 16px', letterSpacing:'-1px', lineHeight:1.15 }}>
              Browse Purpose-Driven NGOs
            </h1>
            <p style={{ fontSize:'14.5px', color:colors.gray, lineHeight:1.75, margin:'0 auto 32px', maxWidth:'560px' }}>
              Discover verified NGOs working across India. Each organisation has been through Doright's rigorous compliance and transparency framework.
            </p>
            {/* Search */}
            <div style={{ position:'relative', maxWidth:'460px', margin:'0 auto' }}>
              <span style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', pointerEvents:'none', display:'flex' }}>
                <SearchIcon size={17} />
              </span>
              <input type="search" placeholder="Search NGOs by name or cause..." value={search}
                onChange={e => setSearch(e.target.value)} aria-label="Search NGOs"
                style={{ width:'100%', padding:'13px 18px 13px 44px', borderRadius:radius.full, border:`1.5px solid ${colors.border}`, fontSize:'14px', outline:'none', background:colors.white, boxSizing:'border-box' as const, boxShadow:shadows.md }}
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <section style={{ padding:'48px 0 80px', background:colors.white }}>
        <Container>
          {/* Filters */}
          <div role="group" aria-label="Filter by category" style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'40px' }}>
            {categories.map(c => (
              <motion.button key={c} whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }} onClick={() => setCat(c)}
                style={{ background:cat===c?colors.primary:colors.bg, color:cat===c?colors.white:colors.grayMid, border:'none', borderRadius:radius.full, padding:'8px 18px', fontSize:'13px', fontWeight:cat===c?fontWeights.bold:fontWeights.medium, cursor:'pointer', transition:'all .15s' }}>
                {c}
              </motion.button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'20px' }}>
            {filtered.map((n, i) => (
              <motion.article key={n.id} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i%3*0.08, duration:0.45 }}
                whileHover={{ y:-4, boxShadow:shadows.hover }}
                style={{ border:`1.5px solid ${colors.borderWarm}`, borderRadius:radius.xl, overflow:'hidden', background:colors.white, display:'flex', flexDirection:'column', boxShadow:shadows.card }}>
                <div style={{ background:colors.bgWarm, padding:'22px 20px', display:'flex', alignItems:'center', gap:'14px' }}>
                  <div style={{ width:'52px', height:'52px', borderRadius:radius.lg, background:colors.primary, color:'#fff', fontSize:'22px', fontWeight:fontWeights.extrabold, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow:shadows.primary }}>
                    {n.name.charAt(0)}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'8px', flexWrap:'wrap' }}>
                      <h2 style={{ fontSize:'14.5px', fontWeight:fontWeights.bold, color:colors.dark, margin:0 }}>{n.name}</h2>
                      {n.verified && <VerifiedBadge />}
                    </div>
                    <p style={{ fontSize:'12.5px', color:colors.gray, margin:'3px 0 0' }}>{n.category}</p>
                  </div>
                </div>
                <div style={{ padding:'16px 20px', flex:1, display:'flex', flexDirection:'column', gap:'12px' }}>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <span style={{ fontSize:'12.5px', color:colors.gray, display:'flex', alignItems:'center', gap:'5px' }}>
                      <LocationPinIcon size={13} /> {n.location}
                    </span>
                    <span style={{ fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.md, padding:'3px 10px', background:`${sdgColors[n.sdg]||colors.primary}1a`, color:sdgColors[n.sdg]||colors.primary, whiteSpace:'nowrap' as const }}>
                      {n.sdg}
                    </span>
                  </div>
                  <Button href="#" variant="outline" size="sm" fullWidth>View NGO</Button>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign:'center', padding:'64px 0', color:colors.gray }}>
              <div style={{ display:'flex', justifyContent:'center', marginBottom:'16px' }}>
                <NoResultsIcon size={48} />
              </div>
              <p style={{ fontSize:'15px' }}>No NGOs found for "{search}". Try a different search.</p>
            </div>
          )}
        </Container>
      </section>

      <section style={{ background:colors.primary, padding:'64px 0', textAlign:'center' }}>
        <Container size="sm">
          <h2 style={{ fontSize:'clamp(20px,3vw,32px)', fontWeight:fontWeights.extrabold, color:'#fff', margin:'0 0 12px', fontFamily:"'Plus Jakarta Sans','Inter',sans-serif", letterSpacing:'-0.5px' }}>
            Register Your NGO Today
          </h2>
          <p style={{ fontSize:'15px', color:'rgba(255,255,255,0.88)', margin:'0 0 28px', lineHeight:1.7 }}>
            Join 500+ NGOs already on Doright and start connecting with donors who care.
          </p>
          <Button variant="white" size="lg">Get Started Free →</Button>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
