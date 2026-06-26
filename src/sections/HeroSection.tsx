import { motion } from 'framer-motion';
import { colors, shadows, fontWeights, fonts } from '../styles/theme';
import { HERO } from '../data/siteContent';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

export default function HeroSection() {
  return (
    <section aria-label="Hero" style={{
      background: colors.bgWarm,
      padding: 'clamp(54px,7vw,86px) 0 clamp(56px,7vw,92px)',
      overflow: 'hidden',
      width: '100%',
    }}>
      <Container style={{ maxWidth: '1040px' }}>
        <div className="ngo-hero-layout" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(30px,6vw,88px)',
          flexWrap: 'wrap',
        }}>

          <div className="ngo-hero-copy" style={{ flex:'1 1 min(330px, 100%)', minWidth:0, maxWidth:'430px' }}>
            <p style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(25px,3.2vw,38px)',
              fontWeight: fontWeights.bold,
              color: colors.dark,
              margin: '0 0 2px',
              lineHeight: 1.04,
            }}>
              {HERO.eyebrow}
            </p>
            <h1 style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(31px,4vw,47px)',
              fontWeight: fontWeights.extrabold,
              color: colors.primary,
              margin: '0 0 20px',
              lineHeight: 1.03,
              letterSpacing: '0',
            }}>
              {HERO.titleLine1}<br/>
              {HERO.titleLine2}
            </h1>

            <p style={{
              fontFamily: fonts.body, fontWeight: fontWeights.text,
              fontSize: '12px', color: colors.dark,
              lineHeight: 1.7, margin: '0 0 24px',
              maxWidth: '390px',
            }}>
              {HERO.body}
            </p>

            <div className="ngo-hero-actions" style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <Button href={HERO.cta1.href} variant="primary" size="sm" style={{ minHeight: '38px', padding: '0 19px' }}>{HERO.cta1.label}</Button>
              <Button href={HERO.cta2.href} variant="ghost" size="sm" style={{ minHeight: '38px', padding: '0 19px', background: colors.white, color: colors.gray, borderColor: colors.white, boxShadow: shadows.sm }}>{HERO.cta2.label}</Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity:0, x:32, scale:0.97 }}
            animate={{ opacity:1, x:0,  scale:1 }}
            transition={{ duration:0.65, delay:0.1, ease:[0.22,1,0.36,1] }}
            style={{
              flex: '0 1 min(430px, 100%)',
              minWidth: 0,
              maxWidth: '430px',
              width: '100%',
              aspectRatio: '1.42 / 1',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: `0 9px 0 ${colors.darkTrue}, ${shadows.lg}`,
            }}
          >
            <img
              src="/images/ngo.avif"
              alt="Children at a partner NGO classroom"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
