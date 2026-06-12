import { motion } from 'framer-motion';
import { colors, shadows, fontWeights, fonts, fontSizes } from '../styles/theme';
import { HERO } from '../data/siteContent';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

function ClassroomIllustration() {
  return (
    <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg"
      style={{ display:'block', width:'100%', height:'auto', borderRadius:'14px' }}
      role="img" aria-label="Children learning together in a classroom">
      <defs>
        <linearGradient id="hBg"   x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c98a52"/><stop offset="100%" stopColor="#7a4018"/></linearGradient>
        <linearGradient id="hWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4935a"/><stop offset="100%" stopColor="#b07030"/></linearGradient>
        <linearGradient id="hVign" x1="0" y1="0.55" x2="0" y2="1"><stop offset="0%" stopColor="transparent"/><stop offset="100%" stopColor="rgba(50,20,5,0.55)"/></linearGradient>
        <radialGradient id="hLight" cx="30%" cy="15%" r="55%"><stop offset="0%" stopColor="rgba(255,220,140,0.28)"/><stop offset="100%" stopColor="transparent"/></radialGradient>
      </defs>
      <rect width="480" height="340" fill="url(#hBg)"/>
      <rect width="480" height="340" fill="url(#hLight)"/>
      <rect x="0" y="55" width="480" height="210" fill="url(#hWall)" opacity="0.45"/>
      <rect x="145" y="22" width="240" height="115" rx="6" fill="#1e3a2e"/>
      <rect x="153" y="30" width="224" height="99" rx="4" fill="#234535"/>
      {[50,64,78,92,106].map(y=><line key={y} x1="161" x2="369" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>)}
      <text x="265" y="66" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="sans-serif" fontStyle="italic">Learning Together</text>
      <circle cx="76" cy="112" r="17" fill="#e8a870"/>
      <path d="M59 108 Q62 96 76 94 Q90 96 93 108" fill="#2a1008"/>
      <path d="M59 130 Q59 120 76 120 Q93 120 93 130 L100 198 L52 198 Z" fill="#b83040"/>
      <line x1="93" y1="142" x2="148" y2="130" stroke="#b83040" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="148" cy="128" r="5" fill="#e8a870"/>
      {[{x:194,sk:'#f0b080',sh:'#c0392b'},{x:244,sk:'#d88858',sh:'#2471a3'},{x:294,sk:'#f5c090',sh:'#1e8449'},{x:344,sk:'#e09060',sh:'#7d3c98'},{x:394,sk:'#f0b080',sh:'#d35400'}].map((k,i)=>(
        <g key={i}><circle cx={k.x} cy={190} r="13" fill={k.sk}/><rect x={k.x-10} y={200} width="20" height="28" rx="5" fill={k.sh}/></g>
      ))}
      {[{x:175,sk:'#f5c090',sh:'#e74c3c'},{x:225,sk:'#d88858',sh:'#2980b9'},{x:275,sk:'#f0b080',sh:'#27ae60'},{x:325,sk:'#e09060',sh:'#8e44ad'},{x:375,sk:'#f5c090',sh:'#e67e22'},{x:425,sk:'#d88858',sh:'#16a085'}].map((k,i)=>(
        <g key={i}><circle cx={k.x} cy={262} r="16" fill={k.sk}/><rect x={k.x-13} y={275} width="26" height="36" rx="6" fill={k.sh}/></g>
      ))}
      <rect x="0" y="308" width="480" height="32" fill="rgba(50,20,5,0.45)"/>
      <rect width="480" height="340" fill="url(#hVign)"/>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section aria-label="Hero" style={{
      background: colors.bgWarm,
      padding: 'clamp(48px,7vw,88px) 0 clamp(40px,5vw,72px)',
      overflow: 'hidden',
      width: '100%',
    }}>
      <Container>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(24px,4vw,56px)',
          flexWrap: 'wrap',
        }}>

          {/* Text block */}
          <div style={{ flex:'1 1 min(320px, 100%)', minWidth:0 }}>
            <p style={{
              fontFamily: fonts.body, fontSize:'14px', fontWeight: fontWeights.text,
              color: colors.gray, margin:'0 0 8px',
            }}>
              {HERO.eyebrow}
            </p>

            <h1 style={{
              fontFamily: fonts.display,
              fontSize: fontSizes.heroTitle,
              fontWeight: fontWeights.extrabold,
              color: colors.primary,
              margin: '0 0 18px',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
            }}>
              {HERO.titleLine1}<br />{HERO.titleLine2}
            </h1>

            <p style={{
              fontFamily: fonts.body, fontWeight: fontWeights.text,
              fontSize: 'clamp(13.5px,1.4vw,15.5px)', color: colors.gray,
              lineHeight: 1.75, margin: '0 0 30px',
              maxWidth: '420px',
            }}>
              {HERO.body}
            </p>

            <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <Button href={HERO.cta1.href} variant="primary" size="lg">{HERO.cta1.label}</Button>
              <Button href={HERO.cta2.href} variant="ghost"   size="lg">{HERO.cta2.label}</Button>
            </div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity:0, x:32, scale:0.97 }}
            animate={{ opacity:1, x:0,  scale:1 }}
            transition={{ duration:0.65, delay:0.1, ease:[0.22,1,0.36,1] }}
            style={{
              flex: '1 1 min(300px, 100%)',
              minWidth: 0,
              maxWidth: '440px',
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: shadows.lg,
            }}
          >
            <ClassroomIllustration />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
