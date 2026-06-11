// ─── Single source of truth for ALL site content ─────────────────────────────
// Edit here → entire website updates automatically.

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV = {
  links: [
    { label: 'Home',        href: '/' },
    { label: 'About',       href: '/about' },
    { label: 'NGOs',        href: '/ngos' },
    { label: 'Campaigns',   href: '/campaigns' },
    { label: 'How it Works',href: '/#how-it-works' },
    { label: 'Blog',        href: '/blog' },
  ],
  cta: { label: 'Get Started', href: '/ngos' },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow:  'Partner with',
  titleLine1: 'DoRight to Amplify',
  titleLine2: 'Your Impact',
  body: '₹4,800 covers a full academic year — books, meals, and a teacher who shows up. Verified by Teach For India Foundation.',
  cta1: { label: 'Register Your NGO', href: '/ngos' },
  cta2: { label: 'Talk to Our Team',  href: '/about' },
};

// ─── Trusted ──────────────────────────────────────────────────────────────────
export const TRUSTED = {
  title: 'Trusted by',
  titleBold: 'Purpose-Driven NGOs',
  body: 'Doright collaborates with nonprofits and grassroots organizations working across education, healthcare, sustainability, women empowerment, child welfare, disability inclusion, animal welfare, and disaster response. Together, we are building a transparent and impact-driven giving ecosystem.',
  cta: { label: 'Apply for Verification', href: '/ngos' },
  features: [
    {
      title: 'Reach Donors Globally',
      desc: 'Your impact deserves a platform that helps your story travel globally.',
      svg: 'globe',
    },
    {
      title: 'Align with UN SDG Goals',
      desc: 'Doright helps NGOs align their work with internationally recognised Sustainable Development Goals (SDGs).',
      svg: 'target',
    },
    {
      title: 'Transparency Builds Donor Trust',
      desc: "Today's donors value clarity, accountability and measurable impact.",
      svg: 'shield',
    },
    {
      title: 'Compliance & NGO Verification Support',
      desc: 'Doright handsholds NGOs through important onboarding and compliance processes.',
      svg: 'doc',
    },
  ],
};

// ─── Platform Features ────────────────────────────────────────────────────────
export const PLATFORM = {
  title: 'Platform Features',
  tabs: [
    { id: 'health',    label: 'Health Fundraising Page',      desc: '' },
    { id: 'donation',  label: 'Direct Donation Pages',        desc: 'Doright enables NGOs to seamlessly create and manage multiple fundraising experiences from one platform.' },
    { id: 'campaign',  label: 'Fundraising Campaign',         desc: '' },
    { id: 'events',    label: 'Events & Community Drive',     desc: '' },
    { id: 'product',   label: 'Product & Merchandise Platform', desc: '' },
  ],
  phone: {
    appTitle: 'Give',
    appSubtitle: 'Make Your Change Possible',
    tabs: ['Home', 'Give', 'Things', 'Profile'],
  },
};

// ─── How It Works ─────────────────────────────────────────────────────────────
export const HOW_IT_WORKS = {
  title: 'How it works',
  subtitle: 'Get Started in 4 Simple Steps',
  steps: [
    { num: 1, label: 'Register Your NGO',    desc: 'Simply complete your registration profile online.',                    icon: 'pin' },
    { num: 2, label: 'Upload Documents',     desc: 'Submit all required compliance and verification documents.',            icon: 'cyclist' },
    { num: 3, label: 'Complete Video KYC',   desc: 'Complete the verification/authentication through our video technology.', icon: 'none' },
    { num: 4, label: 'Get Approved',         desc: 'Get listed and start fundraising.',                                     icon: 'flag' },
  ],
};

// ─── NGO Partners ─────────────────────────────────────────────────────────────
export const PARTNERS = {
  title: 'Meet Our NGO Partners',
  body: 'Doright annually collaborates with impactful, grassroots initiatives, and social impact organisations working tirelessly to create meaningful change across communities from education and healthcare to environmental sustainability and women empowerment, our field partners are proving impact creates a timeless result. Together, we are building a transparent, trusted and purpose-driven giving ecosystem.',
  items: [
    { id: 1, name: 'Vidya Setu' },
    { id: 2, name: 'GreenRoots' },
    { id: 3, name: 'Aarogya' },
    { id: 4, name: 'SheRises' },
    { id: 5, name: 'Clean Water' },
    { id: 6, name: 'HungerFree' },
    { id: 7, name: 'ChildCare' },
  ],
};

