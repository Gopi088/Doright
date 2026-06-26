import { useState } from "react";
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
import "./Reference.css";
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
      "When I asked my father about it, he just shrugged. \"It wasn't a big deal.\" But it was. It was everything.",
    ],
  },
  {
    eyebrow: "Our Story",
    title: "Meet Pranav Gandhi,",
    subtitle: "Our Founder.",
    intro: "A Kindness-First Platform to Give, Volunteer, and See Real Change",
    paragraphs: [
      "That lesson stayed with me: giving is not a performance. It is a character trait, a quiet decision, and a way of showing up when someone needs you.",
      "DoRight began with that feeling — the wish to make small acts easier, clearer, and more visible for anyone who wants to help.",
    ],
  },
  {
    eyebrow: "Our Story",
    title: "Meet Pranav Gandhi,",
    subtitle: "Our Founder.",
    intro: "A Kindness-First Platform to Give, Volunteer, and See Real Change",
    paragraphs: [
      "The platform is built for everyday people with generous hearts. Not just donors, not just volunteers — people who believe kindness deserves a simple place to begin.",
      "This is our story. We hope it becomes yours too.",
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
  },
  {
    name: "Pranav Gandhi",
    role: "Founder and CEO",
    bio: "A dynamic business leader, Pranav has 26+ years of experience across diverse industries. He blends smart strategies with passionate execution and turns ideas into successful businesses.",
    image: member2,
  },
  {
    name: "Akshata Chandavarkar",
    role: "Co-Founder and CIIO",
    bio: "With 20 years of global experience, Akshata leads in AI, GRC, Cybersecurity, and HR Transformation. She believes that technology is a tool to drive collaboration and create a positive impact.",
    image: member3,
  },
];

