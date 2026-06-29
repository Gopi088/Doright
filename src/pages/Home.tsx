import React, {
  useState, useEffect, useRef,
  useCallback, memo, useMemo,
} from "react";
import {
  motion, AnimatePresence, useInView,
  useMotionValue,
} from "framer-motion";
import type { Variants, Transition, PanInfo } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage1 from "../assets/heroImage1.jpg";
import heroImage2 from "../assets/heroImage2.jpg";
import heroImage3 from "../assets/heroImage3.jpg";
import storyImage from "../assets/storyImage.jpg";
import treeImage from "../assets/treeImage.jpg"
import productImage1 from "../assets/img1.jpg";
import productImage2 from "../assets/img2.jpg";
import productImage3 from "../assets/img3.jpg";
import actForImpactVideo from "../assets/Act for impact_1.mp4";
import liveFeedSample from "../data/liveFeedSample.json";

/* ─── DESIGN TOKENS ─────────────────────────────────────────────────────────── */
const T = {
  orange:     "#FAA950",
  orangeMid:  "#FCB97C",
  orangeLight:"#FDC99A",
  orangePale: "#FEF3E8",
  orangeAlpha:"rgba(250,169,80,0.16)",
  dark:       "#1C1C1C",
  mid:        "#666666",
  light:      "#AAAAAA",
  bg:         "#ffffff",
  bgWhite:    "#ffffff",
  bgGray:     "#F4F4F4",
  border:     "#E2E2E2",
  borderMid:  "#E2E2E2",
  // Signature bottom border (hero, testimonials, CTA)
  bottomBorder: "8px solid #1C1C1C",
  // Card radius
  r28: "28px",
  r24: "24px",
  r16: "16px",
  r999: "999px",
};

/* ─── EASING ──────────────────────────────────────────────────────────────────*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EASE: any = [0.25, 0.46, 0.45, 0.94];
const TR = (d = 0.55): Transition => ({ duration: d, ease: EASE });

/* ─── ANIMATION VARIANTS ─────────────────────────────────────────────────────*/
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0,  transition: TR() },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  show:   { opacity: 1, scale: 1,   transition: TR() },
};
const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};
const staggerFast: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

/* ─── INTERFACES ─────────────────────────────────────────────────────────────*/
interface Slide        { id:number; tag:string; headline:string; highlight:string; sub:string; cta:string; image:string; imagePosition:string; org:string; raised:string; goal:string; pct:number; donors:string; urgency:string; }
interface NGO          { id:number; initials:string; name:string; cause:string; color:string; }
interface Campaign     { id:number; tag:string; image:string; imagePosition:string; title:string; description:string; raised:string; goal:string; pct:number; org:string; orgInitials:string; orgColor:string; }
interface HowStep      { id:number; label:string; headline:string; bold:string; body:string; link:string; }
interface AppFeature   { id:number; step:string; title:string; detail:string; }
interface Testimonial  { id:number; quote:string; name:string; role:string; initials:string; }
interface PressItem    { id:number; outlet:string; color:string; date:string; headline:string; body:string; }
interface PressStyle   { family?:string; italic?:boolean; uppercase?:boolean; letterSpacing?:string; }
interface LiveFeedItem { id:number; initials:string; name:string; city:string; org:string; cause:string; amount:string; time:string; tone:"green"|"orange"|"gray"; }

/* ─── DATA ───────────────────────────────────────────────────────────────────*/
const SLIDES: Slide[] = [
  { id:1, tag:"EDUCATION", headline:"Give a child", highlight:"a year of schooling.", sub:"₹4,800 covers a full academic year — books, meals, and a teacher who shows up. Verified by Teach For India Foundation.", cta:"Donate Now", image:heroImage1, imagePosition:"center", org:"Teach For India Foundation", raised:"₹3,65,000", goal:"₹5L", pct:73, donors:"418 donors", urgency:"6 days left" },
  { id:2, tag:"HEALTHCARE", headline:"Build a clinic", highlight:"for 5,000 families.", sub:"A Vidarbha village with no doctor within 40 km. Your donation funds the last mile of healthcare — geotagged, field-verified.", cta:"Donate Now", image:heroImage2, imagePosition:"center", org:"AarogyaSeva", raised:"₹4,05,000", goal:"₹5L", pct:81, donors:"532 donors", urgency:"3 days left" },
  { id:3, tag:"ENVIRONMENT", headline:"Plant 10,000", highlight:"native trees.", sub:"Each sapling is GPS-tagged and photo-tracked for 3 years. Watch your tree grow — and know it actually did.", cta:"Donate Now", image:heroImage3, imagePosition:"center", org:"GreenRoots India", raised:"₹68,000", goal:"₹2L", pct:34, donors:"129 donors", urgency:"11 days left" },
];

const NGOS: NGO[] = [
  { id:1, initials:"GI", name:"Give India",      cause:"Multi-cause",    color:T.orange },
  { id:2, initials:"NK", name:"Nanhi Kali",      cause:"Girl Education", color:T.dark },
  { id:3, initials:"MB", name:"Magic Bus",       cause:"Youth",          color:T.mid },
  { id:4, initials:"S",  name:"Samarpan",        cause:"Addiction",      color:T.orange },
  { id:5, initials:"IF", name:"Isha Foundation", cause:"Rural Dev",      color:T.dark },
  { id:6, initials:"UC", name:"Udayan Care",     cause:"Child Rights",   color:T.mid },
  { id:7, initials:"HA", name:"HelpAge India",   cause:"Elderly",        color:T.orange },
  { id:8, initials:"GJ", name:"Goonj",           cause:"Livelihood",     color:T.dark },
];

const CAMPAIGNS: Campaign[] = [
  { id:1, tag:"EDUCATION",   image:heroImage1, imagePosition:"center", title:"Literacy Drive — Rural Maharashtra",      description:"Bringing quality reading materials and trained educators to 200+ under-resourced village schools across Maharashtra.", raised:"₹3,65,000", goal:"₹5,00,000", pct:73, org:"Teach For India",   orgInitials:"TF", orgColor:T.orange },
  { id:2, tag:"ENVIRONMENT", image:heroImage3, imagePosition:"center", title:"Wildlife Trees — Polluted Districts",     description:"Planting native species in highly polluted urban districts to restore biodiversity and clean the air.",                 raised:"₹1,16,000", goal:"₹2,00,000", pct:58, org:"Wildlife Foundation",orgInitials:"WF", orgColor:T.dark },
  { id:3, tag:"HEALTH",      image:heroImage2, imagePosition:"center", title:"Health Clinics for Rural Women",          description:"Mobile health units providing free maternity and preventive care to women in 50 remote villages.",                      raised:"₹4,05,000", goal:"₹5,00,000", pct:81, org:"HelpAge India",      orgInitials:"HA", orgColor:T.mid },
  { id:4, tag:"LIVELIHOOD",  image:storyImage, imagePosition:"center", title:"Skill Training for Women Entrepreneurs",  description:"Equipping 500 women from marginalised communities with digital and vocational skills for financial independence.",      raised:"₹2,20,000", goal:"₹5,00,000", pct:44, org:"Goonj",              orgInitials:"GJ", orgColor:T.orange },
];

const HOW_STEPS: HowStep[] = [
  { id:1, label:"Find verified causes",  headline:"Give in the way that", bold:"feels right to you",    body:"Money. Time. Things. A product bought from an NGO. DoRight counts all of it — and converts every act into your Lives score. One number that tells the real story of your giving.\n\nEvery NGO on the platform cleared 30+ document checks, completed VKYC with geotagging, and passed a field audit. No NGO goes live until DoRight approves them.", link:"See how we verify NGOs →" },
  { id:2, label:"Contribute securely",   headline:"Every rupee",           bold:"tracked and protected",  body:"UPI, NetBanking, Cards, Wallets — all payment methods secured with bank-grade encryption. Your transaction is logged, receipted, and tied to a verified NGO campaign in real time.",                                                                                                                                                           link:"How payments work →" },
  { id:3, label:"Track real impact",     headline:"You'll actually",        bold:"find out what happened", body:"Within 7 days of your contribution, you receive field photos straight from the NGO. Your Lives score updates instantly. Your impact — money, time, things — all in one place, always.",                                                                                                                                                   link:"See sample impact reports →" },
];

const APP_FEATURES: AppFeature[] = [
  { id:1, step:"01", title:"Find your cause, your way",   detail:"Browse verified NGOs and live campaigns across education, health, environment and more. Filter by cause, region, or giving type." },
  { id:2, step:"02", title:"Give money, time, or things", detail:"Donate funds, volunteer hours, physical items — or buy directly from NGO-made products. All of it counts toward your Lives score." },
  { id:3, step:"03", title:"Watch your Lives grow",       detail:"Every act is converted into a Lives score — one person meaningfully reached. Track your impact in real time, every month." },
  { id:4, step:"04", title:"You'll actually find out",    detail:"Receive geotagged field photos and fund utilisation reports. You'll never donate into silence again." },
  { id:5, step:"05", title:"Want to buy from an NGO?",    detail:"Shop NGO-made products directly. Every purchase counts as a giving act and earns Lives — guilt-free, impact-full commerce." },
];

