import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { colors, fonts, fontWeights, radius, shadows } from '../styles/theme';

export default function UnderConstruction() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div style={{ background: colors.white, minHeight: '100vh' }}>
      <Navbar />
      <main
        style={{
          minHeight: 'calc(100vh - 68px)',
          display: 'grid',
          placeItems: 'center',
          padding: 'clamp(70px,10vw,130px) 24px',
          background: colors.bgWarm,
          fontFamily: fonts.body,
        }}
      >
        <section
          style={{
            width: 'min(720px,100%)',
            background: colors.white,
            border: `1px solid ${colors.border}`,
            borderRadius: radius.lg,
            boxShadow: `0 8px 0 ${colors.darkTrue}, ${shadows.card}`,
            padding: 'clamp(34px,6vw,58px)',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: colors.primary,
              color: colors.white,
              borderRadius: radius.full,
              padding: '7px 18px',
              fontSize: '12px',
              fontWeight: fontWeights.textBold,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '22px',
            }}
          >
            Coming Soon
          </span>
          <h1
            style={{
              fontFamily: fonts.display,
              fontSize: 'clamp(34px,6vw,62px)',
              lineHeight: 1.04,
              fontWeight: fontWeights.extrabold,
              color: colors.darkTrue,
              margin: '0 0 14px',
              letterSpacing: '0',
            }}
          >
            {isLogin ? 'Login is under construction' : 'This page is under construction'}
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: colors.grayMid,
              lineHeight: 1.75,
              maxWidth: '520px',
              margin: '0 auto 28px',
            }}
          >
            We are polishing this part of DoRight. For now, you can keep exploring the live pages without hitting a Netlify page-not-found screen.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              to="/"
              style={{
                background: colors.primary,
                color: colors.white,
                borderRadius: radius.full,
                padding: '13px 26px',
                fontSize: '14px',
                fontWeight: fontWeights.textBold,
                textDecoration: 'none',
              }}
            >
              Back to Home
            </Link>
            <Link
              to="/ngos"
              style={{
                background: colors.white,
                color: colors.dark,
                border: `1.5px solid ${colors.border}`,
                borderRadius: radius.full,
                padding: '13px 26px',
                fontSize: '14px',
                fontWeight: fontWeights.textBold,
                textDecoration: 'none',
              }}
            >
              Explore NGOs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