// ─── Certification ────────────────────────────────────────────────────────────
export const CERTIFICATION = {
  banner: {
    title: 'Get Certified with Doright',
    body: 'Get your NGO certified and build trust with donors, partners and regulatory bodies. Doright\'s certification framework ensures your organisation meets the highest standards of transparency.',
  },
  tiers: [
    {
      title: 'Basic Verification',
      featured: false,
      items: ['Application Compliance Check', 'Documentation Compliance Check', 'Location Authentication', 'Digital Authentication', 'Basic Transparency Status', 'Comply with Financial reporting', 'Basic Transparency Visible'],
    },
    {
      title: 'Trusted Partner Verification',
      featured: true,
      items: ['Advanced Preliminary', 'Advanced Compliance Check', 'Location Verification', 'Fieldwork Verification', 'Engagement With donor app', 'Some fieldwork authentication', 'Trusted Partner badge', 'Community access'],
    },
    {
      title: 'Impact Certified',
      featured: false,
      items: ['Impact Value in all Tiers', 'Transparency and Accountability', 'Quarterly Compliance Reviews', 'Yearly Compliance Reviews', 'External Audit for FCRA', 'Compliance Engagement', 'Community access'],
    },
  ],
};

// ─── Get Featured ─────────────────────────────────────────────────────────────
export const FEATURED = {
  title: 'Get Your',
  titleBold: 'NGO Featured',
  body1: "After completing Doright's verification and onboarding process, selected NGOs receive additional visibility, promotional support, and fundraising assistance to help amplify their impact.",
  body2: "Doright supports organisations with tools and campaigns designed to improve donor reach, storytelling, and fundraising performance.",
  tags: [
    { title: 'Storytelling & Campaign Content', desc: 'Doright helps tell your mission story effectively using Doright.' },
    { title: 'Outreach & Donor Communication',  desc: 'Tools that connect you to donors.' },
    { title: 'Social Media Visibility',          desc: 'Promote & distribute campaigns.' },
  ],
};

// ─── Join Network ─────────────────────────────────────────────────────────────
export const JOIN = {
  title: 'Join the Doright',
  titleBold: 'NGO Network',
  body: 'Become part of a trusted ecosystem focused on transparency, accessibility, and meaningful social impact.',
  cta1: { label: 'Raise Funds with Doright', href: '/ngos' },
  cta2: { label: 'Talk to Our Team',         href: '/about' },
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: 'Doright is a unified technology platform for all things in philanthropy. Whether it\'s individuals, NGOs, or corporations, we ensure that actions matter and create an impact.',
  columns: [
    {
      title: 'About Doright',
      links: [
        { label: 'About Us',      href: '/about' },
        { label: 'FAQ',           href: '#' },
        { label: 'Privacy Policy',href: '#' },
        { label: 'Contact Us',    href: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'NGOs',      href: '/ngos' },
        { label: 'Campaigns', href: '/campaigns' },
        { label: 'Blog',      href: '/blog' },
        { label: 'Register',  href: '/ngos' },
      ],
    },
  ],
  social: [
    { label: 'Facebook',  icon: 'f',  href: '#' },
    { label: 'Twitter',   icon: 'X',  href: '#' },
    { label: 'Instagram', icon: '📷', href: '#' },
    { label: 'LinkedIn',  icon: 'in', href: '#' },
  ],
  copyright: '© 2024 Doright. All rights reserved.',
};

// ─── About Page ───────────────────────────────────────────────────────────────
export const ABOUT = {
  hero: {
    badge: 'About DoRight',
    title: 'We exist to amplify the',
    titleHighlight: 'impact of good people',
    body: "Doright was founded with a simple belief: NGOs doing extraordinary work deserve extraordinary tools. We're building the infrastructure layer for social impact in India.",
  },
  stats: [
    { value: '500+', label: 'NGOs Registered' },
    { value: '₹2Cr+', label: 'Funds Raised' },
    { value: '18', label: 'States Covered' },
    { value: '40K+', label: 'Donors Connected' },
  ],
  mission: {
    title: 'Our Mission',
    body1: 'To democratise philanthropy by making it easy for any NGO — regardless of size or resources — to connect with donors, demonstrate impact and achieve full compliance.',
    body2: 'We partner with purpose-driven organisations across education, healthcare, environment, women empowerment and child welfare — helping them raise funds, build credibility and scale their impact across India and beyond.',
    cta: { label: 'Join 500+ NGOs', href: '/ngos' },
  },
  values: [
    { icon: '🎯', title: 'Mission-First',        desc: 'Every feature we build serves one purpose — enabling NGOs to do more good.' },
    { icon: '🔍', title: 'Radical Transparency', desc: 'We believe trust is built through honest reporting, not marketing.' },
    { icon: '🤝', title: 'Partnership',           desc: 'We grow when our partner NGOs grow. Their success is our measure.' },
    { icon: '⚡', title: 'Simplicity',            desc: 'Compliance should be easy. Our platform removes friction at every step.' },
  ],
  team: [
    { name: 'Priya Sharma',  role: 'CEO & Co-Founder',         initials: 'PS' },
    { name: 'Arjun Mehta',   role: 'CTO & Co-Founder',         initials: 'AM' },
    { name: 'Sunita Rao',    role: 'Head of NGO Partnerships', initials: 'SR' },
    { name: 'Vikram Nair',   role: 'Head of Compliance',       initials: 'VN' },
  ],
};