const TESTIMONIALS: Testimonial[] = [
  { id:1, quote:"DoRight completely changed how I think about giving. I used to donate and wonder if it even reached anyone. Now I get field photos, GPS-verified reports — I can actually see my ₹500 at work.", name:"Priya Mehta",  role:"Product Manager, Bengaluru", initials:"PM" },
  { id:2, quote:"I appreciate the science behind the DoRight Score. It's not just feel-good — it actually measures impact. My team at work started a group campaign last month and it's been incredible.",         name:"Aditya Nair", role:"Startup Founder, Mumbai",     initials:"AN" },
  { id:3, quote:"I volunteer through DoRight every weekend. The geotagging and verification make me feel safe — I know the organisation is legit. And seeing my score grow is genuinely motivating.",              name:"Kavya Rao",   role:"Teacher & Volunteer, Pune",   initials:"KR" },
  { id:4, quote:"We launched a company campaign and within a week our team had collectively impacted 200+ Lives. The transparency reports made it something everyone wanted to be part of.",                        name:"Rohan Desai", role:"CTO, Bengaluru",              initials:"RD" },
  { id:5, quote:"I gave ₹150 to buy a notebook from an NGO. In 5 days I got a photo of the child who received it. That's the first time giving ever felt real to me.",                                            name:"Ananya Singh",role:"Student, Delhi",              initials:"AS" },
  { id:6, quote:"The Lives score makes giving feel like something you can grow. I check it the same way I check my fitness rings. It's become part of how I think about my week.",                                  name:"Deepa Nair",  role:"Designer, Mumbai",            initials:"DN" },
];

const PRESS: PressItem[] = [
  { id:1, outlet:"YourStory",          color:"#7B2D8B", date:"Mar 2026", headline:"DoRight is turning the opacity problem of Indian philanthropy on its head",              body:"The platform's VKYC-backed verification and live field-photo updates are building a new standard of donor trust in India's NGO ecosystem." },
  { id:2, outlet:"The Economic Times", color:"#CC0000", date:"Feb 2026", headline:"Why India's next generation of donors is demanding proof, not promises",                 body:"DoRight's 'Lives' scoring model gives donors a single metric to track real-world impact — a first for the Indian giving landscape." },
  { id:3, outlet:"Inc42",              color:"#FF6B35", date:"Jan 2026", headline:"Meet the startup that wants every rupee you donate to come back with a story",           body:"With 300+ verified NGO partners and geotagged impact reports, DoRight is quietly rewriting how India gives." },
  { id:4, outlet:"Forbes India",       color:"#000000", date:"Dec 2025", headline:"The transparency layer India's ₹55,000 crore philanthropy sector has been waiting for", body:"DoRight bridges the gap between donor intent and ground reality — with technology that holds NGOs accountable in real time." },
  { id:5, outlet:"The Hindu",          color:"#003366", date:"Nov 2025", headline:"A new kind of giving platform is making verified impact the bare minimum",                body:"DoRight's 30-point NGO verification process is drawing praise from civil society organisations who say it raises the bar for the whole sector." },
  { id:6, outlet:"Mint",               color:"#007744", date:"Oct 2025", headline:"DoRight scores ₹12 Cr seed round to scale verified giving across India",                 body:"Investors cite the platform's data-first approach and rapidly growing donor base as key reasons for backing the early-stage startup." },
];

const PRESS_STYLE: Record<string, PressStyle> = {
  YourStory: { family:"Georgia, serif" },
  "The Economic Times": { family:"Georgia, serif", italic:true },
  Inc42: { family:"DM Sans, sans-serif", uppercase:true, letterSpacing:".05em" },
  "Forbes India": { family:"Georgia, serif", italic:true },
  "The Hindu": { family:"Georgia, serif" },
  Mint: { family:"DM Sans, sans-serif", italic:true },
};

const APP_STORE_URL = "https://apps.apple.com/in/app/doright-mobile-app/id6739503471";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.dorightapp&pcampaignid=web_share";

const LIVE_FEED_SAMPLE = liveFeedSample as LiveFeedItem[];

/* ─── SHARED COMPONENTS ──────────────────────────────────────────────────────*/

const Reveal: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} style={style}>
      {children}
    </motion.div>
  );
};

const Pill: React.FC<{ label: string; dot?: boolean }> = memo(({ label, dot }) => (
  <span style={{
    display:"inline-flex", alignItems:"center", gap:6,
    background:T.orange, color:"#fff", fontWeight:700,
    fontSize:11, letterSpacing:"0.1em", borderRadius:999,
    padding:"6px 16px", textTransform:"uppercase",
  }}>
    {dot && (
      <motion.span
        animate={{ opacity:[1,0.2,1] }}
        transition={{ duration:1.2, repeat:Infinity, ease:"easeInOut" }}
        style={{ width:7, height:7, borderRadius:"50%", background:"#fff", flexShrink:0 }}
      />
    )}
    {label}
  </span>
));

const Btn: React.FC<{ children:React.ReactNode; style?:React.CSSProperties; ghost?:boolean; href?:string }> = ({ children, style, ghost, href = "/campaigns" }) => (
  <motion.a
    href={href}
    whileHover={{
      scale: ghost ? 1.02 : 1.04,
      borderColor: ghost ? "#ffaf5f" : undefined,
      color: ghost ? "#ffaf5f" : undefined,
      boxShadow: ghost ? undefined : "0 8px 28px rgba(255,175,95,0.38)",
    }}
    whileTap={{ scale:0.96 }}
    style={{
      display:"inline-flex", alignItems:"center", justifyContent:"center",
      border: ghost ? `1.5px solid ${T.borderMid}` : "none",
      background: ghost ? "transparent" : T.orange,
      color: ghost ? T.dark : "#fff",
      borderRadius: T.r999, padding:"14px 32px",
      fontSize:15, fontWeight:600, cursor:"pointer", fontFamily:"inherit",
      lineHeight:1, letterSpacing:"0.01em", textDecoration:"none",
      ...style,
    }}
  >{children}</motion.a>
);

const TxtLink: React.FC<{ children:React.ReactNode; style?:React.CSSProperties; href?:string }> = ({ children, style, href = "/campaigns" }) => (
  <a href={href} style={{ display:"inline-flex", alignItems:"center", background:"none", border:"none", cursor:"pointer", padding:0, color:T.orange, fontWeight:600, fontSize:14, fontFamily:"inherit", textDecoration:"none", ...style }}>{children}</a>
);

