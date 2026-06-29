import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import founderImage from "../assets/founder.jpg";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import donateImage from "../assets/img4.jpg";
import giveKindImage from "../assets/img2.jpg";
import volunteerImage from "../assets/img3.jpg";
import witnessImage from "../assets/img1.jpg";
import storyImage from "../assets/storyImage.jpg";
import boardDifferent from "../assets/board1.svg";
import boardFor from "../assets/board2.svg";
import boardFinal from "../assets/board3.svg";
import "./About.css";

const founderSlides = [
  {
    eyebrow: "Our Story",
    title: "Meet Pranav Gandhi,",
    subtitle: "Our Founder.",
    intro: "A Kindness-First Platform to Give, Volunteer, and See Real Change",
    paragraphs: [
      "I grew up in a home where giving wasn't an occasion — it was who we were. My father never gave speeches about compassion; he simply lived it, quietly and without expectation. Day after day, he showed me what it meant to care.",
      "I still remember one winter evening, sitting across from him over tea. He told me about my grandfather — who, on a bitterly cold night, came across a man shivering on the roadside. Without thinking twice, he took off his own shirt and gave it to the man, walking home in just his vest.",
      `When I asked my father about it, he just shrugged. "It wasn't a big deal." But it was. It was everything.`,
    ],
  },
  {
    eyebrow: "Our Story",
    title: "Meet Pranav Gandhi,",
    subtitle: "Our Founder.",
    intro: "A Kindness-First Platform to Give, Volunteer, and See Real Change",
    paragraphs: [
      "That night, I started noticing the quiet choices my father made. He lived by what he called the 80:20 principle: \"Earn as much as you want—but make sure 20% goes back to the world that helped you earn it. If you want to do less good, earn less. But if you want to make a real difference, then go out there and earn more—so you can give more.\"",
      "He didn't just give money to causes—he gave his time, his attention, and his heart. He visited NGOs personally, asked them difficult questions, and ensured his contributions truly mattered. But time and again, he ran into barriers: disconnected systems, unclear impact, and a sense of distance that made giving feel... incomplete.",
    ],
  },
  {
    eyebrow: "Our Story",
    title: "Meet Pranav Gandhi,",
    subtitle: "Our Founder.",
    intro: "A Kindness-First Platform to Give, Volunteer, and See Real Change",
    paragraphs: [
      "That's when a seed took root in me.",
      "What if giving didn't have to feel that way? What if generosity had a clear path to real change? What if there was a way to bring kindness and technology together—to make it easier to give, to volunteer, and to see the ripple effects of our actions?",
      "That vision became our mission: To build a platform where every kind heart finds its way to those who need it most—clearly, transparently, and impactfully.",
      "Because giving should feel as powerful as the act itself. And change should never be out of reach.",
    ],
  },
];

const featureCards = [
  { title: "Donate", body: "To verified, transparent NGOs making a tangible impact", image: donateImage },
  { title: "Give in Kind", body: "Books, clothes, toys, technology — things that carry meaning", image: giveKindImage },
  { title: "Volunteer", body: "Your time, skills and voice — mentoring, logistics, or showing up", image: volunteerImage },
  { title: "Witness Impact", body: "See the real change your kindness creates", image: witnessImage },
];

const team = [
  {
    name: "Vivek Chordia",
    role: "Chief Technology Advisor",
    bio: "Vivek Chordia, with 26+ years of global experience, excels in IoT, AI, Cloud, and leadership. He collaborates and consults with organisations worldwide, driving strategy, innovation, and impactful results across industries.",
    image: member1,
    linkedin: "https://www.linkedin.com/in/vivekchordia",
  },
  {
    name: "Pranav Gandhi",
    role: "Founder and CEO",
    bio: "A dynamic business leader, Pranav has 26+ years of experience across diverse industries. He blends smart strategies with passionate execution and turns ideas into successful businesses.",
    image: member2,
    linkedin: "https://www.linkedin.com/in/pranav-gandhi-a81704280",
  },
  {
    name: "Akshata Chandavarkar",
    role: "Co-Founder and CIIO",
    bio: "With 20 years of global experience, Akshata leads in AI, GRC, Cybersecurity, and HR Transformation. She believes that technology is a tool to drive collaboration and create a positive impact.",
    image: member3,
    linkedin: "https://www.linkedin.com/in/akshata-chandavarkar",
  },
];

