import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { colors, fontWeights, shadows, radius } from '../styles/theme'; import { fonts } from '../styles/theme';
import { blogPosts } from '../data/index';

const allCats = ['All','Fundraising','Compliance','SDG Goals','Donor Relations','Technology','Impact'];
const catColors: Record<string,string> = { Fundraising:'#ffaf5f', Compliance:'#3b82f6', 'SDG Goals':'#16a34a', 'Donor Relations':'#9333ea', Technology:'#0891b2', Impact:'#dc2626' };

export default function Blog() {
  const [featured, ...rest] = blogPosts;
  const [email, setEmail] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [subscribed, setSubscribed] = useState(false);
  const visible = activeCat==='All' ? rest : rest.filter(p=>p.category===activeCat);

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <div style={{ fontFamily:fonts.body, background:colors.white }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background:colors.bgWarm, padding:'72px 0 56px', textAlign:'center' }}>
        <Container size="md">
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }}>
            <span style={{ display:'inline-block', background:colors.primaryLight, color:colors.primary, fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'5px 14px', marginBottom:'16px', letterSpacing:'0.05em', textTransform:'uppercase' as const, border:`1px solid ${colors.primaryBorder}` }}>
              Doright Blog
            </span>
            <h1 style={{ fontSize:'clamp(24px,4vw,46px)', fontWeight:fontWeights.extrabold, fontFamily:fonts.display, color:colors.dark, margin:'0 0 16px', letterSpacing:'-1px', lineHeight:1.15 }}>
              Insights for Impact-Driven NGOs
            </h1>
            <p style={{ fontSize:'14.5px', color:colors.gray, lineHeight:1.75, maxWidth:'520px', margin:'0 auto' }}>
              Guides, stories and updates to help your organisation grow, stay compliant and make more impact.
            </p>
          </motion.div>
        </Container>
      </section>

      <section style={{ padding:'56px 0 80px' }}>
        <Container>
          {/* Featured post */}
          <motion.article initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}
            style={{ display:'flex', gap:'0', alignItems:'stretch', background:colors.bgWarm, borderRadius:radius['2xl'], overflow:'hidden', marginBottom:'52px', border:`1.5px solid ${colors.borderWarm}`, flexWrap:'wrap' }}>
            <div style={{ flex:'1 1 280px', minHeight:'220px', background:`linear-gradient(135deg,${colors.primaryLight},${colors.primaryBorder})`, minWidth:0 }}/>
            <div style={{ flex:'1 1 320px', padding:'clamp(24px,3vw,40px)', minWidth:0 }}>
              <span style={{ display:'inline-block', background:catColors[featured.category]||colors.primary, color:'#fff', fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'3px 10px', marginBottom:'14px' }}>{featured.category}</span>
              <h2 style={{ fontSize:'clamp(17px,2.4vw,25px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 14px', lineHeight:1.3, fontFamily:fonts.display, letterSpacing:'-0.3px' }}>{featured.title}</h2>
              <p style={{ fontSize:'14px', color:colors.gray, lineHeight:1.75, margin:'0 0 16px' }}>{featured.excerpt}</p>
              <div style={{ display:'flex', gap:'8px', fontSize:'12.5px', color:colors.grayLight, marginBottom:'20px' }}>
                <span>{featured.date}</span><span>·</span><span>{featured.readTime}</span>
              </div>
              <Button href={`/blog/${featured.id}`} variant="primary" size="md">Read Article →</Button>
            </div>
          </motion.article>

          {/* Category filter */}
          <div role="group" aria-label="Filter by category" style={{ display:'flex', gap:'10px', flexWrap:'wrap', marginBottom:'36px' }}>
            {allCats.map(c=>(
              <motion.button type="button" key={c} aria-pressed={activeCat===c} whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }} onClick={()=>setActiveCat(c)}
                style={{ background:activeCat===c?colors.primary:colors.bg, color:activeCat===c?colors.white:colors.grayMid, border:'none', borderRadius:radius.full, padding:'7px 16px', fontSize:'13px', fontWeight:activeCat===c?fontWeights.bold:fontWeights.text, cursor:'pointer', transition:'all .15s' }}>
                {c}
              </motion.button>
            ))}
          </div>

          {/* Post grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'24px' }}>
            {visible.map((p,i)=>(
              <motion.article key={p.id} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:i%3*0.08, duration:0.45 }}
                whileHover={{ y:-5, boxShadow:shadows.hover }}
                style={{ border:`1.5px solid ${colors.borderWarm}`, borderRadius:radius.xl, overflow:'hidden', background:colors.white, display:'flex', flexDirection:'column', boxShadow:shadows.card }}>
                <div style={{ height:'170px', background:`linear-gradient(135deg,${colors.primaryLight},${colors.primaryBorder})`, position:'relative' }}>
                  <span style={{ position:'absolute', bottom:'12px', left:'14px', background:catColors[p.category]||colors.primary, color:'#fff', fontSize:'11px', fontWeight:fontWeights.bold, borderRadius:radius.full, padding:'3px 10px' }}>{p.category}</span>
                </div>
                <div style={{ padding:'18px 20px 22px', flex:1, display:'flex', flexDirection:'column' }}>
                  <h3 style={{ fontSize:'14.5px', fontWeight:fontWeights.bold, color:colors.dark, margin:'0 0 10px', lineHeight:1.4, fontFamily:fonts.display }}>{p.title}</h3>
                  <p style={{ fontSize:'13px', color:colors.gray, lineHeight:1.65, margin:'0 0 16px', flex:1 }}>{p.excerpt}</p>
                  <div style={{ display:'flex', gap:'8px', fontSize:'12px', color:colors.grayLight, marginTop:'auto' }}>
                    <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                  </div>
                  <Button href={`/blog/${p.id}`} variant="outline" size="sm" style={{ marginTop:'18px', alignSelf:'flex-start' }}>Read Article →</Button>
                </div>
              </motion.article>
            ))}
          </div>
          {visible.length===0 && (
            <div style={{ textAlign:'center', padding:'60px 0', color:colors.gray }}>
              <div style={{ display:'flex', justifyContent:'center', marginBottom:'12px' }}><svg width='48' height='48' viewBox='0 0 48 48' fill='none'><rect x='6' y='10' width='36' height='28' rx='3' stroke='#FFAF5F' strokeWidth='2.2'/><path d='M6 14L24 28L42 14' stroke='#FFAF5F' strokeWidth='2' strokeLinecap='round'/><line x1='16' y1='32' x2='32' y2='32' stroke='#FFAF5F' strokeWidth='1.5' strokeLinecap='round' strokeDasharray='3 3'/></svg></div>
              <p style={{ fontSize:'15px' }}>No posts in this category yet.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter */}
      <section style={{ background:colors.bgWarm, padding:'64px 0', borderTop:`1px solid ${colors.borderWarm}` }}>
        <Container size="sm">
          <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} style={{ textAlign:'center' }}>
            <div style={{ width:'52px', height:'52px', borderRadius:'50%', background:colors.primaryLight, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', border:`1px solid ${colors.primaryBorder}` }}><svg width='24' height='24' viewBox='0 0 28 28' fill='none'><rect x='3' y='7' width='22' height='16' rx='2' stroke='#FFAF5F' strokeWidth='1.8'/><path d='M3 9L14 17L25 9' stroke='#FFAF5F' strokeWidth='1.8' strokeLinecap='round'/></svg></div>
            <h3 style={{ fontSize:'clamp(18px,3vw,28px)', fontWeight:fontWeights.extrabold, color:colors.dark, margin:'0 0 10px', fontFamily:fonts.display, letterSpacing:'-0.5px' }}>Stay Updated</h3>
            <p style={{ fontSize:'14px', color:colors.gray, margin:'0 0 28px', lineHeight:1.7 }}>
              Get the latest NGO insights and Doright updates delivered to your inbox.
            </p>
            {subscribed ? (
              <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
                style={{ background:colors.successBg, color:colors.success, borderRadius:radius.lg, padding:'14px 24px', fontSize:'14px', fontWeight:fontWeights.semibold, display:'inline-block' }}>
                ✓ You're subscribed! Thanks for joining.
              </motion.div>
            ) : (
              <form onSubmit={subscribe} style={{ display:'flex', gap:'10px', maxWidth:'420px', margin:'0 auto', flexWrap:'wrap' }}>
                <input type="email" required autoComplete="email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email address"
                  style={{ flex:'1 1 200px', padding:'12px 18px', borderRadius:radius.full, border:`1.5px solid ${colors.border}`, fontSize:'14px', outline:'none', background:colors.white, boxSizing:'border-box' as const }}
                />
                <Button type="submit" variant="primary" size="md">Subscribe</Button>
              </form>
            )}
          </motion.div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