/* ─── §1  HERO ───────────────────────────────────────────────────────────────*/
const Hero: React.FC = () => {
  const [trackIdx, setTrackIdx] = useState(1);
  const [instantReset, setInstantReset] = useState(false);
  const [clipWidth, setClipWidth] = useState(0);
  const [heroAutoplayPaused, setHeroAutoplayPaused] = useState(false);
  const clipRef = useRef<HTMLDivElement>(null);
  const n = SLIDES.length;
  const GAP = 20;
  const carouselSlides = useMemo(() => [SLIDES[n - 1], ...SLIDES, SLIDES[0]], [n]);
  const idx = (trackIdx - 1 + n) % n;

  const getPeek = useCallback(() => {
    if (typeof window === "undefined") return 80;
    if (window.innerWidth <= 768) return 16;
    if (window.innerWidth <= 1024) return 48;
    return 80;
  }, []);

  const goTo = useCallback((i:number)=>{
    setHeroAutoplayPaused(true);
    setInstantReset(false);
    setTrackIdx(i + 1);
  },[]);
  const prev = useCallback(()=>{
    setInstantReset(false);
    setTrackIdx(current => current <= 0 ? current : current - 1);
  },[]);
  const next = useCallback(()=>{
    setInstantReset(false);
    setTrackIdx(current => current >= n + 1 ? current : current + 1);
  },[n]);

  useEffect(()=>{
    const t = window.setInterval(() => {
      if (!heroAutoplayPaused && document.visibilityState === "visible") next();
    },5000);
    return ()=>window.clearInterval(t);
  },[heroAutoplayPaused, next]);

  useEffect(() => {
    const normalizeTrack = () => {
      setTrackIdx(current => {
        if (current > n + 1) return 1;
        if (current < 0) return n;
        return current;
      });
    };
    document.addEventListener("visibilitychange", normalizeTrack);
    return () => document.removeEventListener("visibilitychange", normalizeTrack);
  }, [n]);

  useEffect(() => {
    const update = () => setClipWidth(clipRef.current?.offsetWidth ?? 0);
    update();
    window.addEventListener("resize", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.removeEventListener("resize", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const peek = getPeek();
  const slideW = Math.max(0, clipWidth - (peek * 2) - (GAP * 2));
  const x = clipWidth ? peek - trackIdx * (slideW + GAP) : peek;

  const handleCarouselComplete = useCallback(() => {
    if (trackIdx >= n + 1) {
      setInstantReset(true);
      setTrackIdx(1);
    } else if (trackIdx <= 0) {
      setInstantReset(true);
      setTrackIdx(n);
    }
  }, [trackIdx, n]);

  useEffect(() => {
    if (!instantReset) return;
    const frame = requestAnimationFrame(() => setInstantReset(false));
    return () => cancelAnimationFrame(frame);
  }, [instantReset]);

  const arrowStyle: React.CSSProperties = {
    position:"absolute", top:"50%", transform:"translateY(-50%)",
    width:44, height:44, borderRadius:"50%",
    background:"#fff", border:"none",
    boxShadow:"0 6px 28px rgba(0,0,0,0.10)",
    cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
    fontSize:24, color:T.mid, zIndex:20, fontFamily:"inherit",
  };

  return (
    <section className="home-hero-section" style={{ background:T.bgWhite, padding:"48px 0 32px", overflow:"hidden" }}>
      <div
  className="hero-shell"
  style={{
    width: "100%",
    maxWidth: "none",
    margin: "0 auto",
    position: "relative",
    padding: "0 0 20px",
  }}
>
        <div ref={clipRef} className="hero-clip" style={{ overflow:"hidden", position:"relative", paddingBottom:12 }}>
          <motion.div
            className="hero-track"
            animate={{ x }}
            transition={instantReset ? { duration:0 } : { duration:0.7, ease:[0.4,0,0.2,1] }}
            onAnimationComplete={handleCarouselComplete}
            style={{
              display:"flex",
              gap:GAP,
              willChange:"transform",
            }}
          >
            {carouselSlides.map((slide, slideIndex) => (
              <div key={`${slide.id}-${slideIndex}`} className="hero-card" style={{
                flex:`0 0 ${slideW ? `${slideW}px` : "calc(100% - 160px)"}`,
                minHeight:"500px",
                position:"relative",
                overflow:"hidden",
                borderRadius:"28px",
                background:T.dark,
                border:`1.5px solid ${T.border}`,
                boxShadow:"0 8px 0 0 #1A1A1A, 0 14px 36px rgba(0,0,0,.12)",
              }}>
                <img
                  className="hero-right"
                  src={slide.image}
                  alt={slide.headline}
                  style={{
                    position:"absolute",
                    top:0,
                    left:"32%",
                    width:"68%",
                    height:"100%",
                    objectFit:"cover",
                    objectPosition:slide.imagePosition,
                    zIndex:1,
                  }}
                />

                <div
                  className="hero-center"
                  style={{
                    position:"absolute",
                    inset:0,
                    background:T.bgWhite,
                    clipPath:"polygon(0 0, 32% 0, 44% 100%, 0 100%)",
                    pointerEvents:"none",
                    zIndex:2,
                  }}
                />

                <div
                  className="hero-copy"
                  style={{
                    position:"absolute",
                    zIndex:3,
                    top:"50%",
                    left:0,
                    transform:"translateY(-50%)",
                    width:"31%",
                    padding:"0 20px 0 44px",
                    display:"flex",
                    flexDirection:"column",
                    gap:10,
                  }}
                >
                  <h1 style={{
                    margin:0,
                    fontSize:"clamp(34px,3.75vw,45px)",
                    fontWeight:300,
                    lineHeight:1.1,
                    color:T.dark,
                    letterSpacing:0,
                  }}>
                    {slide.headline}<br />
                    <strong style={{ color:T.orange, fontWeight:500 }}>{slide.highlight}</strong>
                  </h1>

                  <p style={{ margin:0, color:T.mid, fontSize:13, lineHeight:1.65 }}>
                    {slide.sub}
                  </p>

                  <Btn href="/campaigns" style={{ width:"fit-content", padding:"14px 30px", fontWeight:700, fontSize:15, marginTop:10 }}>
                    {slide.cta} →
                  </Btn>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.button onClick={prev} aria-label="Previous"
            whileHover={{background:T.orange, color:"#fff" }}
            style={{ ...arrowStyle, left:20 }}>‹</motion.button>
          <motion.button onClick={next} aria-label="Next"
            whileHover={{background:T.orange, color:"#fff" }}
            style={{ ...arrowStyle, right:20 }}>›</motion.button>
        </div>

        {/* Dots */}
        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:20 }}>
          {SLIDES.map((s,i)=>(
            <button key={s.id} onClick={()=>goTo(i)} aria-label={`Slide ${i+1}`}
              style={{
                width: i===idx ? 32 : 9, height:9, borderRadius:99,
                border:"none", cursor:"pointer", padding:0,
                background: i===idx ? T.orange : T.border,
                transition:"all 0.4s ease",
              }} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── §2  LIVE ACTIVITY ──────────────────────────────────────────────────────*/
const LiveSection: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [feed, setFeed] = useState<LiveFeedItem[]>(() => LIVE_FEED_SAMPLE.slice(0, 4));
  const [activeDonors, setActiveDonors] = useState(25);
  const nextFeedIndexRef = useRef(4);
  const feedRowRef = useRef(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setFeed(current => {
        if (!LIVE_FEED_SAMPLE.length) return current;
        const next = [...current];
        const row = feedRowRef.current % Math.max(next.length, 1);
        next[row] = LIVE_FEED_SAMPLE[nextFeedIndexRef.current % LIVE_FEED_SAMPLE.length];
        feedRowRef.current = (feedRowRef.current + 1) % Math.max(next.length, 1);
        nextFeedIndexRef.current = (nextFeedIndexRef.current + 1) % LIVE_FEED_SAMPLE.length;
        return next;
      });
      setActiveDonors(current => current >= 32 ? 24 : current + 1);
    }, 2600);
    return () => window.clearInterval(t);
  }, []);

  const paymentMethods = [
    { label:"UPI", icon:"⬡" },
    { label:"NetBanking", icon:"🏛" },
    { label:"Cards", icon:"💳" },
    { label:"Wallets", icon:"👜" },
  ];

  return (
    <section className="live-section" style={{ padding:"80px 0", background:T.bgWhite }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <Reveal>
          <div className="two-col live-main" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>

            {/* LEFT */}
            <div>
              <motion.div variants={fadeUp} className="live-active-pill" style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:T.orangePale, borderRadius:999, padding:"8px 16px",
                fontSize:13, color:T.dark, marginBottom:32,
              }}>
                <motion.span animate={{ opacity:[1,0.2,1] }}
                  transition={{ duration:1.4, repeat:Infinity, ease:"easeInOut" }}
                  style={{ width:8, height:8, borderRadius:"50%", background:T.orange, flexShrink:0 }} />
                <span><strong style={{ color:T.dark, fontWeight:700 }}>{activeDonors}</strong> donors active right now</span>
                <span style={{ color:T.light, margin:"0 2px" }}>·</span>
                <span style={{ color:T.mid }}>Every act tracked in real time</span>
              </motion.div>

              <motion.h2 variants={fadeUp} style={{
                fontSize:"clamp(2.5rem,5vw,4.25rem)", fontWeight:400,
                lineHeight:1.02, color:T.dark, margin:"0 0 24px",
                letterSpacing:0,
              }}>
                do nothing.<br />
                <span style={{ color:T.orange }}>or</span> do right.
              </motion.h2>

              <motion.p variants={fadeUp} style={{ fontSize:16, color:T.mid, lineHeight:1.8, marginBottom:16, maxWidth:520, fontWeight:400 }}>
                Most giving disappears into silence. DoRight shows you exactly what happened — to your money, your time, the things you gave.
              </motion.p>
              <motion.p variants={fadeUp} style={{ fontSize:16, color:T.dark, lineHeight:1.8, marginBottom:14, fontWeight:400 }}>
                Give ₹500 or volunteer an afternoon.{" "}
                <strong style={{ fontWeight:600 }}>Every act earns a Life — one person meaningfully reached.</strong>
              </motion.p>
              <motion.a href="/campaigns" variants={fadeUp} style={{ display:"block", fontSize:15, color:T.orange, fontWeight:500, lineHeight:1.7, marginBottom:24, textDecoration:"none" }}>
                Start from ₹150 — buy a notebook from an NGO. Your first Life, in under 2 minutes.
              </motion.a>

              <motion.div variants={fadeUp} style={{
                background:T.orangePale, borderRadius:T.r16,
                padding:"18px 20px", marginBottom:28,
              }}>
                <p style={{ margin:"0 0 5px", fontWeight:700, fontSize:14, color:T.dark, lineHeight:1.6 }}>
                  Only DoRight-approved NGOs — 30+ document checks, VKYC with geotagging.
                </p>
                <p style={{ margin:0, fontSize:14, color:T.mid, lineHeight:1.6 }}>
                  Field photos from the ground. You'll actually know what happened.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:14 }}>
                <Btn href="/campaigns">Find your cause →</Btn>
                <Btn href="/#how-it-works" ghost>See How It Works</Btn>
              </motion.div>

              <motion.p variants={fadeUp} style={{ fontSize:13, color:T.light, marginBottom:18 }}>
                Give money · donate time · give things · buy from NGOs ·{" "}
                <span style={{ color:T.orange, fontWeight:600 }}>all on one app</span>
              </motion.p>

              <motion.div variants={fadeUp} style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap", marginBottom:36 }}>
                <span style={{ fontSize:13, color:T.light }}>Donate via</span>
                {paymentMethods.map(({ label,  })=>(
                  <motion.a
                    key={label}
                    onClick={()=>setPaymentMethod(label)}
                    href={`/payments/${label.toLowerCase()}`}
                    whileHover={{ y:-2 }}
                    whileTap={{ scale:0.96 }}
                    aria-pressed={paymentMethod === label}
                    style={{
                    display:"inline-flex", alignItems:"center", gap:5,
                    fontSize:12, fontWeight:600,
                    background:paymentMethod === label ? T.orange : T.bgGray,
                    borderRadius:7, padding:"6px 11px",
                    border:`1px solid ${paymentMethod === label ? T.orange : T.bgGray}`,
                    color:paymentMethod === label ? "#fff" : T.mid,
                    fontFamily:"inherit",
                    cursor:"pointer",
                    boxShadow:paymentMethod === label ? "0 8px 20px rgba(255,175,95,0.28)" : "none",
                    transition:"all 0.22s ease",
                    textDecoration:"none",
                  }}><span aria-hidden="true" style={{ fontSize:13 }}></span>{label}</motion.a>
                ))}
              </motion.div>

              <motion.div className="live-stats" variants={fadeUp} style={{
                display:"flex", paddingTop:28,
                borderTop:`1px solid ${T.border}`,
              }}>
                {[
                  { n:"2",     l:"Donated.",                         s:"₹0 unaccounted.", hi:false },
                  { n:"300",   l:"DoRight-approved NGOs on platform", s:"", hi:false },
                  { n:"2,097+",l:"Donors who know what happened",     s:"", hi:true },
                ].map((st, i)=>(
                  <div key={st.n} style={{
                    flex:1,
                    paddingRight:i < 2 ? 24 : 0,
                    marginRight:i < 2 ? 24 : 0,
                    borderRight:i < 2 ? `1px solid ${T.border}` : "none",
                  }}>
                    <p style={{ fontSize:28, fontWeight:900, lineHeight:1, color:st.hi?T.orange:T.dark, margin:"0 0 4px" }}>{st.n}</p>
                    <p style={{ fontSize:12, color:T.mid, margin:0, lineHeight:1.45 }}>{st.l}{st.s && <><br />{st.s}</>}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — cards */}
            <div className="live-right" style={{ display:"flex", flexDirection:"column", gap:12 }}>

              {/* Live feed */}
              <motion.div variants={scaleIn} style={{
                background:T.bgWhite, borderRadius:20,
                border:`1px solid ${T.border}`,
                overflow:"hidden",
              }}>
                <div style={{
                  display:"flex", justifyContent:"space-between", alignItems:"center",
                  padding:"14px 20px", borderBottom:`1px solid ${T.border}`,
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <motion.span animate={{ opacity:[1,0.2,1] }}
                      transition={{ duration:1.2, repeat:Infinity }}
                      style={{ width:8, height:8, borderRadius:"50%", background:T.orange }} />
                    <span style={{ fontSize:11, fontWeight:700, color:T.light, letterSpacing:"0.08em" }}>LIVE GIVING FEED</span>
                  </div>
                  <span style={{ background:T.orange, color:"#fff", fontSize:10, fontWeight:700, borderRadius:6, padding:"3px 10px", letterSpacing:"0.06em" }}>LIVE</span>
                </div>
                <div style={{ height:260, overflow:"hidden" }}>
                  {feed.map((item,i)=>(
                    <motion.div key={`feed-row-${i}`}
                      whileHover={{ backgroundColor:T.bgGray }}
                      animate={{ backgroundColor:"rgba(255,255,255,0)" }}
                      transition={{ duration:0.25 }}
                      style={{
                        display:"flex", alignItems:"center",
                        minHeight:65, boxSizing:"border-box",
                        padding:"13px 18px",
                        borderBottom: i<feed.length-1 ? `1px solid ${T.border}` : "none",
                        position:"relative",
                      }}>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={item.id}
                          initial={{ opacity:0, y:5 }}
                          animate={{ opacity:1, y:0 }}
                          exit={{ opacity:0, y:-5 }}
                          transition={{ duration:0.2, ease:EASE }}
                          style={{
                            display:"flex", alignItems:"center", gap:12,
                            width:"100%",
                            willChange:"opacity, transform",
                          }}
                        >
                          <div style={{
                            width:38, height:38, borderRadius:"50%",
                            background:item.tone === "orange" ? T.orange : item.tone === "gray" ? T.border : T.orangePale,
                            display:"flex", alignItems:"center", justifyContent:"center",
                            fontWeight:700, fontSize:15,
                            color:item.tone === "orange" ? "#fff" : item.tone === "gray" ? T.dark : T.orange,
                            flexShrink:0,
                          }}>{item.initials}</div>
                          <div style={{ flex:1, minWidth:0 }}>
                            <p style={{ margin:0, fontWeight:700, fontSize:14, color:T.dark, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{item.name} · {item.city}</p>
                            <p style={{ margin:"1px 0 0", fontSize:12, color:T.light, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{item.org} · {item.cause}</p>
                          </div>
                          <div style={{ textAlign:"right", minWidth:92, flexShrink:0 }}>
                            <p style={{ margin:0, fontWeight:600, fontSize:13, color:T.orange, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{item.amount}</p>
                            <p style={{ margin:0, fontSize:11, color:T.light, whiteSpace:"nowrap" }}>{item.time}</p>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Campaign preview */}
              <motion.div variants={scaleIn} style={{
                background:T.bgWhite, borderRadius:20, overflow:"hidden",
                border:`1px solid ${T.border}`,
              }}>
                <div style={{ height:110, position:"relative", overflow:"hidden" }}>
                  <img
                    src={heroImage3}
                    alt=""
                    aria-hidden="true"
                    style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}
                  />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.18),transparent)" }} />
                  <span style={{
                    position:"absolute", top:12, left:12,
                    background:"rgba(255,255,255,0.94)", backdropFilter:"blur(4px)",
                    fontSize:10, fontWeight:700, color:T.dark,
                    borderRadius:999, padding:"4px 12px", textTransform:"uppercase", letterSpacing:"0.06em",
                  }}>Environment</span>
                  <span style={{
                    position:"absolute", top:12, right:12,
                    background:T.orange, color:"#fff",
                    fontSize:10, fontWeight:700, borderRadius:6, padding:"3px 9px",
                  }}>Verified</span>
                </div>
                <div style={{ padding:"18px 20px 22px" }}>
                  <p style={{ fontWeight:600, fontSize:15, color:T.dark, margin:"0 0 4px" }}>10,000 Trees — Reforest Vidarbha</p>
                  <p style={{ fontSize:12.5, color:T.light, margin:"0 0 14px" }}>GreenRoots India · Nagpur Region</p>
                  <div style={{ background:T.border, borderRadius:99, height:6, overflow:"hidden", marginBottom:8 }}>
                    <motion.div initial={{ width:0 }} whileInView={{ width:"34%" }}
                      transition={{ duration:1.3, ease:"easeOut" }}
                      style={{ background:T.orange, height:"100%", borderRadius:99 }} />
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", gap:10, flexWrap:"wrap" }}>
                    <span style={{ fontSize:12, color:T.mid }}>Raised <strong style={{ color:T.dark }}>₹68,000</strong> of ₹1L</span>
                    <span style={{ fontSize:12, color:T.mid }}>⏱ 11 days left</span>
                  </div>
                </div>
              </motion.div>

              {/* Dark card */}
              <motion.div variants={scaleIn} style={{
                background:T.dark, borderRadius:20, padding:"22px 20px", color:"#fff",
              }}>
                <p style={{ fontWeight:700, fontSize:11, letterSpacing:"0.09em", color:"rgba(255,255,255,.4)", textTransform:"uppercase", margin:"0 0 16px" }}>
                  WHAT HAPPENS AFTER →
                </p>
                {[
                  { b:"Your Life score updates",  s:"— instantly, across all giving types" },
                  { b:"Field photo from the NGO", s:"— within 7 days, always" },
                  { b:"Your impact, live",         s:"— money, time, things, all in one place" },
                ].map(r=>(
                  <div key={r.b} style={{ display:"flex", gap:12, marginBottom:13 }}>
                    <span style={{ width:8, height:8, borderRadius:"50%", background:T.orange, flexShrink:0, marginTop:6 }} />
                    <p style={{ margin:0, fontSize:14, lineHeight:1.5, color:"rgba(255,255,255,.75)" }}>
                      <strong style={{ fontWeight:600 }}>{r.b}</strong>{r.s}
                    </p>
                  </div>
                ))}
                <div style={{ marginTop:18, paddingTop:16, borderTop:"1px solid rgba(255,255,255,.08)", display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ display:"flex" }}>
                    {["A","R","P","+"].map((l,i)=>(
                      <div key={l} style={{
                        width:26, height:26, borderRadius:"50%",
                        background: i===0 ? T.orange : i===1 ? T.orangeMid : i===2 ? T.light : T.light,
                        border:`2px solid ${T.dark}`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontSize:10, fontWeight:700,
                        color:"#fff",
                        marginLeft: i>0 ? -6 : 0,
                      }}>{l}</div>
                    ))}
                  </div>
                  <div>
                    <p style={{ margin:0, fontWeight:700, fontSize:13 }}>2,000+ donors. Every act proven.</p>
                    <p style={{ margin:"1px 0 0", fontSize:12, color:"rgba(255,255,255,.4)" }}>Join them · free app · takes 2 min</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── §3  NGO MARQUEE ────────────────────────────────────────────────────────*/
const NGOSection: React.FC = () => {
  const items = useMemo(()=>[...NGOS,...NGOS,...NGOS,...NGOS],[]);
  const CW = 224, GAP = 14;
  const [paused, setPaused] = useState(false);

  return (
    <section style={{ padding:"80px 0", background:T.bgWhite }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom:10 }}>
            <Pill label="Verified Partners" />
          </motion.div>
          <motion.div variants={fadeUp} style={{
            display:"flex", justifyContent:"space-between",
            alignItems:"flex-end", flexWrap:"wrap", gap:16, marginBottom:44,
          }}>
            <div>
              <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:300, color:T.dark, margin:"10px 0 10px", letterSpacing:0 }}>
                Support trusted NGOs
              </h2>
              <p style={{ fontSize:16, color:T.mid, maxWidth:480, lineHeight:1.8, margin:0, fontWeight:400 }}>
                Every organisation goes through 30+ verification checks before joining DoRight. Give with complete confidence.
              </p>
            </div>
            <TxtLink href="/ngos">Explore All NGOs →</TxtLink>
          </motion.div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div
style={{
overflow:"hidden",
maxWidth:"1120px",
margin:"0 auto",
maskImage:"linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)",
WebkitMaskImage:"linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)",
}}
>
        <div
className={`ngo-track ${paused ? "paused" : ""}`}
style={{
display:"flex",
padding:"5px",
gap:GAP,
width:"max-content",
}}
>
          {items.map((ngo, i) => (
  <motion.div
    key={`${ngo.id}-${i}`}
    className="ngo-card"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    whileHover={{
      y: -3,
      scale: 1.02,
      borderColor: T.orange,
      boxShadow: "0 14px 32px rgba(0,0,0,0.10)",
      transition: { duration: 0.25 },
    }}
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: CW,
      flexShrink: 0,
      cursor: "pointer",
      background: "#fff",
      border: `1px solid ${T.border}`,
      borderRadius: "999px",
      padding: "12px 18px",
      whiteSpace: "nowrap",
      transition: "all .25s ease",
      boxShadow: "0 2px 10px rgba(0,0,0,.04)",
    }}
  >
    <motion.div
      whileHover={{ scale: 1.08 }}
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: ngo.color + "18",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <span
        style={{
          color: ngo.color,
          fontWeight: 700,
          fontSize: 12,
        }}
      >
        {ngo.initials}
      </span>
    </motion.div>

    <div
      style={{
        overflow: "hidden",
      }}
    >
      <p
        style={{
          margin: 0,
          color: T.mid,
          fontWeight: 600,
          fontSize: 15,
          lineHeight: 1.2,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {ngo.name}
      </p>

      <p
        style={{
          margin: "3px 0 0",
          color: T.light,
          fontSize: 12,
          lineHeight: 1.2,
        }}
      >
        {ngo.cause}
      </p>
    </div>
  </motion.div>
))}

        </div>
      </div>

      <div style={{ textAlign:"center", marginTop:28 }}>
        <TxtLink href="/ngos">View all 42 verified NGOs →</TxtLink>
      </div>
    </section>

  );
};
/* ─── §4  CAMPAIGNS ──────────────────────────────────────────────────────────*/
const CampaignCard: React.FC<{ c:Campaign }> = memo(({ c }) => (
  <motion.div
    style={{
      background:T.bgWhite, borderRadius:20, overflow:"hidden",
      boxShadow:"0 2px 16px rgba(0,0,0,.06)", display:"flex", flexDirection:"column",
    }}
  >
    <div style={{ position:"relative", height:184, overflow:"hidden" }}>
      <motion.div
        whileHover={{ scale:1.04 }}
        transition={{ duration:0.5 }}
        style={{ position:"absolute", inset:0 }}
      >
        <img
          src={c.image}
          alt={c.title}
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:c.imagePosition }}
        />
      </motion.div>
      <span style={{
        position:"absolute", top:14, left:14,
        background:"rgba(255,255,255,0.94)", backdropFilter:"blur(6px)",
        fontSize:10, fontWeight:700, letterSpacing:"0.08em",
        color:T.dark, borderRadius:999, padding:"4px 12px", textTransform:"uppercase",
      }}>{c.tag}</span>
      <span style={{
        position:"absolute", top:14, right:14,
        background:T.orange, color:"#fff", fontSize:11, fontWeight:700,
        borderRadius:999, padding:"4px 12px",
      }}>● Live</span>
    </div>
    <div style={{ padding:22, flex:1, display:"flex", flexDirection:"column" }}>
      <p style={{ fontWeight:600, fontSize:16, color:T.dark, margin:"0 0 8px", lineHeight:1.4 }}>{c.title}</p>
      <p style={{ color:T.mid, fontSize:14, lineHeight:1.75, margin:"0 0 18px", flex:1, fontWeight:400 }}>{c.description}</p>
      <div>
        <div style={{ background:T.border, borderRadius:99, height:6, overflow:"hidden" }}>
          <motion.div initial={{ width:0 }} whileInView={{ width:`${c.pct}%` }}
            transition={{ duration:1.2, ease:"easeOut" }}
            style={{ background:T.orange, height:"100%", borderRadius:99 }} />
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", marginTop:8 }}>
          <span style={{ fontWeight:600, fontSize:13.5, color:T.dark }}>{c.raised} raised</span>
          <span style={{ fontSize:13, color:T.light }}>Goal: {c.goal}</span>
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:18 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <div style={{
            width:26, height:26, borderRadius:"50%", background:c.orgColor+"20",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:10, fontWeight:700, color:c.orgColor,
          }}>{c.orgInitials}</div>
          <span style={{ fontSize:13, color:T.mid, fontWeight:400 }}>{c.org}</span>
        </div>
        <Btn href="/campaigns" style={{ padding:"10px 20px", fontSize:13 }}>Donate Now</Btn>
      </div>
    </div>
  </motion.div>
));

const CampaignsSection: React.FC = () => (
      <section style={{ padding:"80px 0", background:T.bgGray }}>
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
      <Reveal>
        <motion.div variants={fadeUp} style={{ marginBottom:10 }}>
          <Pill label="Live Now" dot />
        </motion.div>
        <motion.div variants={fadeUp} style={{
          display:"flex", justifyContent:"space-between",
          alignItems:"flex-end", flexWrap:"wrap", gap:12, marginBottom:44,
        }}>
          <h2 style={{ fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:300, color:T.dark, margin:0, lineHeight:1.2, letterSpacing:0 }}>
            Ongoing campaigns<br />you can support
          </h2>
          <TxtLink href="/campaigns">View All Campaigns →</TxtLink>
        </motion.div>
        <motion.div className="campaign-grid" variants={staggerFast} style={{
          display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20,
        }}>
          {CAMPAIGNS.map(c=><CampaignCard key={c.id} c={c} />)}
        </motion.div>
        <motion.div variants={fadeUp} style={{ textAlign:"center", marginTop:44 }}>
          <TxtLink href="/campaigns">View More Campaigns →</TxtLink>
        </motion.div>
      </Reveal>
    </div>
  </section>
);

/* ─── §5  HOW IT WORKS ───────────────────────────────────────────────────────*/
const HOW_ICONS = [
  <svg key="s" viewBox="0 0 100 100" width="80" height="80" fill="none">
    <circle cx="42" cy="42" r="28" stroke={T.orange} strokeWidth="6" fill={T.orangePale} opacity="0.9"/>
    <line x1="62" y1="62" x2="86" y2="86" stroke={T.dark} strokeWidth="8" strokeLinecap="round"/>
  </svg>,
  <svg key="l" viewBox="0 0 100 100" width="80" height="80" fill="none">
    <rect x="18" y="44" width="64" height="42" rx="10" fill={T.orangePale} stroke={T.orange} strokeWidth="5"/>
    <path d="M32 44V34a18 18 0 0 1 36 0v10" stroke={T.dark} strokeWidth="6" strokeLinecap="round" fill="none"/>
    <circle cx="50" cy="65" r="6" fill={T.orange}/>
  </svg>,
  <svg key="p" viewBox="0 0 100 100" width="80" height="80" fill="none">
    <circle cx="50" cy="40" r="26" fill={T.orangePale} stroke={T.orange} strokeWidth="5"/>
    <circle cx="50" cy="40" r="10" fill={T.orange}/>
    <path d="M50 66 Q50 84 50 92" stroke={T.orange} strokeWidth="6" strokeLinecap="round"/>
    <ellipse cx="50" cy="93" rx="16" ry="5" fill={T.border} opacity="0.6"/>
  </svg>,
];

const HowSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const step = HOW_STEPS[active];

  return (
    <section id="how-it-works" style={{ padding:"80px 0", background:T.bgWhite }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom:10 }}>
            <Pill label="The Process" />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{
            fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:300,
            color:T.dark, margin:"10px 0 36px", letterSpacing:0,
          }}>
            How Do<span style={{ color:T.orange, fontWeight:700 }}>Right</span> works?
          </motion.h2>
        </Reveal>

        {/* Tab bar */}
        <div style={{ display:"flex", borderBottom:`1px solid ${T.border}`, marginBottom:56, }}>
          {HOW_STEPS.map((s,i)=>(
            <button key={s.id} onClick={()=>setActive(i)} style={{
              background:"none", border:"none", cursor:"pointer",
              padding:"14px 32px", whiteSpace:"nowrap",
              fontSize:14.5, fontWeight: i===active ? 600 : 400,
              color: i===active ? T.dark : T.light,
              borderBottom: i===active ? `2.5px solid ${T.orange}` : "2.5px solid transparent",
              transition:"all 0.25s", fontFamily:"inherit",
              marginBottom:-1,
            }}>
              <span style={{ color:T.orange, marginRight:8, fontWeight:700 }}>0{i+1}.</span>
              {s.label}
            </button>
          ))}
        </div>

        <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <AnimatePresence mode="wait">
            <motion.div key={active+"-ill"}
              initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}
              exit={{ opacity:0, scale:0.95 }} transition={{ duration:0.4 }}
              style={{
                background:T.bgGray, borderRadius:T.r24, minHeight:340,
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
              {HOW_ICONS[active]}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div key={active+"-txt"}
              initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x:-24 }} transition={{ duration:0.4 }}>
              <h3 style={{
                fontSize:"clamp(1.5rem,2.4vw,2.1rem)", fontWeight:300,
                color:T.dark, margin:"0 0 10px", lineHeight:1.28, letterSpacing:0,
              }}>
                {step.headline} <strong style={{ fontWeight:700 }}>{step.bold}</strong>
              </h3>
              {step.body.split("\n\n").map((p,i)=>(
                <p key={i} style={{ fontSize:15.5, color:T.mid, lineHeight:1.85, margin:"0 0 16px", fontWeight:400 }}>{p}</p>
              ))}
              <TxtLink href="/about" style={{ fontSize:14.5, fontWeight:600 }}>{step.link}</TxtLink>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ─── §6  APP SECTION ────────────────────────────────────────────────────────*/
const AppSection: React.FC = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="download" style={{ padding: "80px 0", background: T.bgWhite, overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <motion.span variants={fadeUp} style={{
            display: "block",
            fontSize: 11, fontWeight: 700, color: T.orange,
            letterSpacing: "0.13em", textTransform: "uppercase",
            marginBottom: 20,
          }}>
            Free App · iOS &amp; Android
          </motion.span>

          <motion.h2 variants={fadeUp} style={{
            textAlign: "left", fontSize: 45, fontWeight: 400,
            lineHeight: 1.12, color: T.dark, margin: "0 0 16px",
          }}>
            Every act earns<br />a Life.
          </motion.h2>

          <motion.p variants={fadeUp} style={{
            textAlign: "left", fontSize: 16, color: "#666",
            maxWidth: 600, margin: "0 0 64px", lineHeight: 1.75,
          }}>
            Money, time, things, purchases — DoRight converts everything into
            one score. Watch your Lives grow every month.
          </motion.p>

          {/* 2-col body */}
          <div className="app-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}>

            {/* Left: accordion + download */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 0 }}>
                {APP_FEATURES.map((f, i) => (
                  <motion.div
                    key={f.id}
                    layout
                    variants={fadeUp}
                    onClick={() => setActive(i)}
                    transition={{ layout: { duration: 0.28, ease: EASE } }}
                    style={{
                      background: i === active ? "#F8F8F8" : "transparent",
                      borderRadius: 18,
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "background .3s ease",
                    }}
                  >
                    {/* Head */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "18px 20px",
                    }}>
                      <span style={{
                        fontSize: 12, fontWeight: 700, color: T.orange,
                        width: 24, flexShrink: 0,
                      }}>{f.step}</span>
                      <span style={{
                        fontSize: 16,
                        fontWeight: i === active ? 700 : 500,
                        color: i === active ? T.dark : T.mid,
                        transition: "all .3s ease",
                      }}>{f.title}</span>
                    </div>

                    {/* Body */}
                    <AnimatePresence initial={false} mode="popLayout">
                      {i === active && f.detail && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: EASE }}
                          style={{ overflow: "hidden" }}
                        >
                          <p style={{
                            fontSize: 14, color: T.mid, lineHeight: 1.7,
                            paddingLeft: 40, paddingBottom: 16,
                            paddingRight: 20, margin: 0, fontWeight: 400,
                          }}>{f.detail}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Orange bar */}
                    <motion.div
                      animate={{ scaleX: i === active ? 1 : 0 }}
                      initial={{ scaleX: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      style={{
                        height: 3, background: T.orange,
                        transformOrigin: "left",
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Download row */}
              <motion.div variants={fadeUp} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
                marginTop: 48,
                paddingTop: 32,
                borderTop: `1px solid ${T.border}`,
              }}>
                <div>
                  <p style={{ fontSize: 18, fontWeight: 700, color: T.dark, margin: "0 0 5px" }}>
                    Download DoRight — free forever
                  </p>
                  <p style={{ fontSize: 13, color: T.light, margin: 0, fontWeight: 400 }}>
                    iOS &amp; Android · Give money, time, things · See your Lives score
                  </p>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  {[
                    { s: "App Store",    l: "Download on the", href: APP_STORE_URL, Icon: FaApple,      variant: "dark"  },
                    { s: "Google Play",  l: "Get it on",       href: PLAY_STORE_URL, Icon: FaGooglePlay, variant: "light" },
                  ].map(({ s, l, href, Icon, variant }) => (
                    <motion.a
                      key={s}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${l} ${s}`}
                      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,.15)" }}
                      whileTap={{ scale: 0.96 }}
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "11px 22px",
                        borderRadius: T.r16,
                        background: variant === "dark" ? T.dark : "#fff",
                        color:      variant === "dark" ? "#fff" : T.dark,
                        border: variant === "dark"
                          ? `2px solid ${T.dark}`
                          : `2px solid ${T.border}`,
                        fontSize: 13, fontWeight: 600,
                        fontFamily: "inherit", textDecoration: "none",
                        cursor: "pointer", transition: "all .25s ease",
                      }}
                    >
                      {React.createElement(
                        Icon as React.ComponentType<{ size: number; "aria-hidden": boolean; style: React.CSSProperties }>,
                        { size: 20, "aria-hidden": true, style: { flexShrink: 0 } }
                      )}
                      <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
                        <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>{l}</span>
                        <span>{s}</span>
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: phone mockup */}
            <motion.div
              className="app-phone-wrap"
              variants={scaleIn}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              {/* Glow halo */}
              <div style={{
                position: "absolute",
                width: 420, height: 420,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(250,169,80,.10), transparent 70%)",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }} />

              {/* Phone shell */}
              <div style={{
                width: 310,
                maxWidth: "min(310px, 82vw)",
                aspectRatio: "9 / 18",
                background: "linear-gradient(145deg,#2c2c2c,#060606 52%,#323232)",
                borderRadius: 46,
                border: "2px solid #3a3a3a",
                padding: 8,
                overflow: "visible",
                boxShadow: "0 36px 86px rgba(0,0,0,.34), inset 0 0 0 1px rgba(255,255,255,.12)",
                position: "relative", zIndex: 1,
                display: "flex", flexDirection: "column",
              }}>
                <span aria-hidden="true" style={{
                  position:"absolute", left:-5, top:96, width:4, height:44,
                  borderRadius:"4px 0 0 4px", background:"#222",
                  boxShadow:"0 82px 0 #222, 0 132px 0 #222",
                }} />
                <span aria-hidden="true" style={{
                  position:"absolute", right:-5, top:150, width:4, height:78,
                  borderRadius:"0 4px 4px 0", background:"#222",
                }} />

                {/* Screen body */}
                <div style={{
                  background: "radial-gradient(circle at 50% 28%, rgba(255,175,95,.08), transparent 28%), linear-gradient(145deg,#1b1b1b,#090909 60%,#151515)",
                  flex: 1,
                  display: "flex", flexDirection: "column",
                  borderRadius: 38,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,.08)",
                  position:"relative",
                }}>
                  <div style={{
                    height: 50,
                    padding: "0 24px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    color:"#fff",
                    fontSize:14,
                    fontWeight:700,
                    flexShrink:0,
                  }}>
                    <span>9:41</span>
                    <div style={{
                      position:"absolute", top:15, left:"50%",
                      transform:"translateX(-50%)",
                      width:92, height:30,
                      background:"#050505",
                      borderRadius:999,
                      boxShadow:"inset 0 0 0 1px rgba(255,255,255,.03)",
                    }} />
                    <span aria-hidden="true" style={{
                      position:"absolute", top:25, left:"calc(50% + 29px)",
                      width:7, height:7, borderRadius:"50%",
                      background:"#071528",
                      boxShadow:"0 0 5px rgba(57,112,255,.45)",
                    }} />
                    <span style={{ fontSize:12, letterSpacing:1 }}>▮▮▮ ᯤ ▰</span>
                  </div>
                  <div style={{
                  padding: "18px 24px 14px",
                  flex: 1,
                  display: "flex", flexDirection: "column",
                }}>
                  <p style={{
                    fontSize: 12, fontWeight: 800, letterSpacing: ".16em",
                    textTransform: "uppercase", color: "rgba(255,255,255,.35)",
                    margin:"0 0 8px",
                  }}>Your Giving Today.</p>

                  <h2 style={{ fontSize: 50, lineHeight:.92, fontWeight: 900, color: "#fff", margin: "0 0 12px", letterSpacing:0 }}>Give</h2>

                  <p style={{
                    fontSize: 16, fontWeight: 800, color: T.orange,
                    margin:"0 0 24px", letterSpacing: 0,
                  }}>Money · Time · Things · Products</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    {[
                      { name: "Handwoven Tote Bag",      by: "Shakti Women's Collective", price: "₹480", image: productImage1 },
                      { name: "Organic Honey (250g)",     by: "AarogyaSeva Trust",         price: "₹220", image: productImage2 },
                      { name: "Recycled Paper Journal",   by: "GreenRoots India",           price: "₹150", image: productImage3 },
                    ].map(item => (
                      <div key={item.name} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        background: "rgba(255,255,255,.08)", borderRadius: 16, padding: 10,
                      }}>
                        <img
                          src={item.image}
                          alt=""
                          aria-hidden="true"
                          style={{ width: 50, height: 50, borderRadius: 11, objectFit:"cover", flexShrink: 0 }}
                        />
                        <div style={{ flex: 1, minWidth:0 }}>
                          <p style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: 0, lineHeight: 1.2, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{item.name}</p>
                          <p style={{ fontSize: 11, color: "rgba(255,255,255,.62)", margin: "4px 0 0", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>by {item.by}</p>
                        </div>
                        <span style={{ fontSize: 16, fontWeight: 900, color: T.orange, flexShrink: 0 }}>{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA bar */}
                  <div style={{
                    background: "linear-gradient(135deg,#ffb55f,#f79a22)",
                    borderRadius: 13,
                    padding: "18px 16px",
                    textAlign: "center",
                    flexShrink: 0,
                    marginTop: "auto",
                    marginBottom: 22,
                  }}>
                    <p style={{
                      fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,.72)",
                      textTransform: "uppercase", letterSpacing: ".1em", margin:"0 0 6px",
                    }}>Today's Lives Earned</p>
                    <p style={{ fontSize: 18, fontWeight: 900, color: "#fff", margin: 0 }}>+4 Lives added</p>
                  </div>
                </div>
                  <span aria-hidden="true" style={{
                    position:"absolute",
                    left:"50%",
                    bottom:10,
                    transform:"translateX(-50%)",
                    width:112,
                    height:5,
                    borderRadius:999,
                    background:"#fff",
                    opacity:.95,
                  }} />
                </div>
              </div>
            </motion.div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── §7  TREE / IMPACT ──────────────────────────────────────────────────────*/
const ImpactSection: React.FC = () => (
  <section style={{ padding:"80px 0 100px", background:T.bgWhite, position:"relative", overflow:"hidden" }}>
    <div style={{
      position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
      width:700, height:700, borderRadius:"50%",
      background:"radial-gradient(circle,rgba(250,169,80,.07),transparent 60%)",
      pointerEvents:"none",
    }} />
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px", position:"relative", zIndex:1 }}>
      <Reveal>
        <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
          <motion.div
            variants={scaleIn}
            style={{ display:"flex", justifyContent:"center" }}>
            <img
              src={treeImage}
              alt="Small actions creating real change"
              style={{
                width:"min(420px,58%)",
                maxHeight:420,
                objectFit:"contain",
              }}
            />
          </motion.div>
          <div>
            <motion.div variants={fadeUp} style={{ marginBottom:16 }}>
              <Pill label="Our Belief" />
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontSize:"clamp(2rem,3.5vw,3rem)", fontWeight:300,
              color:T.dark, margin:"0 0 22px", lineHeight:1.15, letterSpacing:0,
            }}>
              Small Actions<br />Real Change
            </motion.h2>
            <motion.p variants={fadeUp} style={{ fontSize:16, color:T.mid, lineHeight:1.85, marginBottom:32, maxWidth:480, fontWeight:400 }}>
              Most giving disappears into silence. DoRight was built so that every act —
              however small — lands somewhere real, gets verified, and comes back to you as proof.
              Because doing right should feel different from doing nothing.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Btn href="/about">Read What We Believe →</Btn>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── §8  TESTIMONIALS ───────────────────────────────────────────────────────*/
const TCard: React.FC<{ t: Testimonial }> = memo(({ t }) => (
  <div
   style={{
  background: "#fff",
  borderRadius: 24,
  border: `1.5px solid ${T.border}`,
  overflow: "hidden",

  width: "100%",
  aspectRatio: "1 / 1",

  display: "flex",
  flexDirection: "column",

  boxShadow:
    "0 8px 0 0 #1A1A1A, 0 12px 32px rgba(0,0,0,.08)",
}}
  >
    {/* Content */}
    <div
      style={{
        padding: "28px 28px 24px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <span
        style={{
          fontSize: 40,
          color: T.orange,
          lineHeight: 1,
          fontFamily: "Georgia",
          fontWeight: 900,
        }}
      >
        "
      </span>

      <div
        style={{
          display: "flex",
          gap: 3,
          margin: 0,
          letterSpacing: 3,
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{
              color: T.orange,
              fontSize: 13,
            }}
          >
            ★
          </span>
        ))}
      </div>

      <p
        style={{
          color: T.dark,
          fontSize: 14,
          lineHeight: 1.75,
          margin: 0,
          flex: 1,
        }}
      >
        {t.quote}
      </p>

      <div
        style={{
          borderTop: `1px solid ${T.border}`,
          paddingTop: 16,
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: "auto",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: T.orangeAlpha,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: T.orange,
            fontSize: 12,
            flexShrink: 0,
          }}
        >
          {t.initials}
        </div>

        <div>
          <p
            style={{
              margin: 0,
              fontWeight: 700,
              color: T.dark,
              fontSize: 13,
            }}
          >
            {t.name}
          </p>

          <p
            style={{
              margin: "3px 0 0",
              color: T.light,
              fontSize: 11,
            }}
          >
            {t.role}
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        height: 18,
        background: T.orange,
        flexShrink: 0,
      }}
    />
  </div>
));

const TestimonialsSection: React.FC = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const dragX = useMotionValue(0);
  const isHovered = useRef(false);

  useEffect(()=>{
    const update = ()=>{
      setPerPage(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return ()=>window.removeEventListener("resize", update);
  },[]);

  const pages = Math.ceil(TESTIMONIALS.length / perPage);

  useEffect(()=>{ setPage(p=>Math.min(p, pages-1)); },[pages]);

  const onDragEnd = useCallback((_:unknown, info:PanInfo)=>{
    if (info.offset.x < -50) setPage(p=>(p+1)%pages);
    else if (info.offset.x > 50) setPage(p=>(p-1+pages)%pages);
  },[pages]);

  const prevPage = useCallback(() => setPage(p => (p - 1 + pages) % pages), [pages]);
  const nextPage = useCallback(() => setPage(p => (p + 1) % pages), [pages]);

  const visible = useMemo(
    ()=>TESTIMONIALS.slice(page*perPage, page*perPage+perPage),
    [page, perPage]
  );

  return (
    <section style={{ padding:"80px 0", background:T.bgGray }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <Reveal>
          <motion.div variants={fadeUp} style={{ marginBottom:10 }}>
            <Pill label="Real Stories" />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{
            fontSize:"clamp(2.35rem,3.5vw,2.85rem)", fontWeight:400,
            color:T.dark, margin:"10px 0 44px", letterSpacing:0,
          }}>
            Stories &amp; testimonials
          </motion.h2>
        </Reveal>

        <div className="testimonial-carousel" style={{ position:"relative" }}>
          <motion.button
            type="button"
            onClick={prevPage}
            aria-label="Previous testimonials"
            whileHover={{ background:T.orange, color:"#fff" }}
            className="testimonial-arrow testimonial-arrow-left"
            style={{
              position:"absolute",
              left:-18,
              top:"50%",
              transform:"translateY(-50%)",
              width:42,
              height:42,
              borderRadius:"50%",
              border:`1px solid ${T.border}`,
              background:"#fff",
              color:T.mid,
              boxShadow:"0 8px 24px rgba(0,0,0,.10)",
              zIndex:4,
              display:"grid",
              placeItems:"center",
              fontSize:25,
              lineHeight:1,
            }}
          >
            ‹
          </motion.button>

          <motion.div
            drag="x"
            dragConstraints={{ left:0, right:0 }}
            dragElastic={0.1}
            style={{ x:dragX, cursor:"grab", touchAction:"pan-y" }}
            onDragEnd={onDragEnd}
            onHoverStart={()=>{ isHovered.current=true; }}
            onHoverEnd={()=>{ isHovered.current=false; }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={page}
                initial={{ opacity:0, x:40 }}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-40 }}
                transition={{ duration:0.48, ease:EASE }}
                style={{
                  display:"grid",
                  gridTemplateColumns:`repeat(${perPage},1fr)`,
                  gap:24, alignItems:"stretch",
                }}>
                {visible.map(t=><TCard key={t.id} t={t} />)}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.button
            type="button"
            onClick={nextPage}
            aria-label="Next testimonials"
            whileHover={{background:T.orange, color:"#fff" }}
            className="testimonial-arrow testimonial-arrow-right"
            style={{
              position:"absolute",
              right:-18,
              top:"50%",
              transform:"translateY(-50%)",
              width:42,
              height:42,
              borderRadius:"50%",
              border:`1px solid ${T.border}`,
              background:"#fff",
              color:T.mid,
              boxShadow:"0 8px 24px rgba(0,0,0,.10)",
              zIndex:4,
              display:"grid",
              placeItems:"center",
              fontSize:25,
              lineHeight:1,
            }}
          >
            ›
          </motion.button>
        </div>

        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:36 }}>
          {Array.from({length:pages}).map((_,i)=>(
            <button key={i} onClick={()=>setPage(i)} aria-label={`Page ${i+1}`}
              style={{
                width: i===page ? 28 : 9, height:9, borderRadius:99,
                border:"none", cursor:"pointer", padding:0,
                background: i===page ? T.orange : T.border,
                transition:"all 0.35s ease",
              }} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── §9  PRESS ──────────────────────────────────────────────────────────────*/
const PressSection: React.FC = () => (
  <section style={{ padding: "80px 0", background: T.bgWhite, overflow: "hidden" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
      <Reveal>
        <motion.p variants={fadeUp} style={{
          textAlign: "center", fontSize: 15, fontWeight: 600,
          letterSpacing: "0.12em", color: T.light,
          textTransform: "uppercase", marginBottom: 48,
        }}>
          BUILDING IMPACT, RECOGNISED WIDELY
        </motion.p>
      </Reveal>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="press-marquee"
          style={{
            display: "flex",
            gap: 20,
            width: "max-content",
            animation: "pressMarquee 28s linear infinite",
          }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[...PRESS, ...PRESS].map((item, i) => {
            const brand = PRESS_STYLE[item.outlet] ?? {};
            return (
              <div key={`${item.id}-${i}`}
                style={{
                  flex: "0 0 300px",
                  background: T.bgWhite,
                  border: `1px solid ${T.border}`,
                  borderRadius: 20,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  cursor: "default",
                }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{
                    fontWeight: 800, fontSize: 13, color: item.color,
                    fontFamily: brand.family,
                    fontStyle: brand.italic ? "italic" : "normal",
                    textTransform: brand.uppercase ? "uppercase" : "none",
                    letterSpacing: brand.letterSpacing,
                  }}>{item.outlet}</span>
                  <span style={{ fontSize: 11, color: T.light }}>{item.date}</span>
                </div>
                <p style={{ fontWeight: 600, fontSize: 15, color: T.dark, lineHeight: 1.45, margin: 0, flex: 1 }}>
                  <span style={{ color: T.orange, fontSize: 22, lineHeight: 0, verticalAlign: "-6px", marginRight: 2 }}>"</span>
                  {item.headline}
                </p>
                <p style={{ fontSize: 13, color: T.mid, lineHeight: 1.65, margin: 0, fontWeight: 400 }}>{item.body}</p>
                <TxtLink href="/blog" style={{ fontSize: 12, fontWeight: 700, marginTop: "auto" }}>Read Article →</TxtLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <style>{`
      @keyframes pressMarquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

/* ─── §10 FINAL CTA ──────────────────────────────────────────────────────────*/
const CTASection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="final-cta"
      ref={ref}
      style={{ padding: "40px 0 140px", background: T.bgWhite }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
        <Reveal>
          <motion.div
            className="cta-card"
            variants={scaleIn}
            whileHover={{ y: -4 }}
            style={{
              background: "#e8e8e8",
              borderRadius: 28,
              boxShadow: "0 8px 0 0 #1a1a1a, 0 14px 36px rgba(0,0,0,.12)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              padding: "68px 52px",
              minHeight: 260,
            }}
          >
            {/* Left content */}
            <div
              style={{
                flex: 1,
                position: "relative",
                zIndex: 1,
                textAlign: "left",
              }}
            >
              <h2
                style={{
                  fontSize: 35,
                  fontWeight: 500,
                  color: "#333333",
                  whiteSpace: "nowrap",
                  lineHeight: 1.3,
                  margin: "0 0 6px",
                  letterSpacing: 0,
                }}
              >
                Ready to Make a Difference?
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: T.mid,
                  margin: "0 0 12px",
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Join a community that believes in meaningful, transparent giving.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <Btn
                  href="/ngos"
                  style={{
                    padding: "12px 28px",
                    fontSize: 13,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    width: "auto",
                  }}
                >
                  JOIN NOW
                </Btn>
              </div>
            </div>

            {/* Right video panel */}
            <div
              className="cta-video-wrap"
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: -1,
                width: "calc(34% + 2px)",
                height: "100%",
                background: "#e8e8e8",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{
                  width: "calc(100% + 2px)",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  marginLeft: -1,
                  border: "none",
                  outline: "none",
                }}
              >
                <source src={actForImpactVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── HOME ───────────────────────────────────────────────────────────────────*/
const Home: React.FC = () => (
  <>
    <Navbar />
    <main style={{ overflowX:"hidden", background:T.bgWhite }}>
      <Hero />
      <LiveSection />
      <NGOSection />
      <CampaignsSection />
      <div style={{ height:5, background:`linear-gradient(90deg,${T.orange} 0%,${T.orangeMid} 50%,${T.orangeLight} 100%)` }} />
      <HowSection />
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <hr style={{ border:"none", borderTop:`1px solid ${T.border}`, margin:0 }} />
      </div>
      <AppSection />
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 28px" }}>
        <hr style={{ border:"none", borderTop:`1px solid ${T.border}`, margin:0 }} />
      </div>
      <ImpactSection />
      <TestimonialsSection />
      <PressSection />
      <CTASection />
    </main>
    <Footer />

    <style>{`
      *, *::before, *::after { box-sizing: border-box; }
      body { margin: 0; -webkit-font-smoothing: antialiased; background: #ffffff; }
      html, body { overflow-x: hidden; }

      .hero-card {
        transition: min-height 0.2s ease, width 0.2s ease;
      }

      /* ── Hero responsive ── */
      @media (max-width: 1024px) {
        .hero-card {
          min-height: 430px !important;
        }
        .hero-center {
          clip-path: polygon(0 0, 34% 0, 46% 100%, 0 100%) !important;
        }
        .hero-copy {
          width: 33% !important;
          padding-left: 32px !important;
          padding-right: 16px !important;
        }
        .hero-right {
          left: 34% !important;
          width: 66% !important;
        }
      }

      @media (max-width: 767px) {
        .home-hero-section {
          padding-top: 28px !important;
        }
        .hero-shell {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .hero-card {
          min-height: 430px !important;
          border-radius: 20px !important;
        }
        .hero-center {
          clip-path: none !important;
          background: linear-gradient(to top, rgba(10,10,10,.88) 0%, rgba(10,10,10,.48) 48%, transparent 78%) !important;
        }
        .hero-copy {
          top: auto !important;
          bottom: 0 !important;
          transform: none !important;
          width: 100% !important;
          padding: 28px 24px !important;
          color: #fff !important;
        }
        .hero-copy h1 {
          color: #fff !important;
          font-size: 28px !important;
          line-height: 1.12 !important;
        }
        .hero-copy h1 strong { color: #FDC99A !important; }
        .hero-copy p {
          color: rgba(255,255,255,.82) !important;
          font-size: 14px !important;
          line-height: 1.65 !important;
        }
        .hero-right {
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          object-position: center top !important;
        }
        .hero-clip > button[aria-label="Previous"],
        .hero-clip > button[aria-label="Next"] {
          display: none !important;
        }
        .hero-actions {
          flex-wrap: wrap !important;
        }
      }

      /* ── Two-col → single ── */
      @media (max-width: 960px) {
        .two-col {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
        }
      }

      /* ── App: hide phone on tablet ── */
      @media (max-width: 1100px) {
        .app-grid  { grid-template-columns: 1fr !important; }
        .app-phone { display: none !important; }
      }

      /* ── Campaign / press grids ── */
      .press-grid::-webkit-scrollbar {
        height: 14px;
      }
      .press-grid::-webkit-scrollbar-track {
        background: transparent;
      }
      .press-grid::-webkit-scrollbar-thumb {
        background: #dedede;
        border-radius: 999px;
        border: 4px solid #ffffff;
      }

      @media (max-width: 640px) {
        .campaign-grid { grid-template-columns: 1fr !important; }
      }

      @media (max-width: 640px) {
        .live-active-pill {
          align-items: flex-start !important;
          border-radius: 16px !important;
          flex-wrap: wrap !important;
        }
        .live-stats {
          flex-direction: column !important;
          gap: 18px !important;
        }
        .live-stats > div {
          border-right: none !important;
          border-bottom: 1px solid ${T.border} !important;
          margin-right: 0 !important;
          padding-right: 0 !important;
          padding-bottom: 18px !important;
        }
        .live-stats > div:last-child {
          border-bottom: none !important;
          padding-bottom: 0 !important;
        }
      }

      @media (max-width: 720px) {
        .testimonial-arrow {
          top: auto !important;
          bottom: -62px !important;
          transform: none !important;
          width: 38px !important;
          height: 38px !important;
        }
        .testimonial-arrow-left {
          left: calc(50% - 82px) !important;
        }
        .testimonial-arrow-right {
          right: calc(50% - 82px) !important;
        }
      }

      /* ── CTA card ── */
      @media (max-width: 640px) {
        .cta-card {
          padding: 44px 28px !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 24px !important;
          min-height: auto !important;
        }
        .cta-card > div:first-child {
          padding: 0 !important;
          flex-basis: auto !important;
          width: 100% !important;
        }
        .cta-card h2 {
          white-space: normal !important;
          font-size: 28px !important;
          line-height: 1.18 !important;
        }
        .cta-impact-panel {
          width: 100% !important;
          max-width: none !important;
          flex-basis: auto !important;
          min-height: 170px !important;
          border-left: none !important;
          border-top: 1px solid rgba(0,0,0,.12) !important;
        }
        .cta-card a { width: 100% !important; justify-content: center; }
      }

      /* ── Section padding on mobile ── */
      @media (max-width: 640px) {
        section { padding-left: 20px !important; padding-right: 20px !important; }
      }

      /* ── Reduced motion ── */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  </>
);

export default Home;