const revealSection = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;

const revealItem = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.48, delay, ease: [0.25, 0.46, 0.45, 0.94] },
} as const);

export default function About() {
  const [founderSlide, setFounderSlide] = useState(0);
  const total = founderSlides.length;

  const goTo = (index: number) =>
    setFounderSlide(Math.max(0, Math.min(total - 1, index)));

  return (
    <div className="dr-page dr-about-refined">
      <Navbar />

      {/* ═══════════════════════════════════════════
          GRADIENT ZONE: Hero + 80/20 + Birth
      ═══════════════════════════════════════════ */}
      <div className="about-gradient-zone">

        {/* ── 1. FOUNDER HERO ── */}
        <motion.section className="about-founder-hero" {...revealSection}>
          <div className="about-wrap about-founder-grid">

            {/* Left: copy + slider */}
            <div className="about-founder-copy">
              <div className="about-section-tag">
                <span className="about-dot" />
                {founderSlides[founderSlide].eyebrow}
              </div>

              <h1>
                <strong>{founderSlides[founderSlide].title}</strong>
                <br />
                {founderSlides[founderSlide].subtitle}
              </h1>

              <p className="about-story-subhead">
                A Kindness-First Platform to Give, Volunteer, and See{" "}
                <strong>Real Change</strong>
              </p>

              {/* Slider */}
              <div className="about-story-slider">
                <div
                  className="about-story-slides"
                  style={{ transform: `translateX(-${founderSlide * 100}%)` }}
                >
                  {founderSlides.map((slide, i) => (
                    <div className="about-story-slide" key={i}>
                      {slide.paragraphs.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Nav */}
              <div className="about-story-nav">
                <span className="about-story-counter">
                  {founderSlide + 1}/{total}
                </span>
                <div className="about-story-track">
                  <div
                    className="about-story-progress"
                    style={{ width: `${((founderSlide + 1) / total) * 100}%` }}
                  />
                </div>
                <div className="about-story-arrows">
                  <button
                    className="about-story-arrow"
                    aria-label="Previous"
                    disabled={founderSlide === 0}
                    onClick={() => goTo(founderSlide - 1)}
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 12L6 8l4-4" />
                    </svg>
                  </button>
                  <button
                    className="about-story-arrow"
                    aria-label="Next"
                    disabled={founderSlide === total - 1}
                    onClick={() => goTo(founderSlide + 1)}
                  >
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 4l4 4-4 4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: founder photo */}
            <div className="about-founder-photo">
              <img src={founderImage} alt="Pranav Gandhi, Founder of DoRight" />
            </div>

          </div>
        </motion.section>

        {/* ── 2. 80:20 PRINCIPLE CARD ── */}
        <motion.div className="about-principle-section" {...revealSection}>
          <div className="about-wrap">
            <div className="about-principle-card">
              <div className="about-principle-left">
                <div className="about-principle-number">
                  80<span>/</span>20
                </div>
                <div className="about-principle-label">Principle</div>
              </div>
              <div className="about-principle-divider" />
              <div className="about-principle-body">
                <div className="about-principle-intro">
                  The rule Pranav's father lived by
                </div>
                <blockquote className="about-principle-quote">
                  "Earn as much as you want—but make sure 20% goes back to the world that helped you earn it. If you want to do less good, earn less. But if you want to make a real difference, then go out there and earn more—so you can give more."
                </blockquote>
                <p className="about-principle-sub">
                  Not just a number — <strong>a way of life.</strong> The belief
                  that prosperity and generosity are not opposites. The more you
                  grow, the more you can give back.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3. BIRTH OF DORIGHT ── */}
        <motion.section className="about-birth-section" {...revealSection}>
          <div className="about-wrap about-birth-grid">

            {/* Left: image */}
            <div className="about-birth-image">
              <img src={storyImage} alt="The Birth of DoRight" />
            </div>

            {/* Right: text */}
            <div className="about-birth-copy">
              <div className="about-section-tag">
                <span className="about-dot" />
                The Story
              </div>
              <h2>
                The Birth of <strong>DoRight?</strong>
              </h2>
              <p className="about-birth-subhead">
                Not in a boardroom. Not through a pitch deck. But watching his
                father, Pranav felt something —{" "}
                <strong>love, compassion, action.</strong>
              </p>
              <p>
                DoRight wasn't built to be just another donation platform. It was
                born from something deeper—a belief that kindness should have a
                home, a heartbeat, and a way forward.
              </p>
              <p>
                This is more than a platform. It's a movement. A place where good
                intentions turn into real change. Where giving becomes a shared
                journey, not a transaction.
              </p>
            </div>

          </div>
        </motion.section>

      </div>{/* /about-gradient-zone */}

      {/* ═══════════════════════════════════════════
          4. WHAT YOU CAN DO — ORANGE BAND
      ═══════════════════════════════════════════ */}
      <motion.section className="about-what-section" {...revealSection}>
        <div className="about-wrap">
          <motion.h2 className="about-what-heading" {...revealItem()}>
            <span className="about-what-line">What You Can Do</span>
            <br />
            <span className="about-what-line">
              On <strong>DoRight?</strong>
            </span>
          </motion.h2>

          <div className="about-what-cards">
            {featureCards.map((card, i) => (
              <motion.div className="about-what-card" key={card.title} {...revealItem(i * 0.08)}>
                <div className="about-what-card-img">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="about-what-card-text">
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p className="about-what-tagline" {...revealItem(0.12)}>
            <span className="about-what-tl-highlight">
              Give with Doright through <strong>PROMISES</strong> — where
              transparency and every donor–organisation relationship is valued and
              you can <strong>witness the real change</strong> your kindness
              creates.
            </span>
          </motion.p>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          5. THE TEAM
      ═══════════════════════════════════════════ */}
      <motion.section className="about-team-section" {...revealSection}>
        <div className="about-wrap">
          <motion.h2 className="about-team-heading" {...revealItem()}>
            The Team That
            <br />
            <em>Made It Happen</em>
          </motion.h2>

          <div className="about-team-grid">
            {team.map((person, i) => (
              <motion.div
          className={`about-team-card${i === 1 ? " about-team-card--featured" : ""}`}
          key={person.name}
          {...revealItem(i * 0.08)}
        >
          <div className="about-team-card-info">
            <div className="about-team-card-name">{person.name}</div>
            <div className="about-team-card-role">{person.role}</div>
            <p className="about-team-card-bio">{person.bio}</p>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="about-team-card-linkedin"
              aria-label={`${person.name} LinkedIn profile`}
            >
              LinkedIn
            </a>
          </div>
          <div className="about-team-card-photo">
            <img src={person.image} alt={person.name} />
          </div>
        </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── 5b. FOUNDER QUOTE BAND ── */}
      <motion.section className="about-quote-band" {...revealSection}>
        <div className="about-wrap">
          <div className="about-quote-band-card">
            <p className="about-quote-band-text">
              <span className="about-qb-highlight">
                "No dream, no matter how powerful, can take flight without the
                right people. I found not just team-mates, but kindred spirits —
                three ambitious minds who don't just believe in the dream. They
                owned it, breathed life into it, and carried it forward as if it
                were their own."
              </span>
            </p>
            <div className="about-quote-band-attr">
              <span className="about-qb-highlight">
                — Pranav Gandhi, Founder &amp; CEO
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          6. WHAT MAKES DORIGHT DIFFERENT
      ═══════════════════════════════════════════ */}
      <motion.section className="about-different-section" {...revealSection}>
        <div className="about-wrap about-different-grid">

          {/* Left */}
          <div className="about-different-left">
            <div className="about-different-collage">
              <img src={boardDifferent} alt="DoRight visible impact" />
            </div>
            <div className="about-different-quote-box">
              <p className="about-different-quote-intro">
                We draw deep inspiration from my mentor, Mahatria, whose words
                are compass points for our every step:
              </p>
              <blockquote>
                "If you truly want to lift humanity, educate a mind or enable a
                livelihood. Empower, don't just support."
              </blockquote>
              <cite>— This is the soul of DoRight.</cite>
            </div>
          </div>

          {/* Right */}
          <div className="about-different-right">
            <h2>
              What Makes <strong>DoRight</strong> Different?
            </h2>
            <p className="about-different-subhead">
              It's not the features. It's the feeling.
            </p>
            <p className="about-different-intro">
              When you give through DoRight, you don't just send something off
              and hope. You see the impact.
            </p>
            <div className="about-feature-list">
              {[
                "The classrooms that light up with new books.",
                "The kitchens that come alive with groceries.",
                "The children who are taught.",
                "The hands that are held.",
              ].map((item) => (
                <div className="about-feature-item" key={item}>
                  <div className="about-feature-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <p className="about-different-outro">
              Because your kindness deserves a story — one with a beginning, a
              middle, and most importantly, a visible change.
            </p>
          </div>

        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          7. NOT JUST CHARITY
      ═══════════════════════════════════════════ */}
      <motion.section className="about-charity-section" {...revealSection}>
        <div className="about-wrap about-charity-grid">

          {/* Left */}
          <div className="about-charity-left">
            <div className="about-section-tag">
              <span className="about-dot" />
              Who This Is For?
            </div>
            <h2>
              Not Just Charity.
              <br />
              <strong>It's Character.</strong>
            </h2>
            <div className="about-charity-list">
              <p>The mother who packs storybooks to share, not store.</p>
              <p>The student with two free hours and a full heart.</p>
              <p>
                The professional who quietly sets aside part of their pay for a
                child's school fees.
              </p>
              <p>
                The person who's always thought "I want to help" — and just
                needed to know where.
              </p>
            </div>
            <p className="about-charity-pullquote">
              <strong>DoRight was built for the everyday giver.</strong>
              <br />
              For anyone who wants to help… but just doesn't know where to begin.
            </p>
          </div>

          {/* Right */}
          <div className="about-charity-image">
            <img src={boardFor} alt="Everyday giver collage" />
          </div>

        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          8. CTA — ACT FOR IMPACT
      ═══════════════════════════════════════════ */}
      <motion.section className="about-cta-section" {...revealSection}>
        <div className="about-wrap">
          <div className="about-cta-inner">
            <div className="about-section-tag">
              <span className="about-dot" />
              Act for Impact
            </div>
            <h2>
              This is where <strong>you begin.</strong>
            </h2>
            <p className="about-cta-lead">
              Because giving doesn't have to be grand.
              <br />
              It doesn't need a big cheque — just a big heart.
            </p>
            <p>
              DoRight is more than a platform. It's a reminder that kindness
              isn't measured in size — it's measured in sincerity. And sometimes,
              the smallest acts reveal the strongest character.
            </p>
            <div className="about-cta-divider" />
            <p className="about-cta-tagline">
              DoRight.{" "}
              <span className="about-cta-tagline-accent">Act for Impact.</span>
            </p>
            <p>
              Because in a world full of noise, the quietest acts of kindness
              still echo the loudest.
            </p>
            <p>This is our story. We hope it becomes yours too.</p>
            <Link to="/ngos" className="about-join-btn">
              Join Now
            </Link>
            <div className="about-cta-svg-wrap">
              <img src={boardFinal} alt="" />
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