export default function About() {
  const [founderSlide, setFounderSlide] = useState(0);
  const activeFounder = founderSlides[founderSlide];

  return (
    <div className="dr-page dr-about-refined">
      <Navbar />

      <section className="about-founder-hero">
        <div className="about-wrap about-founder-grid">
          <div className="about-founder-copy">
            <span className="about-pill"><i /> {activeFounder.eyebrow}</span>
            <h1><strong>{activeFounder.title}</strong><br />{activeFounder.subtitle}</h1>
            <p className="about-founder-intro">{activeFounder.intro.replace("Real Change", "")}<strong>Real Change</strong></p>
            <div className="about-founder-story">
              {activeFounder.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="about-founder-controls">
              <span>{founderSlide + 1}/3</span>
              <div className="about-founder-progress">{founderSlides.map((item, index) => <button key={item.paragraphs[0]} className={index === founderSlide ? "active" : ""} onClick={() => setFounderSlide(index)} aria-label={`Founder story slide ${index + 1}`} />)}</div>
              <div className="about-founder-arrows">
                <button onClick={() => setFounderSlide((founderSlide + founderSlides.length - 1) % founderSlides.length)} aria-label="Previous founder story">‹</button>
                <button onClick={() => setFounderSlide((founderSlide + 1) % founderSlides.length)} aria-label="Next founder story">›</button>
              </div>
            </div>
          </div>
          <div className="about-founder-card">
            <img src={founderImage} alt="Pranav Gandhi" />
          </div>
        </div>
      </section>

      <section className="about-principle">
        <div className="about-wrap">
          <div className="about-principle-card">
            <div className="about-principle-mark"><strong>80</strong><em>/20</em><span>Principle</span></div>
            <div className="about-principle-copy">
              <span>The rule Pranav's father lived by</span>
              <h2>"Earn as much as you want—but make sure 20% goes back to the world that helped you earn it. If you want to do less good, earn less. But if you want to make a real difference, then go out there and earn more—so you can give more."</h2>
              <p>Not just a number — <strong>a way of life.</strong> The belief that prosperity and generosity are not opposites. The more you grow, the more you can give back.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-birth">
        <div className="about-wrap about-birth-grid">
          <div className="about-story-image"><img src={storyImage} alt="The birth of DoRight" /></div>
          <div className="about-birth-copy">
            <span className="about-pill"><i /> The Story</span>
            <h2>The Birth of <strong>DoRight?</strong></h2>
            <p className="about-birth-lead">Not in a boardroom. Not through a pitch deck.<br />But watching his father, Pranav felt something<br />— <strong>love, compassion, action.</strong></p>
            <p>DoRight wasn't built to be just another donation platform. It was born from something deeper—a belief that kindness should have a home, a heartbeat, and a way forward.</p>
            <p>This is more than a platform. It's a movement. A place where good intentions turn into real change. Where giving becomes a shared journey, not a transaction.</p>
          </div>
        </div>
      </section>

      <section className="about-can-do">
        <div className="about-wrap">
          <h2><span>What You Can Do</span><span>On <strong>DoRight?</strong></span></h2>
          <div className="about-feature-grid">
            {featureCards.map((card) => (
              <article className="about-feature-card" key={card.title}>
                <div className="about-feature-art">
                  <img src={card.image} alt={card.title} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <p className="about-feature-note">Give with Doright through <strong>PROMISES</strong> — where transparency and every donor–organisation relationship is valued and you<br />can <strong>witness the real change</strong> your kindness creates.</p>
        </div>
      </section>

      <section className="about-team">
        <div className="about-wrap">
          <h2>The Team That<br /><span>Made It Happen</span></h2>
          <div className="about-team-grid">
            {team.map((person) => (
              <article className="about-team-card" key={person.name}>
                <div className="about-team-text">
                  <h3>{person.name}</h3>
                  <h4>{person.role}</h4>
                  <p>{person.bio}</p>
                  <a href="/" aria-label={`${person.name} LinkedIn`}>LinkedIn</a>
                </div>
                <img src={person.image} alt={person.name} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-founder-quote">
        <div className="about-wrap">
          <blockquote>
            <p>"No dream, no matter how powerful, can take flight without the right people. I found not just team-mates, but kindred spirits — three ambitious minds who don't just believe in the dream. They owned it, breathed life into it, and carried it forward as if it were their own."</p>
            <cite>— Pranav Gandhi, Founder & CEO</cite>
          </blockquote>
        </div>
      </section>

      <section className="about-different">
        <div className="about-wrap about-different-grid">
          <div className="about-different-left">
            <img src={boardDifferent} alt="DoRight visible impact collage" />
            <aside>
              <p>We draw deep inspiration from my mentor, Mahatria, whose words are compass points for our every step:</p>
              <strong>"If you truly want to lift humanity, educate a mind or enable a livelihood. Empower, don't just support."</strong>
              <span>— This is the soul of DoRight.</span>
            </aside>
          </div>
          <div className="about-different-copy">
            <h2>What Makes <strong>DoRight</strong><br />Different?</h2>
            <h3>It's not the features. It's the feeling.</h3>
            <p>When you give through DoRight, you don't just send something off and hope. You see the impact.</p>
            <ul>
              <li>The classrooms that light up with new books.</li>
              <li>The kitchens that come alive with groceries.</li>
              <li>The children who are taught.</li>
              <li>The hands that are held.</li>
            </ul>
            <p className="about-different-ending">Because your kindness deserves a story — one with a beginning, a middle, and most importantly, a visible change.</p>
          </div>
        </div>
      </section>

      <section className="about-for">
        <div className="about-wrap about-for-grid">
          <div className="about-for-copy">
            <span className="about-pill"><i /> Who This Is For?</span>
            <h2>Not Just Charity.<br /><strong>It's Character.</strong></h2>
            <div className="about-for-list">
              <p>The mother who packs storybooks to share, not store.</p>
              <p>The student with two free hours and a full heart.</p>
              <p>The professional who quietly sets aside part of their pay for a child's school fees.</p>
              <p>The person who's always thought "I want to help" — and just needed to know where.</p>
            </div>
            <div className="about-for-built">
              <strong>DoRight was built for the everyday giver.</strong>
              <span>For anyone who wants to help... but just doesn't know where to begin.</span>
            </div>
          </div>
          <img src={boardFor} alt="Everyday giver collage" />
        </div>
      </section>

      <section className="about-final">
        <div className="about-wrap">
          <span className="about-pill"><i /> Act For Impact</span>
          <h2>This is where <strong>you begin.</strong></h2>
          <h3>Because giving doesn't have to be grand.<br />It doesn't need a big cheque — just a big heart.</h3>
          <p>DoRight is more than a platform. It's a reminder that kindness isn't measured in size — it's measured in sincerity. And sometimes, the smallest acts reveal the strongest character.</p>
          <div className="about-final-rule" />
          <h4>DoRight. <span>Act for Impact.</span></h4>
          <p>Because in a world full of noise, the quietest acts of kindness still echo the loudest.</p>
          <p>This is our story. We hope it becomes yours too.</p>
          <a className="about-join" href="/ngos">Join Now</a>
          <img src={boardFinal} alt="DoRight beginning illustration" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
