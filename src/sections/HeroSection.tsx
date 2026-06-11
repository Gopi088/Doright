import { motion } from "framer-motion";
import { colors, shadows, fontWeights } from "../styles/theme";
import { HERO } from "../data/siteContent";
import Button from "../components/ui/Button";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: colors.bgWarm,
        padding: "clamp(48px,6vw,80px) 0 clamp(40px,5vw,64px)",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          style={{
            flex: "1 1 500px",
            maxWidth: "520px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: colors.gray,
              margin: "0 0 8px",
              fontWeight: fontWeights.medium,
            }}
          >
            {HERO.eyebrow}
          </p>

          <h1
            style={{
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: 1.08,
              fontWeight: fontWeights.extrabold,
              fontFamily: "'Plus Jakarta Sans','Inter',sans-serif",
              color: colors.primary,
              margin: "0 0 20px",
              letterSpacing: "-1.8px",
            }}
          >
            {HERO.titleLine1}
            <br />
            {HERO.titleLine2}
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: colors.gray,
              lineHeight: 1.8,
              margin: "0 0 32px",
              maxWidth: "460px",
            }}
          >
            {HERO.body}
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Button
              href={HERO.cta1.href}
              variant="primary"
              size="lg"
            >
              {HERO.cta1.label}
            </Button>

            <Button
              href={HERO.cta2.href}
              variant="ghost"
              size="lg"
            >
              {HERO.cta2.label}
            </Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            flex: "1 1 420px",
            maxWidth: "520px",
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: shadows.lg,
          }}
        >
          <img
            src="/images/ngo.avif"
            alt="NGO Children Education"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "420px",
              objectFit: "cover",
              display: "block",
              borderRadius: "20px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}